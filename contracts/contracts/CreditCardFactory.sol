// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "./MultiSigWallet.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./USDC.sol";
import "./interfaces/IMessageRecipient.sol";
import "hardhat/console.sol";

contract CreditCardFactory is Ownable, IMessageRecipient {
    event CreditCardCreated(address indexed creditCard, address indexed owner);
    mapping(address => address) public creditCards;
    mapping(address => bool) public isCreditCard;
    address public token;
    mapping(address => Bill) public bills;
    
    uint public epoch;

    struct TransferParam {
        bytes4 buySigHash;
        bytes32 to;
        uint256 amount;
    }

    struct Bill {
        uint epoch;
        uint amount;
    }

    constructor(address _token) {
        token = _token;
    }

    function increaseEpoch() public {
        epoch++;
    }

    function createCreditCard(
        address _card_owner
    ) public onlyOwner returns(address) {
        require(address(creditCards[_card_owner]) == address(0), "Credit card already exists");
        address[] memory owners = new address[](2);
        owners[0] = _card_owner;
        owners[1] = address(this);
        MultiSigWallet creditCard = new MultiSigWallet(owners, 2);
        creditCards[_card_owner]=address(creditCard);
        isCreditCard[address(creditCard)] = true;
        emit CreditCardCreated(address(creditCard), msg.sender);
        return address(creditCard);
    }

    function getCreditCard() public view returns (address) {
        return creditCards[msg.sender];
    }

    function withdraw(uint _tx_index) onlyOwner() public {
        MultiSigWallet creditCard = MultiSigWallet(payable(creditCards[msg.sender]));
        creditCard.confirmTransaction(_tx_index);
    }

    function postBill(address _card_owner, uint _amount) public onlyOwner {
        bills[_card_owner] = Bill(epoch, _amount);
    }

    function decodeTransfer(bytes memory data) private pure returns(bytes4 selector, address to, uint256 amount) {
        assembly {
            // load 32 bytes into `selector` from `data` skipping the first 32 bytes
            selector := mload(add(data, 32))
            to := mload(add(data, 36))
            amount := mload(add(data, 68))
        }
    }

    function payBill(uint _tx_index) public {
        Bill storage bill = bills[msg.sender];
        // fetch transaction data from multisig wallet
        MultiSigWallet creditCard = MultiSigWallet(payable(creditCards[msg.sender]));
        (, , bytes memory data, ,) = creditCard.transactions(_tx_index);
        (bytes4 _selector ,address _to,uint256 _amount) = decodeTransfer(data);
        require(_to == address(this), "Invalid transfer");
        require(_amount == bill.amount, "Invalid amount");
        require(_selector == bytes4(keccak256("transfer(address,uint256)")), "Invalid selector");
        creditCard.confirmTransaction(_tx_index);
        require(creditCard.getTransactionStatus(_tx_index), "Transaction failed");
        bill.amount = 0;
    }

    function handle(uint32 _origin,bytes32 _sender,bytes calldata _body) external override {
        require(msg.sender == token, "Only token contract can call this function");
        require(_origin == 1, "Only handle messages from chain 1");
        require(_body.length == 64, "Invalid message body");
    }

}