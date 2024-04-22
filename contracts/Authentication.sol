// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Authentication {
    // Define a struct to represent user accounts
    struct User {
        string name;
        string email;
        string passwordHash; // For simplicity, we'll store hashed passwords
        bool registered;
    }

    // Mapping to store user accounts
    mapping(address => User) public users;

    // Event to emit when a new user is registered
    event UserRegistered(address indexed userAddress, string name, string email);

    // Event to emit when a user logs in
    event UserLoggedIn(address indexed userAddress, string name, string email);

    // Function to register a new user
    function registerUser(string memory _name, string memory _email, string memory _passwordHash) public {
        require(!users[msg.sender].registered, "User already registered");
        
        users[msg.sender] = User(_name, _email, _passwordHash, true);
        
        emit UserRegistered(msg.sender, _name, _email);
    }

    // Function to login an existing user
    function loginUser(string memory _email, string memory _passwordHash) public {
        require(users[msg.sender].registered, "User not registered");
        require(keccak256(bytes(users[msg.sender].email)) == keccak256(bytes(_email)), "Invalid email");
        require(keccak256(bytes(users[msg.sender].passwordHash)) == keccak256(bytes(_passwordHash)), "Invalid password");
        
        emit UserLoggedIn(msg.sender, users[msg.sender].name, _email);
    }
}
