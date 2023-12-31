/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Dictator, DictatorInterface } from "../../contracts/Dictator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "dictate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dictator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract USDC",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102f93803806102f983398101604081905261002f91610062565b60008054336001600160a01b031991821617909155600180549091166001600160a01b0392909216919091179055610092565b60006020828403121561007457600080fd5b81516001600160a01b038116811461008b57600080fd5b9392505050565b610258806100a16000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630632ede7146100465780634a0bd0b71461008f578063fc0c546a14610099575b600080fd5b6000546100669073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100976100b9565b005b6001546100669073ffffffffffffffffffffffffffffffffffffffff1681565b600180546040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481019290925260009173ffffffffffffffffffffffffffffffffffffffff909116906323b872dd906064016020604051808303816000875af115801561013b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015f91906101f9565b9050806101cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f7472616e7366657246726f6d206661696c656400000000000000000000000000604482015260640160405180910390fd5b50600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001633179055565b60006020828403121561020b57600080fd5b8151801515811461021b57600080fd5b939250505056fea264697066735822122050dc7015b11abc6eecd024f995796db9b30a205d07d8b1ff44bcb566ee453b2564736f6c63430008120033";

type DictatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DictatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Dictator__factory extends ContractFactory {
  constructor(...args: DictatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Dictator> {
    return super.deploy(_token, overrides || {}) as Promise<Dictator>;
  }
  override getDeployTransaction(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  override attach(address: string): Dictator {
    return super.attach(address) as Dictator;
  }
  override connect(signer: Signer): Dictator__factory {
    return super.connect(signer) as Dictator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DictatorInterface {
    return new utils.Interface(_abi) as DictatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Dictator {
    return new Contract(address, _abi, signerOrProvider) as Dictator;
  }
}
