Project Overview

The ETH Proof Project involves creating an Ethereum smart contract to manage tokens. This contract allows you to create (mint) tokens, destroy (burn) tokens, and check the balance and total supply of tokens.


DESCRIPTION:

The project is about making a contract to create tokens and managing their values. The contract includes logic to create tokens, check the account's balance, and the total supply of tokens.

The code builds a contract with the following functionalities:

Public State Variables:

tokenName: The name of the token.
tokenAbbrv: The abbreviation or symbol of the token.
totalSupply: The total supply of tokens.
These variables are initialized with default values.

Mapping:

balances: A mapping from address to uint, which represents the token balance of each address.
Mint Function:

mint(address _address, uint _value): This function takes an address and a value as parameters. It increments the balance of the specified address and updates the total supply with the given value. This function allows you to create new tokens and assign them to an account.
Burn Function:

burn(address _address, uint _value): This function also takes an address and a value as parameters. It decreases the balance of the specified address and updates the total supply by removing the given value. This function allows you to destroy tokens from an account.
After compiling and deploying the contract, you can use these functions to manage tokens. The mint and burn functions will return the updated total supply and account balance after each transaction.


EXECUTING PROGRAM:

To run this program, I've used Remix, an online Solidity IDE.

Add License and Solidity Version:

Ensure that the contract includes the appropriate license and specifies the Solidity version used (e.g., pragma solidity >=0.6.12 <0.9.0;).
Compile the Code:

Click on the Solidity compiler in Remix.
Click on "Compile FinalETHProject.sol" to compile the contract.
Deploy the Contract:

Go to the "Deploy and Run Transactions" section in Remix.
Deploy the contract by selecting it from the list and clicking "Deploy."
Interact with the Contract:

After deployment, you can interact with the contract by inputting values into the mint and burn functions and using the balances mapping to check token balances and the totalSupply variable for the total supply.

AUTHOR:
Anmol patwal

LICENSE:
This project is licensed under the MIT License as mentioned in the code.
