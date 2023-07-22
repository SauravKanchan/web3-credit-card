/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  OracleHelper,
  OracleHelperInterface,
} from "../../../../../contracts/EIP4337/samples/utils/OracleHelper";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "currentPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cachedPriceTimestamp",
        type: "uint256",
      },
    ],
    name: "TokenPriceUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "cachedPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cachedPriceTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "force",
        type: "bool",
      },
    ],
    name: "updateCachedPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class OracleHelper__factory {
  static readonly abi = _abi;
  static createInterface(): OracleHelperInterface {
    return new utils.Interface(_abi) as OracleHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleHelper {
    return new Contract(address, _abi, signerOrProvider) as OracleHelper;
  }
}