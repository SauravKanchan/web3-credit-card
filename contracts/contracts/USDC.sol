// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDC is ERC20 {
    address private _owner;
    constructor(uint256 initialSupply) ERC20("USD Coin", "USDC") {
        _owner = msg.sender;
        _mint(_owner, initialSupply);
    }

    function owner() public view returns (address) {
        return _owner;
    }
}