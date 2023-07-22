import { ethers } from "hardhat";
import { expect } from "chai";
import { MultiSigWallet, MultiSigWallet__factory } from "../typechain-types";
// @ts-ignore
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

describe("MultiSigWallet", () => {
  let contract: MultiSigWallet;
  let owners: HardhatEthersSigner[];
  let ownerAddresses: string[];
  let nonOwner: HardhatEthersSigner;

  beforeEach(async () => {
    // Deploy the contract
    const signers = await ethers.getSigners();
    ownerAddresses = [];
    owners = signers.slice(0, 3); // Use the first 3 signers as owners
    owners.forEach(async (owner) => {
      ownerAddresses.push(await owner.getAddress());
    });
    nonOwner = signers[3]; // Use the 4th signer as a non-owner

    const contractFactory: MultiSigWallet__factory =
      await ethers.getContractFactory("MultiSigWallet");
    contract = await contractFactory.deploy(ownerAddresses, 2); // Use 2 confirmations required
    // deposit few ethers to the contract
    await owners[0].sendTransaction({
      to: contract.address,
      value: ethers.utils.parseEther("1"),
    });
  });

  describe("Constructor", () => {
    it("should set the owners and required confirmations correctly", async () => {
      expect(await contract.getOwners()).to.deep.equal(ownerAddresses);
      expect(await contract.numConfirmationsRequired()).to.equal(2);
    });

    it("should revert if owners array is empty", async () => {
      const contractFactory: MultiSigWallet__factory =
        await ethers.getContractFactory("MultiSigWallet");
      await expect(contractFactory.deploy([], 2)).to.be.revertedWith(
        "owners required"
      );
    });

    it("should revert if number of confirmations required is invalid", async () => {
      const contractFactory: MultiSigWallet__factory =
        await ethers.getContractFactory("MultiSigWallet");
      await expect(
        contractFactory.deploy(ownerAddresses, 0)
      ).to.be.revertedWith("invalid number of required confirmations");
      await expect(
        contractFactory.deploy(ownerAddresses, 4)
      ).to.be.revertedWith("invalid number of required confirmations");
    });
  });

  describe("submitTransaction", () => {
    it("should submit a transaction", async () => {
      const to = await nonOwner.getAddress();
      const value = ethers.utils.parseEther("1");
      const data = "0x";

      await expect(
        contract.connect(owners[0]).submitTransaction(to, value, data)
      )
        .to.emit(contract, "SubmitTransaction")
        .withArgs(await owners[0].getAddress(), 0, to, value, data);

      const transaction = await contract.getTransaction(0);
      expect(transaction.to).to.equal(to);
      expect(transaction.value).to.equal(value);
      expect(transaction.data).to.equal(data);
      expect(transaction.executed).to.be.false;
      expect(transaction.numConfirmations).to.equal(0);
    });

    it("should revert if called by a non-owner", async () => {
      const to = await nonOwner.getAddress();
      const value = ethers.utils.parseEther("1");
      const data = "0x";

      await expect(
        contract.connect(nonOwner).submitTransaction(to, value, data)
      ).to.be.revertedWith("not owner");
    });
  });

  describe("confirmTransaction", () => {
    beforeEach(async () => {
      const to = await nonOwner.getAddress();
      const value = ethers.utils.parseEther("1");
      const data = "0x";
      await contract.connect(owners[0]).submitTransaction(to, value, data);
    });

    it("should confirm a transaction", async () => {
      await expect(contract.connect(owners[1]).confirmTransaction(0))
        .to.emit(contract, "ConfirmTransaction")
        .withArgs(await owners[1].getAddress(), 0);

      const transaction = await contract.getTransaction(0);
      expect(transaction.numConfirmations).to.equal(1);
      expect(await contract.isConfirmed(0, await owners[1].getAddress())).to.be
        .true;
    });

    it("should revert if the transaction does not exist", async () => {
      await expect(
        contract.connect(owners[1]).confirmTransaction(1)
      ).to.be.revertedWith("tx does not exist");
    });

    it("should revert if the transaction has already been executed", async () => {
      await contract.connect(owners[1]).confirmTransaction(0);
      await contract.connect(owners[2]).confirmTransaction(0);
      await expect(
        contract.connect(owners[0]).confirmTransaction(0)
      ).to.be.revertedWith("tx already executed");
    });

    it("should revert if the transaction has already been confirmed by the caller", async () => {
      await contract.connect(owners[1]).confirmTransaction(0);
      await expect(
        contract.connect(owners[1]).confirmTransaction(0)
      ).to.be.revertedWith("tx already confirmed");
    });

    it("should revert if called by a non-owner", async () => {
      await expect(
        contract.connect(nonOwner).confirmTransaction(0)
      ).to.be.revertedWith("not owner");
    });
  });


  describe("revokeConfirmation", () => {
    beforeEach(async () => {
      const to = await nonOwner.getAddress();
      const value = ethers.utils.parseEther("1");
      const data = "0x";

      await contract.connect(owners[0]).submitTransaction(to, value, data);
      await contract.connect(owners[1]).confirmTransaction(0);
    });

    it("should revoke a confirmation", async () => {
      await expect(contract.connect(owners[1]).revokeConfirmation(0))
        .to.emit(contract, "RevokeConfirmation")
        .withArgs(await owners[1].getAddress(), 0);
      const transaction = await contract.getTransaction(0);
      expect(transaction.numConfirmations).to.equal(0);
      expect(await contract.isConfirmed(0, await owners[1].getAddress())).to.be
        .false;
    });

    it("should revert if the transaction does not exist", async () => {
      await expect(
        contract.connect(owners[0]).revokeConfirmation(1)
      ).to.be.revertedWith("tx does not exist");
    });

    it("should revert if the caller has not confirmed the transaction", async () => {
      await expect(
        contract.connect(owners[2]).revokeConfirmation(0)
      ).to.be.revertedWith("tx not confirmed");
    });

    it("should revert if the transaction has already been executed", async () => {
      await contract.connect(owners[2]).confirmTransaction(0);
      await expect(
        contract.connect(owners[1]).revokeConfirmation(0)
      ).to.be.revertedWith("tx already executed");
    });

    it("should revert if called by a non-owner", async () => {
      await expect(
        contract.connect(nonOwner).revokeConfirmation(0)
      ).to.be.revertedWith("not owner");
    });
  });

  describe("Fallback function", () => {
    it("should emit a Deposit event when receiving ether", async () => {
      const value = ethers.utils.parseEther("1");
      // balance of the contract before the transaction
      const balanceBefore = await ethers.provider.getBalance(
        contract.address
      );
      await expect(async () =>
        nonOwner.sendTransaction({ to: contract.address, value })
      ).to.changeEtherBalance(contract, value);

      const depositEvent = (
        await contract.queryFilter(contract.filters.Deposit())
      )[1];
      expect(depositEvent.args.sender).to.equal(await nonOwner.getAddress());
      expect(depositEvent.args.amount).to.equal(value);
      expect(depositEvent.args.balance).to.equal(value.add(balanceBefore));
    });
  });

  describe("Getter functions", () => {
    beforeEach(async () => {
      const to = await nonOwner.getAddress();
      const value = ethers.utils.parseEther("1");
      const data = "0x";
      await contract.connect(owners[0]).submitTransaction(to, value, data);
    });

    it("should return the list of owners", async () => {
      expect(await contract.getOwners()).to.deep.equal(ownerAddresses);
    });

    it("should return the number of transactions", async () => {
      expect(await contract.getTransactionCount()).to.equal(1);
    });

    it("should return transaction details", async () => {
      const transaction = await contract.getTransaction(0);
      const expectedTransaction = {
        to: await nonOwner.getAddress(),
        value: ethers.utils.parseEther("1"),
        data: "0x",
        executed: false,
        numConfirmations: 0,
      };
      expect(transaction.to).to.equal(expectedTransaction.to);
      expect(transaction.value).to.equal(expectedTransaction.value);
      expect(transaction.data).to.equal(expectedTransaction.data);
      expect(transaction.executed).to.equal(expectedTransaction.executed);
      expect(transaction.numConfirmations).to.equal(expectedTransaction.numConfirmations);
    });
  });
});
