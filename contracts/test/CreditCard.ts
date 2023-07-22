// write test file for CreditCardFactory.sol

import { ethers } from "hardhat";
import { expect } from "chai";
import {
  CreditCardFactory,
  CreditCardFactory__factory,
  MultiSigWallet,
  USDC,
} from "../typechain-types";
// @ts-ignore
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { TOTAL_SUPPLY, deployUSDC } from "./USDC";

describe("CreditCardFactory", () => {
  let contract: CreditCardFactory;
  let accounts: HardhatEthersSigner[];
  let usdc: USDC;

  beforeEach(async () => {
    accounts = await ethers.getSigners();
    usdc = await deployUSDC(TOTAL_SUPPLY);
    const contractFactory: CreditCardFactory__factory =
      await ethers.getContractFactory("CreditCardFactory");
    contract = await contractFactory.deploy(usdc.address);
  });

  describe("Constructor", () => {
    it("should set the USDC address correctly", async () => {
      expect(await contract.token()).to.equal(usdc.address);
    });
  });

  describe("createCreditCard", () => {
    it("should create a credit card", async () => {
      const owner = await accounts[1].getAddress();
      await contract.createCreditCard(owner);
      const cardAddress = await contract.creditCards(owner);
      const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");
      const multiSigWallet = MultiSigWallet.attach(cardAddress);
      expect(await multiSigWallet.getOwners()).contains(owner);
      expect(await multiSigWallet.getOwners()).contains(contract.address);
    });
  });

  describe("Bill", () => {
    let creditCard: MultiSigWallet;

    beforeEach(async () => {
      const owner = await accounts[1].getAddress();
      await contract.createCreditCard(owner);
      const multiSigWallet = await ethers.getContractFactory("MultiSigWallet");
      creditCard = multiSigWallet.attach(await contract.creditCards(owner));
    });

    it("Factory Owner should bill the card", async () => {
      const bill = 1000;
      let tx = await contract.postBill(accounts[1].address, bill);
      await tx.wait();
      expect((await contract.bills(accounts[1].address)).amount).to.equal(bill);
    });

    it("card owner should pay the bill", async () => {
      const bill = 1000000000;

      let tx_usdc = await usdc.transfer(creditCard.address, bill);
      await tx_usdc.wait();

      // multisig should have usdc to pay the bill
      const to = usdc.address;
      const data = usdc.interface.encodeFunctionData("transfer", [
        contract.address,
        bill,
      ]);

      // post a bill to multisig
      let tx = await contract.postBill(accounts[1].address, bill);
      await tx.wait();

      const value = 0;
      await creditCard.connect(accounts[1]).submitTransaction(to, value, data);
      const tx_index = (await creditCard.getTransactionCount()).sub(1);

      let tx2 = await creditCard
        .connect(accounts[1])
        .confirmTransaction(tx_index);
      await tx2.wait();

      let tx3 = await contract.connect(accounts[1]).payBill(tx_index);
      await tx3.wait();
    });

    it("factory owner should close the bill", async () => {});
  });
});
