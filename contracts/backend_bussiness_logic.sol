// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PaymentApp {
    // Structure to store user information
    struct User {
        string name;
        string id;
        string dob;
        uint256 balance;
        address ethAddress;
        bool exists;
    }

    // Structure to store outsider information
    struct Outsider {
        string name;
        string dob;
        string upiId;
        uint256 balance;
        bool exists;
    }

    // Structure to store payment history to outsiders
    struct OutsiderPayment {
        address sender;
        string receiverName;
        string receiverUpiId;
        uint256 amount;
        string date;
    }

    // Mapping to store internal users
    mapping(address => User) private users;

    // Mapping to store outsiders using UPI ID as key
    mapping(string => Outsider) private outsiders;

    // Array to store history of payments to outsiders
    OutsiderPayment[] public outsiderPaymentsHistory;

    // Modifier to check if a user exists in the blockchain
    modifier userExists(address _address) {
        require(users[_address].exists, "User does not exist in the blockchain");
        _;
    }

    // Function to add a new internal user to the blockchain
    function addUser(
        address _ethAddress,
        string memory _name,
        string memory _id,
        string memory _dob,
        uint256 _balance
    ) public {
        require(!users[_ethAddress].exists, "User already exists");
        users[_ethAddress] = User(_name, _id, _dob, _balance, _ethAddress, true);
    }

    // Function to make a payment between internal users
    function makePayment(address _sender, address _receiver, uint256 _amount)
        public
        userExists(_sender)
        userExists(_receiver)
    {
        require(_amount <= users[_sender].balance, "Insufficient balance");

        // Proceed with payment
        users[_sender].balance -= _amount;
        users[_receiver].balance += _amount;
    }

    // Function to make a payment to an outsider
    function makePaymentToOutsider(
        address _sender,
        string memory _name,
        string memory _dob,
        string memory _upiId,
        uint256 _amount,
        string memory _date
    ) public userExists(_sender) {
        require(_amount <= users[_sender].balance, "Insufficient balance");

        // Check if the outsider already exists, if not, add them
        if (!outsiders[_upiId].exists) {
            outsiders[_upiId] = Outsider(_name, _dob, _upiId, 0, true);
        }

        // Proceed with payment
        users[_sender].balance -= _amount;
        outsiders[_upiId].balance += _amount;

        // Add to payment history
        outsiderPaymentsHistory.push(OutsiderPayment(_sender, _name, _upiId, _amount, _date));
    }

    // Function to get details of an internal user by Ethereum address
    function getUserDetails(address _ethAddress)
        public
        view
        userExists(_ethAddress)
        returns (
            string memory,
            string memory,
            string memory,
            uint256
        )
    {
        User memory user = users[_ethAddress];
        return (user.name, user.id, user.dob, user.balance);
    }

    // Function to get details of an outsider by UPI ID
    function getOutsiderDetails(string memory _upiId)
        public
        view
        returns (string memory, string memory, uint256)
    {
        require(outsiders[_upiId].exists, "Outsider does not exist");
        Outsider memory outsider = outsiders[_upiId];
        return (outsider.name, outsider.dob, outsider.balance);
    }

    // Function to get payment history to outsiders
    function getOutsiderPaymentsHistory() public view returns (OutsiderPayment[] memory) {
        return outsiderPaymentsHistory;
    }
}

