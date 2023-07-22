/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TestERC20,
  TestERC20Interface,
} from "../../../../contracts/EIP4337/test/TestERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sudoApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sudoMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "sudoTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162000e3a38038062000e3a833981016040819052620000349162000188565b6040518060400160405280600981526020016805465737445524332360bc1b8152506040518060400160405280600381526020016205432360ec1b815250816003908162000083919062000258565b50600462000092828262000258565b505050620000b13369d3c21bcecceda1000000620000bd60201b60201c565b60ff166080526200034c565b6001600160a01b038216620001185760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200012c919062000324565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b505050565b6000602082840312156200019b57600080fd5b815160ff81168114620001ad57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620001df57607f821691505b6020821081036200020057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200018357600081815260208120601f850160051c810160208610156200022f5750805b601f850160051c820191505b8181101562000250578281556001016200023b565b505050505050565b81516001600160401b03811115620002745762000274620001b4565b6200028c81620002858454620001ca565b8462000206565b602080601f831160018114620002c45760008415620002ab5750858301515b600019600386901b1c1916600185901b17855562000250565b600085815260208120601f198616915b82811015620002f557888601518255948401946001909101908401620002d4565b5085821015620003145787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200034657634e487b7160e01b600052601160045260246000fd5b92915050565b608051610ad26200036860003960006101840152610ad26000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063395093511161008c578063a457c2d711610066578063a457c2d7146101f2578063a9059cbb14610205578063dd62ed3e14610218578063fb4dcefa1461025157600080fd5b806339509351146101ae57806370a08231146101c157806395d89b41146101ea57600080fd5b806318160ddd116100c857806318160ddd1461014557806323b872dd146101575780632d688ca81461016a578063313ce5671461017d57600080fd5b806305ea5c22146100ef57806306fdde0314610104578063095ea7b314610122575b600080fd5b6101026100fd366004610938565b610264565b005b61010c610274565b6040516101199190610974565b60405180910390f35b6101356101303660046109c2565b610306565b6040519015158152602001610119565b6002545b604051908152602001610119565b610135610165366004610938565b610320565b6101026101783660046109c2565b610344565b60405160ff7f0000000000000000000000000000000000000000000000000000000000000000168152602001610119565b6101356101bc3660046109c2565b610352565b6101496101cf3660046109ec565b6001600160a01b031660009081526020819052604090205490565b61010c610391565b6101356102003660046109c2565b6103a0565b6101356102133660046109c2565b61044f565b610149610226366004610a0e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61010261025f366004610a0e565b61045d565b61026f838383610486565b505050565b60606003805461028390610a41565b80601f01602080910402602001604051908101604052809291908181526020018280546102af90610a41565b80156102fc5780601f106102d1576101008083540402835291602001916102fc565b820191906000526020600020905b8154815290600101906020018083116102df57829003601f168201915b5050505050905090565b600033610314818585610486565b60019150505b92915050565b60003361032e8582856105de565b610339858585610670565b506001949350505050565b61034e828261085d565b5050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190610314908290869061038c908790610a7b565b610486565b60606004805461028390610a41565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104425760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103398286868403610486565b600033610314818585610670565b61034e8282610481856001600160a01b031660009081526020819052604090205490565b610670565b6001600160a01b0383166105015760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610439565b6001600160a01b03821661057d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610439565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461066a578181101561065d5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610439565b61066a8484848403610486565b50505050565b6001600160a01b0383166106ec5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610439565b6001600160a01b0382166107685760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610439565b6001600160a01b038316600090815260208190526040902054818110156107f75760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610439565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a361066a565b6001600160a01b0382166108b35760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610439565b80600260008282546108c59190610a7b565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b80356001600160a01b038116811461093357600080fd5b919050565b60008060006060848603121561094d57600080fd5b6109568461091c565b92506109646020850161091c565b9150604084013590509250925092565b600060208083528351808285015260005b818110156109a157858101830151858201604001528201610985565b506000604082860101526040601f19601f8301168501019250505092915050565b600080604083850312156109d557600080fd5b6109de8361091c565b946020939093013593505050565b6000602082840312156109fe57600080fd5b610a078261091c565b9392505050565b60008060408385031215610a2157600080fd5b610a2a8361091c565b9150610a386020840161091c565b90509250929050565b600181811c90821680610a5557607f821691505b602082108103610a7557634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561031a57634e487b7160e01b600052601160045260246000fdfea2646970667358221220622dbe76a1c8211090a19acaace1511d0b82a114e73cba898942d4e38af2c16b64736f6c63430008120033";

type TestERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC20__factory extends ContractFactory {
  constructor(...args: TestERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestERC20> {
    return super.deploy(_decimals, overrides || {}) as Promise<TestERC20>;
  }
  override getDeployTransaction(
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_decimals, overrides || {});
  }
  override attach(address: string): TestERC20 {
    return super.attach(address) as TestERC20;
  }
  override connect(signer: Signer): TestERC20__factory {
    return super.connect(signer) as TestERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20Interface {
    return new utils.Interface(_abi) as TestERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20;
  }
}