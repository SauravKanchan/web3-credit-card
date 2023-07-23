/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Mailbox,
  MailboxInterface,
} from "../../../../contracts/interfaces/Hyperlane.sol/Mailbox";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_destination",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_recipient",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_body",
        type: "bytes",
      },
    ],
    name: "dispatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class Mailbox__factory {
  static readonly abi = _abi;
  static createInterface(): MailboxInterface {
    return new utils.Interface(_abi) as MailboxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Mailbox {
    return new Contract(address, _abi, signerOrProvider) as Mailbox;
  }
}