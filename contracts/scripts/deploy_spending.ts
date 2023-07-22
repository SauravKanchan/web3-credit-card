// deploy all the contracts
import { ethers } from "hardhat";

async function main() {
  const accounts = await ethers.getSigners();
  const totalSupply = ethers.utils.parseEther("1000000000");

  // deploy entrypoint contract
  const entrypointFactory = await ethers.getContractFactory("EntryPoint");
  const entrypoint = await entrypointFactory.deploy();
  await entrypoint.deployed();
  console.log("Entrypoint deployed to:", entrypoint.address);

  // deploy SimpleAccountFactory
  const simpleAccountFactoryFactory = await ethers.getContractFactory(
    "SimpleAccountFactory"
  );
  const simpleAccountFactory = await simpleAccountFactoryFactory.deploy(
    entrypoint.address
  );
  await simpleAccountFactory.deployed();
  console.log(
    "SimpleAccountFactory deployed to:",
    simpleAccountFactory.address
  );

  // deploy verifying paymaster contract
  const verifyingPaymasterFactory = await ethers.getContractFactory(
    "VerifyingPaymaster"
  );
  const verifyingPaymaster = await verifyingPaymasterFactory.deploy(
    entrypoint.address,
    await accounts[1].getAddress()
  );
  await verifyingPaymaster.deployed();
  console.log("VerifyingPaymaster deployed to:", verifyingPaymaster.address);

  console.log("Creating account for:", await accounts[1].getAddress());
  let tx = await simpleAccountFactory.createAccount(
    await accounts[1].getAddress(),
    0
  );
  await tx.wait();
  console.log("Account created", await simpleAccountFactory.getAddress(await accounts[1].getAddress(), 0));

  //   // deploy usdc contract
  //   const usdcFactory = await ethers.getContractFactory("USDC");
  //   const usdc = await usdcFactory.deploy(totalSupply);
  //   await usdc.deployed();
  //   console.log("USDC deployed to:", usdc.address);

  // send usdc to escrow contract
  //   let tx = await usdc.transfer(
  //     verifyingPaymaster.address,
  //     ethers.utils.parseEther("10000000")
  //   );
  //   await tx.wait();
  //   console.log("USDC sent to VerifyingPaymaster");
}

main();
