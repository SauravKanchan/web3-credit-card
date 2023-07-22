import { ethers } from "hardhat";
import { expect } from "chai";
import { Dictator, Escrow, Escrow__factory, USDC } from "../typechain-types";
// @ts-ignore
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { aaSetup } from "./EIP4337";
import { TOTAL_SUPPLY, deployUSDC } from "./USDC";
import { SimpleAccountAPI } from "@account-abstraction/sdk";
import { deployDictator } from "./Dictator";


describe("Escrow", () => {
    let contract: Escrow;
    let accounts: HardhatEthersSigner[];
    let token: USDC;
    let scw: SimpleAccountAPI;
    let dictator: Dictator;

    beforeEach(async () => {
        token = await deployUSDC(TOTAL_SUPPLY);
        
        accounts = await ethers.getSigners();
        const contractFactory: Escrow__factory =
            await ethers.getContractFactory("Escrow");

        const [EntryPointContract, paymaster, WalletFactory,SimpleAccountContract, walletAPI] = await aaSetup(accounts); 
        scw = walletAPI;
        contract = await contractFactory.deploy(EntryPointContract.address, token.address);
        dictator = await deployDictator(token.address);

        const tx = await token.transfer(
            contract.address,
            BigInt(TOTAL_SUPPLY)
        );
        await tx.wait();

    });

    describe("Constructor", () => {
        it("should set the USDC address correctly", async () => {
            expect(await contract.token()).to.equal(token.address);
        });
    });

    describe("handleOps", () => {
        // scw needs to sign approve transaction
        it("should approve the USDC", async () => {
            const approveCall = token.interface.encodeFunctionData("approve", [dictator.address, 1000]);
            let op = await scw.createSignedUserOp({
                target: token.address,
                data: approveCall,
            });

            let addres = await scw.getAccountAddress();
            // check token balance of the above address
            let balance = await token.balanceOf(addres);
            let tx = await contract.execute_transaction(op);
            await tx.wait();

            balance = await token.balanceOf(addres);
            
            const dictate = dictator.interface.encodeFunctionData("dictate");
            let op2 = await scw.createSignedUserOp({
                target: dictator.address,
                data: dictate,
            });
            let tx2 = await contract.execute_transaction(op2);
            await tx2.wait();
            
        });
    });
});