/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  VerifyingPaymaster,
  VerifyingPaymasterInterface,
} from "../../../../contracts/EIP4337/samples/VerifyingPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_verifyingSigner",
        type: "address",
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
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
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "uint48",
        name: "validUntil",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "validAfter",
        type: "uint48",
      },
    ],
    name: "getHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [
      {
        internalType: "bytes",
        name: "paymasterAndData",
        type: "bytes",
      },
    ],
    name: "parsePaymasterAndData",
    outputs: [
      {
        internalType: "uint48",
        name: "validUntil",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "validAfter",
        type: "uint48",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "senderNonce",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "maxCost",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "verifyingSigner",
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
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161102a38038061102a83398101604081905261002f916100b9565b8161003933610051565b6001600160a01b039081166080521660a052506100f3565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146100b657600080fd5b50565b600080604083850312156100cc57600080fd5b82516100d7816100a1565b60208401519092506100e8816100a1565b809150509250929050565b60805160a051610ee1610149600039600061013f01526000818161026e0152818161036c0152818161041c01528181610532015281816105df0152818161066f0152818161071501526109260152610ee16000f3fe6080604052600436106100f35760003560e01c8063a9a234091161008a578063c399ec8811610059578063c399ec88146102c5578063d0e30db0146102da578063f2fde38b146102e2578063f465c77e1461030257600080fd5b8063a9a234091461023c578063b0d691fe1461025c578063bb9fe6bf14610290578063c23a5cea146102a557600080fd5b80638da5cb5b116100c65780638da5cb5b1461019357806394d4ad60146101b157806394e1fc19146101e15780639c90b4431461020f57600080fd5b80630396cb60146100f8578063205c28781461010d57806323d9ac9b1461012d578063715018a61461017e575b600080fd5b61010b610106366004610a54565b610330565b005b34801561011957600080fd5b5061010b610128366004610a96565b6103d5565b34801561013957600080fd5b506101617f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561018a57600080fd5b5061010b610460565b34801561019f57600080fd5b506000546001600160a01b0316610161565b3480156101bd57600080fd5b506101d16101cc366004610b0b565b610474565b6040516101759493929190610b4d565b3480156101ed57600080fd5b506102016101fc366004610bcd565b6104b1565b604051908152602001610175565b34801561021b57600080fd5b5061020161022a366004610c2b565b60016020526000908152604090205481565b34801561024857600080fd5b5061010b610257366004610c48565b61050e565b34801561026857600080fd5b506101617f000000000000000000000000000000000000000000000000000000000000000081565b34801561029c57600080fd5b5061010b610528565b3480156102b157600080fd5b5061010b6102c0366004610c2b565b61059f565b3480156102d157600080fd5b5061020161063e565b61010b6106e7565b3480156102ee57600080fd5b5061010b6102fd366004610c2b565b610762565b34801561030e57600080fd5b5061032261031d366004610ca8565b6107f7565b604051610175929190610d3c565b61033861081a565b6040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff821660048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690630396cb609034906024016000604051808303818588803b1580156103b957600080fd5b505af11580156103cd573d6000803e3d6000fd5b505050505050565b6103dd61081a565b6040517f205c28780000000000000000000000000000000000000000000000000000000081526001600160a01b038381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063205c287890604401600060405180830381600087803b1580156103b957600080fd5b61046861081a565b6104726000610874565b565b6000803681610487605460148789610d5e565b8101906104949190610d88565b90945092506104a68560548189610d5e565b949793965094505050565b60006104bc846108dc565b6001600160a01b038535166000908152600160209081526040918290205491516104ef9392469230928991899101610dbb565b6040516020818303038152906040528051906020012090509392505050565b61051661091b565b61052284848484610993565b50505050565b61053061081a565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561058b57600080fd5b505af1158015610522573d6000803e3d6000fd5b6105a761081a565b6040517fc23a5cea0000000000000000000000000000000000000000000000000000000081526001600160a01b0382811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063c23a5cea90602401600060405180830381600087803b15801561062357600080fd5b505af1158015610637573d6000803e3d6000fd5b5050505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156106be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e29190610e0b565b905090565b6040517fb760faf90000000000000000000000000000000000000000000000000000000081523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b760faf99034906024016000604051808303818588803b15801561062357600080fd5b61076a61081a565b6001600160a01b0381166107eb5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6107f481610874565b50565b6060600061080361091b565b61080e8585856109db565b91509150935093915050565b6000546001600160a01b031633146104725760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107e2565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60603660006108ef610120850185610e24565b915091508360208184030360405194506020810185016040528085528082602087013750505050919050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104725760405162461bcd60e51b815260206004820152601560248201527f53656e646572206e6f7420456e747279506f696e74000000000000000000000060448201526064016107e2565b60405162461bcd60e51b815260206004820152600d60248201527f6d757374206f766572726964650000000000000000000000000000000000000060448201526064016107e2565b6060600065ffffffffffff816109f2600142610e6b565b9050610a0060018383610a1c565b6040805160208101909152600081529890975095505050505050565b600060d08265ffffffffffff16901b60a08465ffffffffffff16901b85610a44576000610a47565b60015b60ff161717949350505050565b600060208284031215610a6657600080fd5b813563ffffffff81168114610a7a57600080fd5b9392505050565b6001600160a01b03811681146107f457600080fd5b60008060408385031215610aa957600080fd5b8235610ab481610a81565b946020939093013593505050565b60008083601f840112610ad457600080fd5b50813567ffffffffffffffff811115610aec57600080fd5b602083019150836020828501011115610b0457600080fd5b9250929050565b60008060208385031215610b1e57600080fd5b823567ffffffffffffffff811115610b3557600080fd5b610b4185828601610ac2565b90969095509350505050565b600065ffffffffffff808716835280861660208401525060606040830152826060830152828460808401376000608084840101526080601f19601f850116830101905095945050505050565b60006101608284031215610bac57600080fd5b50919050565b803565ffffffffffff81168114610bc857600080fd5b919050565b600080600060608486031215610be257600080fd5b833567ffffffffffffffff811115610bf957600080fd5b610c0586828701610b99565b935050610c1460208501610bb2565b9150610c2260408501610bb2565b90509250925092565b600060208284031215610c3d57600080fd5b8135610a7a81610a81565b60008060008060608587031215610c5e57600080fd5b843560038110610c6d57600080fd5b9350602085013567ffffffffffffffff811115610c8957600080fd5b610c9587828801610ac2565b9598909750949560400135949350505050565b600080600060608486031215610cbd57600080fd5b833567ffffffffffffffff811115610cd457600080fd5b610ce086828701610b99565b9660208601359650604090950135949350505050565b6000815180845260005b81811015610d1c57602081850181015186830182015201610d00565b506000602082860101526020601f19601f83011685010191505092915050565b604081526000610d4f6040830185610cf6565b90508260208301529392505050565b60008085851115610d6e57600080fd5b83861115610d7b57600080fd5b5050820193919092039150565b60008060408385031215610d9b57600080fd5b610da483610bb2565b9150610db260208401610bb2565b90509250929050565b60c081526000610dce60c0830189610cf6565b6020830197909752506001600160a01b03949094166040850152606084019290925265ffffffffffff90811660808401521660a090910152919050565b600060208284031215610e1d57600080fd5b5051919050565b6000808335601e19843603018112610e3b57600080fd5b83018035915067ffffffffffffffff821115610e5657600080fd5b602001915036819003821315610b0457600080fd5b81810381811115610ea5577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9291505056fea26469706673582212209ad5b519ff35e53752e3601dac1ee06dbf02483500f8109a897e9c30dc97535c64736f6c63430008120033";

type VerifyingPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifyingPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VerifyingPaymaster__factory extends ContractFactory {
  constructor(...args: VerifyingPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    _verifyingSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VerifyingPaymaster> {
    return super.deploy(
      _entryPoint,
      _verifyingSigner,
      overrides || {}
    ) as Promise<VerifyingPaymaster>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    _verifyingSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _entryPoint,
      _verifyingSigner,
      overrides || {}
    );
  }
  override attach(address: string): VerifyingPaymaster {
    return super.attach(address) as VerifyingPaymaster;
  }
  override connect(signer: Signer): VerifyingPaymaster__factory {
    return super.connect(signer) as VerifyingPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifyingPaymasterInterface {
    return new utils.Interface(_abi) as VerifyingPaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VerifyingPaymaster {
    return new Contract(address, _abi, signerOrProvider) as VerifyingPaymaster;
  }
}