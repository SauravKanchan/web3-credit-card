// test Dictator contract

import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import { expect } from "chai";
import {
  Dictator,
  Dictator__factory,
  USDC,
  USDC__factory,
} from "../typechain-types";
// @ts-ignore
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { TOTAL_SUPPLY, deployUSDC } from "./USDC";

export async function deployDictator(usdcAddress: string): Promise<Dictator> {
  const dictatorFactory: Dictator__factory = await ethers.getContractFactory(
    "Dictator"
  );
  return await dictatorFactory.deploy(usdcAddress);
}

describe("Dictator", () => {
  let dictator: Dictator;
  let usdc: USDC;
  let accounts: HardhatEthersSigner[];

  beforeEach(async () => {
    accounts = await ethers.getSigners();
    usdc = await deployUSDC(TOTAL_SUPPLY);
    dictator = await deployDictator(usdc.address);
  });

  describe("Dictate", () => {
    it("should set the dictator correctly", async () => {
      let tx = await usdc.approve(dictator.address, 1);
      await tx.wait();

      await dictator.dictate();
      expect(await dictator.dictator()).to.equal(
        await accounts[0].getAddress()
      );
    });
  });
});
