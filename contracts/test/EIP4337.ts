// test file for creating Smart Contract Wallet using EIP-4337

import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from "chai";
import {
  SimpleAccount,
  SimpleAccount__factory,
  SimpleAccountFactory,
  SimpleAccountFactory__factory,
  EntryPoint,
  EntryPoint__factory,
  USDC,
  Dictator,
  VerifyingPaymaster,
  VerifyingPaymaster__factory,
} from "../typechain-types";
import { PaymasterAPI, SimpleAccountAPI } from "@account-abstraction/sdk";
import { TOTAL_SUPPLY, deployUSDC } from "./USDC";
import { deployDictator } from "./Dictator";

const MOCK_VALID_UNTIL = "0x00000000deadbeef";
const MOCK_VALID_AFTER = "0x0000000000001234";
const MOCK_SIG = "0x1234";


export const aaSetup = async (accounts: Signer[]): Promise<[EntryPoint, VerifyingPaymaster, SimpleAccount__factory, SimpleAccount, SimpleAccountAPI]> => {
    const contractFactory: EntryPoint__factory =
    await ethers.getContractFactory("EntryPoint");
    const EntryPointContract =  await contractFactory.deploy();

    const SimpleAccountContractFFactory: SimpleAccountFactory__factory =
      await ethers.getContractFactory("SimpleAccountFactory");
    const SimpleAccountContractF: SimpleAccountFactory =
      await SimpleAccountContractFFactory.deploy(EntryPointContract.address);

    // deploy the verifying paymaster
    const VerifyingPaymasterFactory: VerifyingPaymaster__factory =
      await ethers.getContractFactory("VerifyingPaymaster");
    const paymaster = await VerifyingPaymasterFactory.deploy(
      EntryPointContract.address,
      await accounts[1].getAddress()
    );

    await paymaster.addStake(1, {
      value: ethers.utils.parseEther("2"),
    });
    await EntryPointContract.depositTo(paymaster.address, {
      value: ethers.utils.parseEther("1"),
    });

    // create a new account
    await SimpleAccountContractF.createAccount(
      await accounts[0].getAddress(),
      0
    );
    const WalletFactory = await ethers.getContractFactory("SimpleAccount");
    let simpleAccountAddress = await SimpleAccountContractF.getAddress(
      await accounts[0].getAddress(),
      0
    );
    const SimpleAccountContract = (await WalletFactory.attach(
      simpleAccountAddress
    )) as SimpleAccount;

    const paymasterAndData = ethers.utils.hexConcat([
      paymaster.address,
      ethers.utils.defaultAbiCoder.encode(
        ["uint48", "uint48"],
        [MOCK_VALID_UNTIL, MOCK_VALID_AFTER]
      ),
      MOCK_SIG,
    ]);

    class paymasterAPI extends PaymasterAPI {
      async getPaymasterAddress(): Promise<string> {
        return paymaster.address;
      }
      async getPaymasterAndData(): Promise<string> {
        return paymasterAndData;
      }
    }

    const provider = ethers.provider;
    const walletAPI = new SimpleAccountAPI({
      provider,
      entryPointAddress: EntryPointContract.address,
      owner: accounts[0],
      factoryAddress: SimpleAccountContractF.address,
      paymasterAPI: new paymasterAPI(),
    });

    return [EntryPointContract, paymaster, WalletFactory,SimpleAccountContract, walletAPI];
} 

describe("EIP4337", () => {
  let EntryPointContract: EntryPoint;
  let SimpleAccountContract: SimpleAccount;
  let WalletFactory: SimpleAccount__factory;
  let accounts: Signer[];
  let walletAPI: SimpleAccountAPI;
  let usdc: USDC;
  let dictator: Dictator;
  let paymaster: VerifyingPaymaster;

  beforeEach(async () => {
    accounts = await ethers.getSigners();
    // Deploy the contract
    const signers = await ethers.getSigners();
    [EntryPointContract, paymaster, WalletFactory,SimpleAccountContract, walletAPI] = await aaSetup(signers); 

    usdc = await deployUSDC(TOTAL_SUPPLY);
    dictator = await deployDictator(usdc.address);
  });

  describe("Constructor", () => {
    it("should set the owner correctly", async () => {
      expect(await SimpleAccountContract.owner()).to.equal(
        await accounts[0].getAddress()
      );
    });
  });

  describe("User Op", () => {
    it("should call dictate function in dictator contract", async () => {
      // transfer usdc to scw
      const tx = await usdc.transfer(
        SimpleAccountContract.address,
        BigInt(10 ** 18)
      );
      await tx.wait();

      // encode the approve function call of usdc
      const approveCall = usdc.interface.encodeFunctionData("approve", [
        dictator.address,
        1,
      ]);

      let op = await walletAPI.createSignedUserOp({
        target: usdc.address,
        data: approveCall,
      });

      let entryPointTx = await EntryPointContract.handleOps(
        [op],
        await accounts[0].getAddress()
      );

      // expect hash not to be empty
      expect(entryPointTx.hash).to.not.equal(ethers.constants.HashZero);
    });
  });
});
