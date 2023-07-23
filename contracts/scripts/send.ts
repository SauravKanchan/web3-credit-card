// load contract escrow
import { PaymasterAPI, SimpleAccountAPI } from "@account-abstraction/sdk";
import { ethers } from "hardhat";

async function main() {
  let accounts = await ethers.getSigners();
  const escrow = await ethers.getContractAt(
    "Escrow",
    "0xF3210ad9777F109268243E4306ba43F22116Ce8f"
  );

  const provider = ethers.provider;

  class paymasterAPI extends PaymasterAPI {
    async getPaymasterAddress() {
      return "0x0f239F07A19DbE69D41eF62eA0169E8AD6adAcfB";
    }
    async getPaymasterAndData() {
      return "0x0f239F07A19DbE69D41eF62eA0169E8AD6adAcfB";
    }
  }

  const walletAPI = new SimpleAccountAPI({
    provider,
    entryPointAddress: "0xF3210ad9777F109268243E4306ba43F22116Ce8f",
    owner: accounts[1],
    factoryAddress: "0x14f0B622A433D68e845B2ba43b8f310Ef4397E40",
    paymasterAPI: new paymasterAPI(),
  });

  // load usdc contract
  const token = await ethers.getContractAt(
    "USDC",
    "0x455B8Ef769EBe487405A798a5F5402D14CE334e6"
  );

  const approveCall = token.interface.encodeFunctionData("transfer", [
    "0xA71E829c16f8809EF52d08446E14314b8B689cFE",
    10 ** 18,
  ]);

  let op = await walletAPI.createSignedUserOp({
    target: token.address,
    data: approveCall,
  });

  let tx = await escrow.execute_transaction(op);
  await tx.wait();
  console.log(tx.hash);
}
main();
