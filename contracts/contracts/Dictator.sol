// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.18;

// simple smart contract where if someone sends ERC20 tokens to this contract, it will make them the dictator of the contract
import "./USDC.sol";

contract Dictator {
    address public dictator;
    USDC public token;

    constructor(address _token) {
        dictator = msg.sender;
        token = USDC(_token);
    }

    function dictate() public {
        bool success = token.transferFrom(msg.sender, address(this
        ), 1);
        require(success, "transferFrom failed");
        dictator = msg.sender;
    }
}