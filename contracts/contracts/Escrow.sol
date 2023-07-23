// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./EIP4337/interfaces/IEntryPoint.sol";
import "./EIP4337/interfaces/UserOperation.sol";
import "./USDC.sol";
import "hardhat/console.sol";

contract Escrow is Ownable {
    mapping(address => Bill) public bills;
    IEntryPoint public entrypoint;
    USDC public token;

    struct Bill {
        uint epoch;
        uint amount;
    }

    uint public epoch;

    constructor(address _entrypoint, address _token) {
        entrypoint = IEntryPoint(_entrypoint);
        token = USDC(_token);
    }

    function increaseEpoch() public onlyOwner() {
        epoch++;
    } 

    function decode(bytes memory data) private pure returns(bytes4 selector, address to, uint256 amount) {
        assembly {
            // load 32 bytes into `selector` from `data` skipping the first 32 bytes
            selector := mload(add(data, 32))
            to := mload(add(data, 168))
            amount := mload(add(data, 200))
        }
    }

    function execute_transaction(UserOperation memory _ops) public onlyOwner() {
        UserOperation[] memory ops = new UserOperation[](1);
        ops[0] = _ops; 
        (bytes4 selector,,uint256 _amount) = decode(_ops.callData);
        // if selector is approve then only transfer the amount
        bills[_ops.sender] = Bill(epoch, _amount);
        token.transfer(_ops.sender, _amount);
        entrypoint.handleOps(ops, payable(msg.sender));
    }
}