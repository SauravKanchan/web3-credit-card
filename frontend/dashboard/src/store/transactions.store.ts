import { defineStore } from "pinia";
import type { TransactionState } from "../types";

export const useTransactionsStore = defineStore("transactions", {
  state: () =>
    ({
      transactions: [],
    } as TransactionState),
  actions: {
    async fetchTransactions() {
      //fetch transactions from api here
      this.transactions = [
        {
          chain: "polygon",
          hash: "0xf4c2e7220d553c597ad1767371fd9a8c90cc1b53cdc34b8a7c5fbef4a2de5606",
          amount: 100,
          receiver: "0x306f3a47236327648e91e192c9824345a1a06a6a",
          date: "2021-10-01",
        },
        {
          chain: "arbitrum",
          hash: "0xf4c2e7220d553c597ad1767371fd9a8c90cc1b53cdc34b8a7c5fbef4a2de5606",
          amount: 100,
          receiver: "0x306f3a47236327648e91e192c9824345a1a06a6a",
          date: "2021-10-01",
        },
        {
          chain: "gnosis",
          hash: "0xf4c2e7220d553c597ad1767371fd9a8c90cc1b53cdc34b8a7c5fbef4a2de5606",
          amount: 100,
          receiver: "0x306f3a47236327648e91e192c9824345a1a06a6a",
          date: "2021-10-01",
        },
        {
          chain: "arbitrum",
          hash: "0xf4c2e7220d553c597ad1767371fd9a8c90cc1b53cdc34b8a7c5fbef4a2de5606",
          amount: 100,
          receiver: "0x306f3a47236327648e91e192c9824345a1a06a6a",
          date: "2021-10-01",
        },
        {
          chain: "gnosis",
          hash: "0xf4c2e7220d553c597ad1767371fd9a8c90cc1b53cdc34b8a7c5fbef4a2de5606",
          amount: 100,
          receiver: "0x306f3a47236327648e91e192c9824345a1a06a6a",
          date: "2021-10-01",
        },
      ];
    },
  },
});
