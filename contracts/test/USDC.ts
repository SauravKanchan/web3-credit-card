// write test case for USDC.sol

import { ethers } from "hardhat";
import { expect } from "chai";
import { USDC, USDC__factory } from "../typechain-types";
import { BigNumberish } from "ethers";

export const TOTAL_SUPPLY = BigInt(10_000_000 * 10 ** 18);
export async function deployUSDC(totalSupply: BigNumberish): Promise<USDC> {
  const contractFactory: USDC__factory = await ethers.getContractFactory(
    "USDC"
  );
  return await contractFactory.deploy(totalSupply);
}

describe("USDC", () => {
  let contract: USDC;

  beforeEach(async () => {
    // Deploy the contract
    const signers = await ethers.getSigners();
    contract = await deployUSDC(TOTAL_SUPPLY);
  });

  describe("Constructor", () => {
    it("should set the total supply correctly", async () => {
      expect(await contract.totalSupply()).to.equal(TOTAL_SUPPLY);
    });

    it("should set the owner balance correctly", async () => {
      expect(await contract.balanceOf(await contract.owner())).to.equal(
        TOTAL_SUPPLY
      );
    });
  });

  describe("transfer", () => {
    it("should transfer tokens", async () => {
      const to = await ethers.Wallet.createRandom().getAddress();
      const amount = 1000;
      await contract.transfer(to, amount);
      expect(await contract.balanceOf(to)).to.equal(amount);
    });

    it("should revert if the sender does not have enough balance", async () => {
      const to = await ethers.Wallet.createRandom().getAddress();
      const amount = TOTAL_SUPPLY + BigInt(1);
      await expect(contract.transfer(to, amount)).to.be.rejectedWith(
        "ERC20: transfer amount exceeds balance"
      );
    });
  });
});
