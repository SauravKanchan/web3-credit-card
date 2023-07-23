// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./EIP4337/interfaces/IEntryPoint.sol";
import "./EIP4337/interfaces/UserOperation.sol";
import "./USDC.sol";
import "hardhat/console.sol";


interface Mailbox {
    function dispatch(
        uint32 _destination,
        bytes32 _recipient,
        bytes calldata _body
    ) external returns (bytes32);
}


interface IMessageRecipient {
    /**
     * @notice Handle an interchain message
     * @param _origin Domain ID of the chain from which the message came
     * @param _sender Address of the message sender on the origin chain as bytes32
     * @param _body Raw bytes content of message body
     */
    function handle(
        uint32 _origin,
        bytes32 _sender,
        bytes calldata _body
    ) external;
}

contract Escrow is Ownable, IMessageRecipient {
    mapping(address => Bill) public bills;
    IEntryPoint public entrypoint;
    USDC public token;
    address constant MailboxAddress = 0xCC737a94FecaeC165AbCf12dED095BB13F037685;
    address constant MailboxId = 11155111;
    address constant creditCardFactory = 0x0f239F07A19DbE69D41eF62eA0169E8AD6adAcfB;

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

    function bytes32ToAddress(bytes32 _buf) internal pure returns (address) {
        return address(uint160(uint256(_buf)));
    }

    function handle(
        uint32 _origin,
        bytes32 _sender,
        bytes calldata _body
    ) external override {
        require(msg.sender == MailboxAddress, "only mailbox can call");
        require(bytes32ToAddress(_sender) == address(creditCardFactory), "only credit card factory can call");
        (address user, uint256 tx_index) = decode(_body);
        body = abi.encode(user, bills[user].amount, tx_index);
        Mailbox(MailboxAddress).dispatch(MAILBOX_ID, bytes32(creditCardFactory), _body);
    }
}