// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "./MultiSigWallet.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./USDC.sol";
import "./interfaces/IMessageRecipient.sol";
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



contract CreditCardFactory is Ownable, IMessageRecipient {
    event CreditCardCreated(address indexed creditCard, address indexed owner);
    mapping(address => address) public creditCards;
    mapping(address => bool) public isCreditCard;
    address public token;
    mapping(address => Bill) public bills;
    uint32 constant MAILBOX_ID = 5;
    address constant MailboxAddress = 0xCC737a94FecaeC165AbCf12dED095BB13F037685;
    address constant EscrowAddress = 0xF3210ad9777F109268243E4306ba43F22116Ce8f; // deploying using create2

    
    uint public epoch;

    struct TransferParam {
        bytes4 buySigHash;
        bytes32 to;
        uint256 amount;
    }

    struct Bill {
        uint epoch;
        uint amount;
        uint paidamount;
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
        bills[_card_owner].amount += _amount;
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
        require(_amount == bill.amount - bill.paidamount, "Invalid amount");
        require(_selector == bytes4(keccak256("transfer(address,uint256)")), "Invalid selector");
        creditCard.confirmTransaction(_tx_index);
        require(creditCard.getTransactionStatus(_tx_index), "Transaction failed");
        bill.amount = 0;
    }

    function addressToBytes32(address _addr) internal pure returns (bytes32) {
        return bytes32(uint256(uint160(_addr)));
    }

    function trustLessWithdraw(uint _tx_index) public onlyOwner {
        bytes memory data = abi.encode(msg.sender, _tx_index);
        Mailbox(MailboxAddress).dispatch(MAILBOX_ID, addressToBytes32(), data);
    }

    modifier onlyMailbox() {
    require(msg.sender == mailbox);
        _;    
    }

    function bytes32ToAddress(bytes32 _buf) internal pure returns (address) {
        return address(uint160(uint256(_buf)));
    }

    function handle(
        uint32 _origin,
        bytes32 _sender,
        bytes calldata _body
    ) external override onlyMailbox {
        require(bytes32ToAddress(_sender) == EscrowAddress, "Invalid sender");
        (address owner,uint value, uint tx_index) = abi.decode(_body, (address,uint));
        // if value is 0 then return the amount to the sender
        Bill storage bill = bills[owner];
        // if value is equal to paid amount then confirm the transaction
        if (value == bill.paidamount) {
            MultiSigWallet creditCard = MultiSigWallet(payable(creditCards[owner]));
            creditCard.confirmTransaction(tx_index);
            require(creditCard.getTransactionStatus(tx_index), "Transaction failed");
            bill.paidamount = value;
        }
        require(success, "tx failed");
    }
}