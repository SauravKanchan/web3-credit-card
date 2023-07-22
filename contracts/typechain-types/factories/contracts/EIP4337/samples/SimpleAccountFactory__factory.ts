/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SimpleAccountFactory,
  SimpleAccountFactoryInterface,
} from "../../../../contracts/EIP4337/samples/SimpleAccountFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "accountImplementation",
    outputs: [
      {
        internalType: "contract SimpleAccount",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "contract SimpleAccount",
        name: "ret",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "getAddress",
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
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051612bcc380380612bcc83398101604081905261002f91610088565b8060405161003c9061007b565b6001600160a01b039091168152602001604051809103906000f080158015610068573d6000803e3d6000fd5b506001600160a01b0316608052506100b8565b611fcf80610bfd83390190565b60006020828403121561009a57600080fd5b81516001600160a01b03811681146100b157600080fd5b9392505050565b608051610b1e6100df60003960008181604b0152818160ed01526101cf0152610b1e6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311464fbe146100465780635fbfb9cf146100895780638cb84e181461009c575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61006d6100973660046102bf565b6100af565b61006d6100aa3660046102bf565b610190565b6000806100bc8484610190565b90506001600160a01b0381163b80156100d75750905061018a565b6040516001600160a01b038616602482015284907f00000000000000000000000000000000000000000000000000000000000000009060440160408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663189acdbd60e31b17905251610159906102b2565b61016492919061031b565b8190604051809103906000f5905080158015610184573d6000803e3d6000fd5b50925050505b92915050565b60006102798260001b604051806020016101a9906102b2565b601f1982820381018352601f9091011660408190526001600160a01b03871660248201527f00000000000000000000000000000000000000000000000000000000000000009060440160408051601f19818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663189acdbd60e31b17905290516102409392910161031b565b60408051601f198184030181529082905261025e929160200161035e565b60405160208183030381529060405280519060200120610280565b9392505050565b60006102798383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b61075b8061038e83390190565b600080604083850312156102d257600080fd5b82356001600160a01b03811681146102e957600080fd5b946020939093013593505050565b60005b838110156103125781810151838201526020016102fa565b50506000910152565b6001600160a01b038316815260406020820152600082518060408401526103498160608501602087016102f7565b601f01601f1916919091016060019392505050565b600083516103708184602088016102f7565b8351908301906103848183602088016102f7565b0194935050505056fe608060405260405161075b38038061075b83398101604081905261002291610319565b61002e82826000610035565b5050610436565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100ab60201b6100291760201c565b505b505050565b610074816100d7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d08383604051806060016040528060278152602001610734602791396101a9565b9392505050565b6100ea8161022260201b6100551760201c565b6101515760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61023160201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060600080856001600160a01b0316856040516101c691906103e7565b600060405180830381855af49150503d8060008114610201576040519150601f19603f3d011682016040523d82523d6000602084013e610206565b606091505b50909250905061021886838387610234565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a357825160000361029c576001600160a01b0385163b61029c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610148565b50816102ad565b6102ad83836102b5565b949350505050565b8151156102c55781518083602001fd5b8060405162461bcd60e51b81526004016101489190610403565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103105781810151838201526020016102f8565b50506000910152565b6000806040838503121561032c57600080fd5b82516001600160a01b038116811461034357600080fd5b60208401519092506001600160401b038082111561036057600080fd5b818501915085601f83011261037457600080fd5b815181811115610386576103866102df565b604051601f8201601f19908116603f011681019083821181831017156103ae576103ae6102df565b816040528281528860208487010111156103c757600080fd5b6103d88360208301602088016102f5565b80955050505050509250929050565b600082516103f98184602087016102f5565b9190910192915050565b60208152600082518060208401526104228160408501602087016102f5565b601f01601f19169190910160400192915050565b6102ef806104456000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b6100b9565b565b606061004e8383604051806060016040528060278152602001610293602791396100dd565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156100d8573d6000f35b3d6000fd5b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516101079190610243565b600060405180830381855af49150503d8060008114610142576040519150601f19603f3d011682016040523d82523d6000602084013e610147565b606091505b509150915061015886838387610162565b9695505050505050565b606083156101e35782516000036101dc5773ffffffffffffffffffffffffffffffffffffffff85163b6101dc5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b50816101ed565b6101ed83836101f5565b949350505050565b8151156102055781518083602001fd5b8060405162461bcd60e51b81526004016101d3919061025f565b60005b8381101561023a578181015183820152602001610222565b50506000910152565b6000825161025581846020870161021f565b9190910192915050565b602081526000825180602084015261027e81604085016020870161021f565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212204f67a5057d069cb7af5fec40e1775dfbff032525c818d6d448959287c496f00664736f6c63430008120033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220e28ff305075bdc7416cae016b39b94401efe5b5d2f50609dedd201c3a48c4aa664736f6c6343000812003360c0604052306080523480156200001557600080fd5b5060405162001fcf38038062001fcf833981016040819052620000389162000117565b6001600160a01b03811660a0526200004f62000056565b5062000149565b600054610100900460ff1615620000c35760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161462000115576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6000602082840312156200012a57600080fd5b81516001600160a01b03811681146200014257600080fd5b9392505050565b60805160a051611e13620001bc600039600081816102e401528181610731015281816107cb01528181610b2401528181610cf601528181610d3001528181610fe201526111fb0152600081816105980152818161061d01528181610875015281816108fa01526109e40152611e136000f3fe60806040526004361061012c5760003560e01c806352d1902d116100a5578063bc197c8111610074578063c4d66de811610059578063c4d66de814610385578063d087d288146103a5578063f23a6e61146103ba57600080fd5b8063bc197c8114610328578063c399ec881461037057600080fd5b806352d1902d146102825780638da5cb5b14610297578063b0d691fe146102d5578063b61d27f61461030857600080fd5b80633659cfe6116100fc5780634a58db19116100e15780634a58db19146102475780634d44560d1461024f5780634f1ef2861461026f57600080fd5b80633659cfe6146101f95780633a871cdd1461021957600080fd5b806223de291461013857806301ffc9a71461015f578063150b7a021461019457806318dfb3c7146101d957600080fd5b3661013357005b600080fd5b34801561014457600080fd5b5061015d6101533660046117b0565b5050505050505050565b005b34801561016b57600080fd5b5061017f61017a366004611861565b610400565b60405190151581526020015b60405180910390f35b3480156101a057600080fd5b506101c06101af36600461188b565b630a85bd0160e11b95945050505050565b6040516001600160e01b0319909116815260200161018b565b3480156101e557600080fd5b5061015d6101f4366004611943565b610484565b34801561020557600080fd5b5061015d6102143660046119af565b61058e565b34801561022557600080fd5b506102396102343660046119cc565b610709565b60405190815260200161018b565b61015d61072f565b34801561025b57600080fd5b5061015d61026a366004611a20565b6107c1565b61015d61027d366004611a62565b61086b565b34801561028e57600080fd5b506102396109d7565b3480156102a357600080fd5b506000546102bd906201000090046001600160a01b031681565b6040516001600160a01b03909116815260200161018b565b3480156102e157600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102bd565b34801561031457600080fd5b5061015d610323366004611b26565b610a9c565b34801561033457600080fd5b506101c0610343366004611b76565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561037c57600080fd5b50610239610aeb565b34801561039157600080fd5b5061015d6103a03660046119af565b610b95565b3480156103b157600080fd5b50610239610cb6565b3480156103c657600080fd5b506101c06103d5366004611c14565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60006001600160e01b03198216630a85bd0160e11b148061044a57506001600160e01b031982167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061047e57506001600160e01b031982167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b61048c610d25565b8281146104e05760405162461bcd60e51b815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b838110156105875761057585858381811061050057610500611c90565b905060200201602081019061051591906119af565b600085858581811061052957610529611c90565b905060200281019061053b9190611ca6565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610dba92505050565b8061057f81611ced565b9150506104e3565b5050505050565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016300361061b5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b60648201526084016104d7565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166106767f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146106e15760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b60648201526084016104d7565b6106ea81610e2a565b6040805160008082526020820190925261070691839190610e32565b50565b6000610713610fd7565b61071d848461104f565b9050610728826110fb565b9392505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf90000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b03919091169063b760faf99034906024016000604051808303818588803b1580156107ad57600080fd5b505af1158015610587573d6000803e3d6000fd5b6107c9611148565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c28780000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561084f57600080fd5b505af1158015610863573d6000803e3d6000fd5b505050505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036108f85760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b60648201526084016104d7565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166109537f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146109be5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b60648201526084016104d7565b6109c782610e2a565b6109d382826001610e32565b5050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a775760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016104d7565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610aa4610d25565b610ae5848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610dba92505050565b50505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610b6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b909190611d14565b905090565b600054610100900460ff1615808015610bb55750600054600160ff909116105b80610bcf5750303b158015610bcf575060005460ff166001145b610c415760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016104d7565b6000805460ff191660011790558015610c64576000805461ff0019166101001790555b610c6d826111b2565b80156109d3576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6040517f35567e1a000000000000000000000000000000000000000000000000000000008152306004820152600060248201819052906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610b4f565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610d6c57506000546201000090046001600160a01b031633145b610db85760405162461bcd60e51b815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e7460448201526064016104d7565b565b600080846001600160a01b03168484604051610dd69190611d51565b60006040518083038185875af1925050503d8060008114610e13576040519150601f19603f3d011682016040523d82523d6000602084013e610e18565b606091505b50915091508161058757805160208201fd5b610706611148565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610e6a57610e6583611244565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610ec4575060408051601f3d908101601f19168201909252610ec191810190611d14565b60015b610f365760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f74205555505300000000000000000000000000000000000060648201526084016104d7565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114610fcb5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c6555554944000000000000000000000000000000000000000000000060648201526084016104d7565b50610e6583838361131a565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610db85760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016104d7565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000908152601c829052603c81206110cc61108f610140860186611ca6565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250859392505061133f9050565b6000546201000090046001600160a01b039081169116146110f157600191505061047e565b5060009392505050565b801561070657604051600090339060001990849084818181858888f193505050503d8060008114610587576040519150601f19603f3d011682016040523d82523d6000602084013e610587565b6000546201000090046001600160a01b031633148061116657503330145b610db85760405162461bcd60e51b815260206004820152600a60248201527f6f6e6c79206f776e65720000000000000000000000000000000000000000000060448201526064016104d7565b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff16620100006001600160a01b038481168202929092178084556040519190048216927f0000000000000000000000000000000000000000000000000000000000000000909216917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de91a350565b6001600160a01b0381163b6112c15760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016104d7565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b61132383611363565b6000825111806113305750805b15610e6557610ae583836113a3565b600080600061134e85856113c8565b9150915061135b8161140d565b509392505050565b61136c81611244565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606107288383604051806060016040528060278152602001611db760279139611572565b60008082516041036113fe5760208301516040840151606085015160001a6113f2878285856115ea565b94509450505050611406565b506000905060025b9250929050565b600081600481111561142157611421611d6d565b036114295750565b600181600481111561143d5761143d611d6d565b0361148a5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016104d7565b600281600481111561149e5761149e611d6d565b036114eb5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016104d7565b60038160048111156114ff576114ff611d6d565b036107065760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f756500000000000000000000000000000000000000000000000000000000000060648201526084016104d7565b6060600080856001600160a01b03168560405161158f9190611d51565b600060405180830381855af49150503d80600081146115ca576040519150601f19603f3d011682016040523d82523d6000602084013e6115cf565b606091505b50915091506115e0868383876116ae565b9695505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561162157506000905060036116a5565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611675573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661169e576000600192509250506116a5565b9150600090505b94509492505050565b6060831561171d578251600003611716576001600160a01b0385163b6117165760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104d7565b5081611727565b611727838361172f565b949350505050565b81511561173f5781518083602001fd5b8060405162461bcd60e51b81526004016104d79190611d83565b6001600160a01b038116811461070657600080fd5b60008083601f84011261178057600080fd5b50813567ffffffffffffffff81111561179857600080fd5b60208301915083602082850101111561140657600080fd5b60008060008060008060008060c0898b0312156117cc57600080fd5b88356117d781611759565b975060208901356117e781611759565b965060408901356117f781611759565b955060608901359450608089013567ffffffffffffffff8082111561181b57600080fd5b6118278c838d0161176e565b909650945060a08b013591508082111561184057600080fd5b5061184d8b828c0161176e565b999c989b5096995094979396929594505050565b60006020828403121561187357600080fd5b81356001600160e01b03198116811461072857600080fd5b6000806000806000608086880312156118a357600080fd5b85356118ae81611759565b945060208601356118be81611759565b935060408601359250606086013567ffffffffffffffff8111156118e157600080fd5b6118ed8882890161176e565b969995985093965092949392505050565b60008083601f84011261191057600080fd5b50813567ffffffffffffffff81111561192857600080fd5b6020830191508360208260051b850101111561140657600080fd5b6000806000806040858703121561195957600080fd5b843567ffffffffffffffff8082111561197157600080fd5b61197d888389016118fe565b9096509450602087013591508082111561199657600080fd5b506119a3878288016118fe565b95989497509550505050565b6000602082840312156119c157600080fd5b813561072881611759565b6000806000606084860312156119e157600080fd5b833567ffffffffffffffff8111156119f857600080fd5b84016101608187031215611a0b57600080fd5b95602085013595506040909401359392505050565b60008060408385031215611a3357600080fd5b8235611a3e81611759565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215611a7557600080fd5b8235611a8081611759565b9150602083013567ffffffffffffffff80821115611a9d57600080fd5b818501915085601f830112611ab157600080fd5b813581811115611ac357611ac3611a4c565b604051601f8201601f19908116603f01168101908382118183101715611aeb57611aeb611a4c565b81604052828152886020848701011115611b0457600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008060008060608587031215611b3c57600080fd5b8435611b4781611759565b935060208501359250604085013567ffffffffffffffff811115611b6a57600080fd5b6119a38782880161176e565b60008060008060008060008060a0898b031215611b9257600080fd5b8835611b9d81611759565b97506020890135611bad81611759565b9650604089013567ffffffffffffffff80821115611bca57600080fd5b611bd68c838d016118fe565b909850965060608b0135915080821115611bef57600080fd5b611bfb8c838d016118fe565b909650945060808b013591508082111561184057600080fd5b60008060008060008060a08789031215611c2d57600080fd5b8635611c3881611759565b95506020870135611c4881611759565b94506040870135935060608701359250608087013567ffffffffffffffff811115611c7257600080fd5b611c7e89828a0161176e565b979a9699509497509295939492505050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e19843603018112611cbd57600080fd5b83018035915067ffffffffffffffff821115611cd857600080fd5b60200191503681900382131561140657600080fd5b600060018201611d0d57634e487b7160e01b600052601160045260246000fd5b5060010190565b600060208284031215611d2657600080fd5b5051919050565b60005b83811015611d48578181015183820152602001611d30565b50506000910152565b60008251611d63818460208701611d2d565b9190910192915050565b634e487b7160e01b600052602160045260246000fd5b6020815260008251806020840152611da2816040850160208701611d2d565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212206af803bb921bf8f7f2bd1f565d9ed6b24706aa4a676021e9115ffc737e089caf64736f6c63430008120033";

type SimpleAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAccountFactory__factory extends ContractFactory {
  constructor(...args: SimpleAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleAccountFactory> {
    return super.deploy(
      _entryPoint,
      overrides || {}
    ) as Promise<SimpleAccountFactory>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_entryPoint, overrides || {});
  }
  override attach(address: string): SimpleAccountFactory {
    return super.attach(address) as SimpleAccountFactory;
  }
  override connect(signer: Signer): SimpleAccountFactory__factory {
    return super.connect(signer) as SimpleAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAccountFactoryInterface {
    return new utils.Interface(_abi) as SimpleAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleAccountFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleAccountFactory;
  }
}
