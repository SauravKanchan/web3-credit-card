import { defineStore } from "pinia";
import { AccountState, Chain } from "../types";
import { ethers } from "ethers";
import { abi } from "../../../../contracts/artifacts/contracts/MultiSigWallet.sol/MultiSigWallet.json";
import { abi as usdc_abi } from "../../../../contracts/artifacts/contracts/USDC.sol/USDC.json";
import { abi as credit_card_factory_abi } from "../../../../contracts/artifacts/contracts/CreditCardFactory.sol/CreditCardFactory.json";

function getUsdcContract(address: string, provider: any) {
  let signer = provider.getSigner();
  return new ethers.Contract(address, usdc_abi, signer);
}

function getCreditCardFactoryContract(address: string, provider: any) {
  let signer = provider.getSigner();
  return new ethers.Contract(address, credit_card_factory_abi, signer);
}

function getContract(address: string, provider: any) {
  let signer = provider.getSigner();
  return new ethers.Contract(address, abi, signer);
}

export const useAccountStore = defineStore("account", {
  state: () =>
    ({
      address: "",
      balance: null,
      isConnected: false,
      outstandingBalance: null,
      cards: [],
    } as AccountState),
  actions: {
    async connectWallet() {
      // Add connect to wallet here and any api calls
      this.isConnected = true;
      this.address = "0x1234567890";
      this.balance = 8.0;
      this.outstandingBalance = 1.0;
      this.cards = [
        {
          chain: "polygon",
          balance: 123,
        },
        {
          chain: "arbitrum",
          balance: 456,
        },
        {
          chain: "gnosis",
          balance: 789,
        },
      ];
    },
    async updateCard(chain: Chain, balance: number) {
      const card = this.cards.find((card) => card.chain === chain);
      if (card) {
        card.balance = balance;
      } else {
        this.cards.push({
          chain,
          balance,
        });
      }
    },
    async saveCards() {
      // Save cards logic here
      return this.cards;
    },
    async addDeposit(amount: number) {
      let usdc = getUsdcContract(
        "0xF9889569693D3f15A114046228627c811450E451",
        // @ts-ignore
        window.ethereum
      );
      let tx = await usdc.transfer(this.address, amount);
      await tx.wait();
      if (this.balance === null) {
        this.balance = 0;
      }

      this.balance += amount;
    },
    async withdraw(amount: number) {
      // Add deposit logic here
      let contract = getContract(
        "0x5FbDB2315678afecb367f032d93F642f54180aa3",
        // @ts-ignore
        window.ethereum
      );

      let transfer = contract.interface.encodeFunctionData("transfer", [
        contract.address,
        amount,
      ]);
      let tx = await contract.submitTransaction(transfer);
      await tx.wait();

      if (this.balance === null || this.balance < amount) {
        throw new Error("Insufficient funds");
      }
      this.balance -= amount;
    },
    async trustlessWithdraw(amount: number) {
      // Add deposit logic here
      let factory = getCreditCardFactoryContract(
        "0x0f239F07A19DbE69D41eF62eA0169E8AD6adAcfB",
        // @ts-ignore
        window.ethereum
      );
      let contract = getContract(
        "0x5FbDB2315678afecb367f032d93F642f54180aa3",
        // @ts-ignore
        window.ethereum
      );

      let transfer = contract.interface.encodeFunctionData("transfer", [
        contract.address,
        amount,
      ]);

      let id = await contract.callStatic.submitTransaction(transfer);
      let tx = await contract.submitTransaction(transfer);
      await tx.wait();

      let tx2 = await factory.trustlessWithdraw(id);
      await tx2.wait();
      if (this.balance === null || this.balance < amount) {
        throw new Error("Insufficient funds");
      }
      this.balance = 0;
      this.balance -= amount;
    },
    async payBill(amount: number) {
      // // Add deposit logic here
      // let factory = getCreditCardFactoryContract(
      //   "0x0f239F07A19DbE69D41eF62eA0169E8AD6adAcfB",
      //   // @ts-ignore
      //   window.ethereum
      // );
      // let contract = getContract(
      //   "0x5FbDB2315678afecb367f032d93F642f54180aa3",
      //   // @ts-ignore
      //   window.ethereum
      // );

      // let transfer = contract.interface.encodeFunctionData("transfer", [
      //   contract.address,
      //   amount,
      // ]);

      // let id = await contract.callStatic.submitTransaction(transfer);
      // let tx = await contract.submitTransaction(transfer);
      // await tx.wait();

      // let tx2 = await factory.payBill(id);
      // await tx2.wait();
      await new Promise((r) => setTimeout(r, 2500));

      this.outstandingBalance = 0;
      if (this.outstandingBalance === null) {
        this.outstandingBalance = 0;
      }
      if (this.balance === null) {
        this.balance = 0;
      }
      if (this.outstandingBalance < amount) {
        this.balance += amount - this.outstandingBalance;
        this.outstandingBalance = 0;
      } else {
        this.outstandingBalance -= amount;
      }
    },
  },
});
