import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  networks: {
    local: {
      chainId: 31337,
      url: "http://localhost:8545",
      accounts: [
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
        "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
        "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a",
        "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6",
      ],
    },
    local2: {
      chainId: 31337,
      url: "http://localhost:1234",
      accounts: [
        "0x974704a7996632a3737f12694ddf27284f11ddadcb350758ae704586419121d2",
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      ],
    },
    sepolia: {
      chainId: 11155111,
      url: "https://powerful-green-aura.ethereum-sepolia.discover.quiknode.pro/35d9ef2b746e394d115e85f50834846e1cf8c111/",
      accounts: [
        "0x974704a7996632a3737f12694ddf27284f11ddadcb350758ae704586419121d2",
      ],
    },

    goerli: {
      chainId: 5,
      url: "https://broken-red-gadget.ethereum-goerli.discover.quiknode.pro/0dbabb53791345933f902971a67c59ce1e46ef30/",
      accounts : [
       "0x974704a7996632a3737f12694ddf27284f11ddadcb350758ae704586419121d2",
       "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      ]
    },
  },
  etherscan: {
    apiKey: {
      sepolia: "",
      goerli: "",
    }
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
};

export default config;
