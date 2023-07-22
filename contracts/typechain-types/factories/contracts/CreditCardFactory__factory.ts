/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  CreditCardFactory,
  CreditCardFactoryInterface,
} from "../../contracts/CreditCardFactory";

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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creditCard",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "CreditCardCreated",
    type: "event",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "bills",
    outputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "_card_owner",
        type: "address",
      },
    ],
    name: "createCreditCard",
    outputs: [
      {
        internalType: "address",
        name: "",
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
        name: "",
        type: "address",
      },
    ],
    name: "creditCards",
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
    name: "epoch",
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
    name: "getCreditCard",
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
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_body",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "increaseEpoch",
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
    name: "isCreditCard",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        internalType: "uint256",
        name: "_tx_index",
        type: "uint256",
      },
    ],
    name: "payBill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_card_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "postBill",
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
    inputs: [],
    name: "token",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_tx_index",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161264338038061264383398101604081905261002f916100ad565b6100383361005d565b600380546001600160a01b0319166001600160a01b03929092169190911790556100dd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100bf57600080fd5b81516001600160a01b03811681146100d657600080fd5b9392505050565b612557806100ec6000396000f3fe60806040523480156200001157600080fd5b5060043610620001095760003560e01c80638da5cb5b11620000a3578063f0975190116200006e578063f0975190146200024e578063f28578221462000265578063f2fde38b146200029c578063fc0c546a14620002b357600080fd5b80638da5cb5b1462000202578063900cf0cf1462000214578063b00835ed146200022d578063dabaaec5146200023757600080fd5b80632e1a7d4d11620000e45780632e1a7d4d14620001b157806356d5d47514620001ca5780636c6bb32f14620001e1578063715018a614620001f857600080fd5b806304b759ff146200010e5780630cfba55614620001455780632cfa84711462000185575b600080fd5b336000908152600160205260409020546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b6200016f6200015636600462000ba9565b6004602052600090815260409020805460019091015482565b604080519283526020830191909152016200013c565b620001286200019636600462000ba9565b6001602052600090815260409020546001600160a01b031681565b620001c8620001c236600462000bd0565b620002c7565b005b620001c8620001db36600462000bea565b62000345565b62000128620001f236600462000ba9565b620004a1565b620001c86200066b565b6000546001600160a01b031662000128565b6200021e60055481565b6040519081526020016200013c565b620001c862000683565b620001c86200024836600462000c82565b6200069c565b620001c86200025f36600462000bd0565b620006e0565b6200028b6200027636600462000ba9565b60026020526000908152604090205460ff1681565b60405190151581526020016200013c565b620001c8620002ad36600462000ba9565b62000a36565b60035462000128906001600160a01b031681565b620002d162000acc565b3360009081526001602052604090819020549051633006a32160e21b8152600481018390526001600160a01b0390911690819063c01a8c8490602401600060405180830381600087803b1580156200032857600080fd5b505af11580156200033d573d6000803e3d6000fd5b505050505050565b6003546001600160a01b03163314620003cb5760405162461bcd60e51b815260206004820152602a60248201527f4f6e6c7920746f6b656e20636f6e74726163742063616e2063616c6c2074686960448201527f732066756e6374696f6e0000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b8363ffffffff16600114620004495760405162461bcd60e51b815260206004820152602160248201527f4f6e6c792068616e646c65206d657373616765732066726f6d20636861696e2060448201527f31000000000000000000000000000000000000000000000000000000000000006064820152608401620003c2565b604081146200049b5760405162461bcd60e51b815260206004820152601460248201527f496e76616c6964206d65737361676520626f64790000000000000000000000006044820152606401620003c2565b50505050565b6000620004ad62000acc565b6001600160a01b038281166000908152600160205260409020541615620005175760405162461bcd60e51b815260206004820152601a60248201527f437265646974206361726420616c7265616479206578697374730000000000006044820152606401620003c2565b60408051600280825260608201835260009260208301908036833701905050905082816000815181106200054f576200054f62000cc7565b60200260200101906001600160a01b031690816001600160a01b031681525050308160018151811062000586576200058662000cc7565b60200260200101906001600160a01b031690816001600160a01b0316815250506000816002604051620005b99062000b85565b620005c692919062000cdd565b604051809103906000f080158015620005e3573d6000803e3d6000fd5b506001600160a01b038581166000908152600160208181526040808420805473ffffffffffffffffffffffffffffffffffffffff191695871695861790558484526002909152808320805460ff19169092179091555192935033927f1e1158d973497ac1bba659b5877c2b50325a24219aa9ecdfc666b4f1d6b781179190a39150505b919050565b6200067562000acc565b62000681600062000b28565b565b60058054906000620006958362000d30565b9190505550565b620006a662000acc565b604080518082018252600554815260208082019384526001600160a01b039094166000908152600490945292209151825551600190910155565b33600090815260046020818152604080842060019092528084205490517f9ace38c200000000000000000000000000000000000000000000000000000000815292830185905290926001600160a01b03909116918290639ace38c290602401600060405180830381865afa1580156200075d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000787919081019062000d69565b5050925050506000806000620007ab84602081015160248201516044909201519092565b919450925090506001600160a01b03821630146200080c5760405162461bcd60e51b815260206004820152601060248201527f496e76616c6964207472616e73666572000000000000000000000000000000006044820152606401620003c2565b85600101548114620008615760405162461bcd60e51b815260206004820152600e60248201527f496e76616c696420616d6f756e740000000000000000000000000000000000006044820152606401620003c2565b7fffffffff0000000000000000000000000000000000000000000000000000000083167fa9059cbb0000000000000000000000000000000000000000000000000000000014620008f45760405162461bcd60e51b815260206004820152601060248201527f496e76616c69642073656c6563746f72000000000000000000000000000000006044820152606401620003c2565b604051633006a32160e21b8152600481018890526001600160a01b0386169063c01a8c8490602401600060405180830381600087803b1580156200093757600080fd5b505af11580156200094c573d6000803e3d6000fd5b50506040517f6bbc379d000000000000000000000000000000000000000000000000000000008152600481018a90526001600160a01b0388169250636bbc379d9150602401602060405180830381865afa158015620009af573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620009d5919062000e7b565b62000a235760405162461bcd60e51b815260206004820152601260248201527f5472616e73616374696f6e206661696c656400000000000000000000000000006044820152606401620003c2565b6000866001018190555050505050505050565b62000a4062000acc565b6001600160a01b03811662000abe5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401620003c2565b62000ac98162000b28565b50565b6000546001600160a01b03163314620006815760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401620003c2565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6116888062000e9a83390190565b6001600160a01b038116811462000ac957600080fd5b60006020828403121562000bbc57600080fd5b813562000bc98162000b93565b9392505050565b60006020828403121562000be357600080fd5b5035919050565b6000806000806060858703121562000c0157600080fd5b843563ffffffff8116811462000c1657600080fd5b935060208501359250604085013567ffffffffffffffff8082111562000c3b57600080fd5b818701915087601f83011262000c5057600080fd5b81358181111562000c6057600080fd5b88602082850101111562000c7357600080fd5b95989497505060200194505050565b6000806040838503121562000c9657600080fd5b823562000ca38162000b93565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b604080825283519082018190526000906020906060840190828701845b8281101562000d215781516001600160a01b03168452928401929084019060010162000cfa565b50505092019290925292915050565b60006001820162000d5157634e487b7160e01b600052601160045260246000fd5b5060010190565b805180151581146200066657600080fd5b600080600080600060a0868803121562000d8257600080fd5b855162000d8f8162000b93565b809550506020808701519450604087015167ffffffffffffffff8082111562000db757600080fd5b818901915089601f83011262000dcc57600080fd5b81518181111562000de15762000de162000cb1565b604051601f8201601f19908116603f0116810190838211818310171562000e0c5762000e0c62000cb1565b816040528281528c8684870101111562000e2557600080fd5b600093505b8284101562000e49578484018601518185018701529285019262000e2a565b600086848301015280985050505050505062000e686060870162000d58565b9150608086015190509295509295909350565b60006020828403121562000e8e57600080fd5b62000bc98262000d5856fe60806040523480156200001157600080fd5b506040516200168838038062001688833981016040819052620000349162000281565b60008251116200007d5760405162461bcd60e51b815260206004820152600f60248201526e1bdddb995c9cc81c995c5d5a5c9959608a1b60448201526064015b60405180910390fd5b6000811180156200008f575081518111155b620000ee5760405162461bcd60e51b815260206004820152602860248201527f696e76616c6964206e756d626572206f6620726571756972656420636f6e6669604482015267726d6174696f6e7360c01b606482015260840162000074565b60005b8251811015620002435760008382815181106200011257620001126200035b565b6020026020010151905060006001600160a01b0316816001600160a01b031603620001705760405162461bcd60e51b815260206004820152600d60248201526c34b73b30b634b21037bbb732b960991b604482015260640162000074565b6001600160a01b03811660009081526001602052604090205460ff1615620001ce5760405162461bcd60e51b815260206004820152601060248201526f6f776e6572206e6f7420756e6971756560801b604482015260640162000074565b6001600160a01b031660008181526001602081905260408220805460ff191682179055815490810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630180546001600160a01b0319169091179055806200023a8162000371565b915050620000f1565b506002555062000399565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200027c57600080fd5b919050565b600080604083850312156200029557600080fd5b82516001600160401b0380821115620002ad57600080fd5b818501915085601f830112620002c257600080fd5b8151602082821115620002d957620002d96200024e565b8160051b604051601f19603f830116810181811086821117156200030157620003016200024e565b6040529283528183019350848101820192898411156200032057600080fd5b948201945b838610156200034957620003398662000264565b8552948201949382019362000325565b97909101519698969750505050505050565b634e487b7160e01b600052603260045260246000fd5b6000600182016200039257634e487b7160e01b600052601160045260246000fd5b5060010190565b6112df80620003a96000396000f3fe6080604052600436106100d65760003560e01c806380f59a651161007f578063c01a8c8411610059578063c01a8c84146102a8578063c6427474146102c8578063d0549b85146102e8578063ee22610b146102fe57600080fd5b806380f59a651461022b5780639ace38c214610266578063a0e67e2b1461028657600080fd5b80632f54bf6e116100b05780632f54bf6e1461019a57806333ea3dc8146101da5780636bbc379d1461020b57600080fd5b8063025e7c271461011c57806320ea8d86146101595780632e7700f01461017b57600080fd5b36610117576040805134815247602082015233917f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a15910160405180910390a2005b600080fd5b34801561012857600080fd5b5061013c610137366004610e3e565b61031e565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561016557600080fd5b50610179610174366004610e3e565b610348565b005b34801561018757600080fd5b506004545b604051908152602001610150565b3480156101a657600080fd5b506101ca6101b5366004610e73565b60016020526000908152604090205460ff1681565b6040519015158152602001610150565b3480156101e657600080fd5b506101fa6101f5366004610e3e565b610542565b604051610150959493929190610edb565b34801561021757600080fd5b506101ca610226366004610e3e565b61063d565b34801561023757600080fd5b506101ca610246366004610f17565b600360209081526000928352604080842090915290825290205460ff1681565b34801561027257600080fd5b506101fa610281366004610e3e565b61066f565b34801561029257600080fd5b5061029b610748565b6040516101509190610f43565b3480156102b457600080fd5b506101796102c3366004610e3e565b6107aa565b3480156102d457600080fd5b506101796102e3366004610fa6565b6109c3565b3480156102f457600080fd5b5061018c60025481565b34801561030a57600080fd5b50610179610319366004610e3e565b610b77565b6000818154811061032e57600080fd5b6000918252602090912001546001600160a01b0316905081565b3360009081526001602052604090205460ff166103985760405162461bcd60e51b81526020600482015260096024820152683737ba1037bbb732b960b91b60448201526064015b60405180910390fd5b600454819081106103df5760405162461bcd60e51b81526020600482015260116024820152701d1e08191bd95cc81b9bdd08195e1a5cdd607a1b604482015260640161038f565b81600481815481106103f3576103f3611071565b600091825260209091206003600590920201015460ff161561044d5760405162461bcd60e51b81526020600482015260136024820152721d1e08185b1c9958591e48195e1958dd5d1959606a1b604482015260640161038f565b60006004848154811061046257610462611071565b600091825260208083208784526003825260408085203386529092529220546005909102909101915060ff166104da5760405162461bcd60e51b815260206004820152601060248201527f7478206e6f7420636f6e6669726d656400000000000000000000000000000000604482015260640161038f565b60018160040160008282546104ef919061109d565b90915550506000848152600360209081526040808320338085529252808320805460ff191690555186927ff0dca620e2e81f7841d07bcc105e1704fb01475b278a9d4c236e1c62945edd5591a350505050565b600080606060008060006004878154811061055f5761055f611071565b6000918252602090912060059091020180546001820154600383015460048401546002850180549596506001600160a01b039094169492939260ff9092169183906105a9906110b6565b80601f01602080910402602001604051908101604052809291908181526020018280546105d5906110b6565b80156106225780601f106105f757610100808354040283529160200191610622565b820191906000526020600020905b81548152906001019060200180831161060557829003601f168201915b50505050509250955095509550955095505091939590929450565b60006004828154811061065257610652611071565b600091825260209091206003600590920201015460ff1692915050565b6004818154811061067f57600080fd5b60009182526020909120600590910201805460018201546002830180546001600160a01b0390931694509092916106b5906110b6565b80601f01602080910402602001604051908101604052809291908181526020018280546106e1906110b6565b801561072e5780601f106107035761010080835404028352916020019161072e565b820191906000526020600020905b81548152906001019060200180831161071157829003601f168201915b505050506003830154600490930154919260ff1691905085565b606060008054806020026020016040519081016040528092919081815260200182805480156107a057602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610782575b5050505050905090565b3360009081526001602052604090205460ff166107f55760405162461bcd60e51b81526020600482015260096024820152683737ba1037bbb732b960b91b604482015260640161038f565b6004548190811061083c5760405162461bcd60e51b81526020600482015260116024820152701d1e08191bd95cc81b9bdd08195e1a5cdd607a1b604482015260640161038f565b816004818154811061085057610850611071565b600091825260209091206003600590920201015460ff16156108aa5760405162461bcd60e51b81526020600482015260136024820152721d1e08185b1c9958591e48195e1958dd5d1959606a1b604482015260640161038f565b6000838152600360209081526040808320338452909152902054839060ff16156109165760405162461bcd60e51b815260206004820152601460248201527f747820616c726561647920636f6e6669726d6564000000000000000000000000604482015260640161038f565b60006004858154811061092b5761092b611071565b90600052602060002090600502019050600181600401600082825461095091906110f0565b909155505060008581526003602090815260408083203384529091529020805460ff1916600117905560025460048201540361098f5761098f85610b77565b604051859033907f5cbe105e36805f7820e291f799d5794ff948af2a5f664e580382defb6339004190600090a35050505050565b3360009081526001602052604090205460ff16610a0e5760405162461bcd60e51b81526020600482015260096024820152683737ba1037bbb732b960b91b604482015260640161038f565b600480546040805160a0810182526001600160a01b03878116825260208201878152928201868152600060608401819052608084018190526001860187559590955281517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b6005860290810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169290931691909117825592517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19c84015593519293909290917f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19d0190610b039082611152565b50606082015160038201805460ff19169115159190911790556080909101516004909101556040516001600160a01b03851690829033907fd5a05bf70715ad82a09a756320284a1b54c9ff74cd0f8cce6219e79b563fe59d90610b699088908890611212565b60405180910390a450505050565b3360009081526001602052604090205460ff16610bc25760405162461bcd60e51b81526020600482015260096024820152683737ba1037bbb732b960b91b604482015260640161038f565b60045481908110610c095760405162461bcd60e51b81526020600482015260116024820152701d1e08191bd95cc81b9bdd08195e1a5cdd607a1b604482015260640161038f565b8160048181548110610c1d57610c1d611071565b600091825260209091206003600590920201015460ff1615610c775760405162461bcd60e51b81526020600482015260136024820152721d1e08185b1c9958591e48195e1958dd5d1959606a1b604482015260640161038f565b600060048481548110610c8c57610c8c611071565b60009182526020909120600590910201600381015490915060ff1615610cea5760405162461bcd60e51b81526020600482015260136024820152721d1e08185b1c9958591e48195e1958dd5d1959606a1b604482015260640161038f565b60025481600401541015610d405760405162461bcd60e51b815260206004820152601160248201527f63616e6e6f742065786563757465207478000000000000000000000000000000604482015260640161038f565b60038101805460ff191660019081179091558154908201546040516000926001600160a01b03169190610d77906002860190611233565b60006040518083038185875af1925050503d8060008114610db4576040519150601f19603f3d011682016040523d82523d6000602084013e610db9565b606091505b5050905080610e0a5760405162461bcd60e51b815260206004820152600960248201527f7478206661696c65640000000000000000000000000000000000000000000000604482015260640161038f565b604051859033907f5445f318f4f5fcfb66592e68e0cc5822aa15664039bd5f0ffde24c5a8142b1ac90600090a35050505050565b600060208284031215610e5057600080fd5b5035919050565b80356001600160a01b0381168114610e6e57600080fd5b919050565b600060208284031215610e8557600080fd5b610e8e82610e57565b9392505050565b6000815180845260005b81811015610ebb57602081850181015186830182015201610e9f565b506000602082860101526020601f19601f83011685010191505092915050565b6001600160a01b038616815284602082015260a060408201526000610f0360a0830186610e95565b931515606083015250608001529392505050565b60008060408385031215610f2a57600080fd5b82359150610f3a60208401610e57565b90509250929050565b6020808252825182820181905260009190848201906040850190845b81811015610f845783516001600160a01b031683529284019291840191600101610f5f565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b600080600060608486031215610fbb57600080fd5b610fc484610e57565b925060208401359150604084013567ffffffffffffffff80821115610fe857600080fd5b818601915086601f830112610ffc57600080fd5b81358181111561100e5761100e610f90565b604051601f8201601f19908116603f0116810190838211818310171561103657611036610f90565b8160405282815289602084870101111561104f57600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b818103818111156110b0576110b0611087565b92915050565b600181811c908216806110ca57607f821691505b6020821081036110ea57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156110b0576110b0611087565b601f82111561114d57600081815260208120601f850160051c8101602086101561112a5750805b601f850160051c820191505b8181101561114957828155600101611136565b5050505b505050565b815167ffffffffffffffff81111561116c5761116c610f90565b6111808161117a84546110b6565b84611103565b602080601f8311600181146111b5576000841561119d5750858301515b600019600386901b1c1916600185901b178555611149565b600085815260208120601f198616915b828110156111e4578886015182559484019460019091019084016111c5565b50858210156112025787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b82815260406020820152600061122b6040830184610e95565b949350505050565b6000808354611241816110b6565b60018281168015611259576001811461126e5761129d565b60ff198416875282151583028701945061129d565b8760005260208060002060005b858110156112945781548a82015290840190820161127b565b50505082870194505b5092969550505050505056fea2646970667358221220b08abe027adc7ab48aa518ac69f368ba8a05cdac44d0ac80fb6fc23e287a8edc64736f6c63430008120033a2646970667358221220b656972dcd937a0274971d90ba87429a2dcb22d92ceaec58847970223ea7d7a764736f6c63430008120033";

type CreditCardFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CreditCardFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CreditCardFactory__factory extends ContractFactory {
  constructor(...args: CreditCardFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CreditCardFactory> {
    return super.deploy(_token, overrides || {}) as Promise<CreditCardFactory>;
  }
  override getDeployTransaction(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  override attach(address: string): CreditCardFactory {
    return super.attach(address) as CreditCardFactory;
  }
  override connect(signer: Signer): CreditCardFactory__factory {
    return super.connect(signer) as CreditCardFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CreditCardFactoryInterface {
    return new utils.Interface(_abi) as CreditCardFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreditCardFactory {
    return new Contract(address, _abi, signerOrProvider) as CreditCardFactory;
  }
}
