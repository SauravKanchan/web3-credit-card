// deploy all the contracts
import { ethers } from "hardhat";

async function main() {
  const totalSupply = ethers.utils.parseEther("1000000000");

  // deploy usdc contract
  const usdcFactory = await ethers.getContractFactory("USDC");
  const usdc = await usdcFactory.deploy(totalSupply);
  await usdc.deployed();
  console.log("USDC deployed to:", usdc.address);

}

main()