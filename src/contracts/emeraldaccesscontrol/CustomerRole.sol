// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// Import the library 'AccessControl' from OpenZeppelin
import "@openzeppelin/contracts/access/AccessControl.sol";

// Define a contract 'CustomerRole' to manage this role - add, remove, check
contract CustomerRole is AccessControl {
  
  // Define a constant for the customer role
  bytes32 public constant CUSTOMER_ROLE = keccak256("CUSTOMER_ROLE");

  // In the constructor, make the address that deploys this contract the 1st customer
  constructor() {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _addCustomer(msg.sender);
  }

  // Define a modifier that checks if the caller has the customer role
  modifier onlyCustomer() {
    require(isCustomer(msg.sender), "Caller is not a customer.");
    _;
  }

  // Define a function to check if an address has the customer role
  function isCustomer(address account) public view returns (bool) {
    return hasRole(CUSTOMER_ROLE, account);
  }

  // Define a function to add the customer role to an address
  function addCustomer(address account) public onlyCustomer {
    _addCustomer(account);
  }

  // Define a function to renounce the customer role
  function renounceCustomer() public {
    _removeCustomer(msg.sender);
  }

  // Define an internal function to add the customer role
  function _addCustomer(address account) internal {
    grantRole(CUSTOMER_ROLE, account);
  }

  // Define an internal function to remove the customer role
  function _removeCustomer(address account) internal {
    revokeRole(CUSTOMER_ROLE, account);
  }
}
