import { defineStore } from "pinia";
import { AccountState, Chain } from "../types";

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
      this.balance = 971;
      this.outstandingBalance = 231;
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
      // Add deposit logic here
      if (this.balance === null) {
        this.balance = 0;
      }
      this.balance += amount;
    },
    async withdraw(amount: number) {
      // Add deposit logic here
      if (this.balance === null || this.balance < amount) {
        throw new Error("Insufficient funds");
      }
      this.balance -= amount;
    },
    async trustlessWithdraw(amount: number) {
      // Add deposit logic here
      if (this.balance === null || this.balance < amount) {
        throw new Error("Insufficient funds");
      }
      this.balance -= amount;
    },
    async payBill(amount: number) {
      // Add deposit logic here
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
