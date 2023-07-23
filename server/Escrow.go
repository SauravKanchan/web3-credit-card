// Code generated - DO NOT EDIT.
// This file is a generated binding and any manual changes will be lost.

package main

import (
	"errors"
	"math/big"
	"strings"

	ethereum "github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/event"
)

// Reference imports to suppress errors if they are not otherwise used.
var (
	_ = errors.New
	_ = big.NewInt
	_ = strings.NewReader
	_ = ethereum.NotFound
	_ = bind.Bind
	_ = common.Big1
	_ = types.BloomLookup
	_ = event.NewSubscription
)

// IEscrowUserOperation is an auto generated low-level Go binding around an user-defined struct.
type IEscrowUserOperation struct {
	Sender               common.Address
	Nonce                *big.Int
	InitCode             []byte
	CallData             []byte
	CallGasLimit         *big.Int
	VerificationGasLimit *big.Int
	PreVerificationGas   *big.Int
	MaxFeePerGas         *big.Int
	MaxPriorityFeePerGas *big.Int
	PaymasterAndData     []byte
	Signature            []byte
}

// IEscrowMetaData contains all meta data concerning the IEscrow contract.
var IEscrowMetaData = &bind.MetaData{
	ABI: "[{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"initCode\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"},{\"internalType\":\"uint256\",\"name\":\"callGasLimit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"verificationGasLimit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"preVerificationGas\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxFeePerGas\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"maxPriorityFeePerGas\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"paymasterAndData\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"signature\",\"type\":\"bytes\"}],\"internalType\":\"structIEscrow.UserOperation\",\"name\":\"_ops\",\"type\":\"tuple\"}],\"name\":\"execute_transaction\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
	Sigs: map[string]string{
		"bda62450": "execute_transaction((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))",
	},
}

// IEscrowABI is the input ABI used to generate the binding from.
// Deprecated: Use IEscrowMetaData.ABI instead.
var IEscrowABI = IEscrowMetaData.ABI

// Deprecated: Use IEscrowMetaData.Sigs instead.
// IEscrowFuncSigs maps the 4-byte function signature to its string representation.
var IEscrowFuncSigs = IEscrowMetaData.Sigs

// IEscrow is an auto generated Go binding around an Ethereum contract.
type IEscrow struct {
	IEscrowCaller     // Read-only binding to the contract
	IEscrowTransactor // Write-only binding to the contract
	IEscrowFilterer   // Log filterer for contract events
}

// IEscrowCaller is an auto generated read-only Go binding around an Ethereum contract.
type IEscrowCaller struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// IEscrowTransactor is an auto generated write-only Go binding around an Ethereum contract.
type IEscrowTransactor struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// IEscrowFilterer is an auto generated log filtering Go binding around an Ethereum contract events.
type IEscrowFilterer struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// IEscrowSession is an auto generated Go binding around an Ethereum contract,
// with pre-set call and transact options.
type IEscrowSession struct {
	Contract     *IEscrow          // Generic contract binding to set the session for
	CallOpts     bind.CallOpts     // Call options to use throughout this session
	TransactOpts bind.TransactOpts // Transaction auth options to use throughout this session
}

// IEscrowCallerSession is an auto generated read-only Go binding around an Ethereum contract,
// with pre-set call options.
type IEscrowCallerSession struct {
	Contract *IEscrowCaller // Generic contract caller binding to set the session for
	CallOpts bind.CallOpts  // Call options to use throughout this session
}

// IEscrowTransactorSession is an auto generated write-only Go binding around an Ethereum contract,
// with pre-set transact options.
type IEscrowTransactorSession struct {
	Contract     *IEscrowTransactor // Generic contract transactor binding to set the session for
	TransactOpts bind.TransactOpts  // Transaction auth options to use throughout this session
}

// IEscrowRaw is an auto generated low-level Go binding around an Ethereum contract.
type IEscrowRaw struct {
	Contract *IEscrow // Generic contract binding to access the raw methods on
}

// IEscrowCallerRaw is an auto generated low-level read-only Go binding around an Ethereum contract.
type IEscrowCallerRaw struct {
	Contract *IEscrowCaller // Generic read-only contract binding to access the raw methods on
}

// IEscrowTransactorRaw is an auto generated low-level write-only Go binding around an Ethereum contract.
type IEscrowTransactorRaw struct {
	Contract *IEscrowTransactor // Generic write-only contract binding to access the raw methods on
}

// NewIEscrow creates a new instance of IEscrow, bound to a specific deployed contract.
func NewIEscrow(address common.Address, backend bind.ContractBackend) (*IEscrow, error) {
	contract, err := bindIEscrow(address, backend, backend, backend)
	if err != nil {
		return nil, err
	}
	return &IEscrow{IEscrowCaller: IEscrowCaller{contract: contract}, IEscrowTransactor: IEscrowTransactor{contract: contract}, IEscrowFilterer: IEscrowFilterer{contract: contract}}, nil
}

// NewIEscrowCaller creates a new read-only instance of IEscrow, bound to a specific deployed contract.
func NewIEscrowCaller(address common.Address, caller bind.ContractCaller) (*IEscrowCaller, error) {
	contract, err := bindIEscrow(address, caller, nil, nil)
	if err != nil {
		return nil, err
	}
	return &IEscrowCaller{contract: contract}, nil
}

// NewIEscrowTransactor creates a new write-only instance of IEscrow, bound to a specific deployed contract.
func NewIEscrowTransactor(address common.Address, transactor bind.ContractTransactor) (*IEscrowTransactor, error) {
	contract, err := bindIEscrow(address, nil, transactor, nil)
	if err != nil {
		return nil, err
	}
	return &IEscrowTransactor{contract: contract}, nil
}

// NewIEscrowFilterer creates a new log filterer instance of IEscrow, bound to a specific deployed contract.
func NewIEscrowFilterer(address common.Address, filterer bind.ContractFilterer) (*IEscrowFilterer, error) {
	contract, err := bindIEscrow(address, nil, nil, filterer)
	if err != nil {
		return nil, err
	}
	return &IEscrowFilterer{contract: contract}, nil
}

// bindIEscrow binds a generic wrapper to an already deployed contract.
func bindIEscrow(address common.Address, caller bind.ContractCaller, transactor bind.ContractTransactor, filterer bind.ContractFilterer) (*bind.BoundContract, error) {
	parsed, err := abi.JSON(strings.NewReader(IEscrowABI))
	if err != nil {
		return nil, err
	}
	return bind.NewBoundContract(address, parsed, caller, transactor, filterer), nil
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_IEscrow *IEscrowRaw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _IEscrow.Contract.IEscrowCaller.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_IEscrow *IEscrowRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _IEscrow.Contract.IEscrowTransactor.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_IEscrow *IEscrowRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _IEscrow.Contract.IEscrowTransactor.contract.Transact(opts, method, params...)
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_IEscrow *IEscrowCallerRaw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _IEscrow.Contract.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_IEscrow *IEscrowTransactorRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _IEscrow.Contract.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_IEscrow *IEscrowTransactorRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _IEscrow.Contract.contract.Transact(opts, method, params...)
}

// ExecuteTransaction is a paid mutator transaction binding the contract method 0xbda62450.
//
// Solidity: function execute_transaction((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes) _ops) returns()
func (_IEscrow *IEscrowTransactor) ExecuteTransaction(opts *bind.TransactOpts, _ops IEscrowUserOperation) (*types.Transaction, error) {
	return _IEscrow.contract.Transact(opts, "execute_transaction", _ops)
}

// ExecuteTransaction is a paid mutator transaction binding the contract method 0xbda62450.
//
// Solidity: function execute_transaction((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes) _ops) returns()
func (_IEscrow *IEscrowSession) ExecuteTransaction(_ops IEscrowUserOperation) (*types.Transaction, error) {
	return _IEscrow.Contract.ExecuteTransaction(&_IEscrow.TransactOpts, _ops)
}

// ExecuteTransaction is a paid mutator transaction binding the contract method 0xbda62450.
//
// Solidity: function execute_transaction((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes) _ops) returns()
func (_IEscrow *IEscrowTransactorSession) ExecuteTransaction(_ops IEscrowUserOperation) (*types.Transaction, error) {
	return _IEscrow.Contract.ExecuteTransaction(&_IEscrow.TransactOpts, _ops)
}
