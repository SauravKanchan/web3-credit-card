import { defineStore } from "pinia";
import type { WhitelistState } from "../types";
import type { Chain } from "../types";

export const useWhitelistStore = defineStore("whitelist", {
  state: () =>
    ({
      whitelist: [],
    } as WhitelistState),
  actions: {
    async fetchWhitelist() {
      // Add fetch from api here
      this.whitelist = [
        {
          address: "0x0000000000000000000000000000000000000000",
          chain: "polygon",
        },
        {
          address: "0x0000000000000000000000000000000000000000",
          chain: "arbitrum",
        },
        {
          address: "0x0000000000000000000000000000000000000000",
          chain: "gnosis",
        },
      ];
    },
    async addToWhiteList(address: string, chain: Chain) {
      // Add to api here
      this.whitelist.push({ address, chain });
    },
  },
});
