// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// Import the library 'AccessControl' from OpenZeppelin
import "@openzeppelin/contracts/access/AccessControl.sol";

// Define a contract 'ManufacturerRole' to manage this role - add, remove, check
contract ManufacturerRole is AccessControl {

  // Define a constant for the manufacturer role
  bytes32 public constant MANUFACTURER_ROLE = keccak256("MANUFACTURER_ROLE");

  // In the constructor, make the address that deploys this contract the 1st manufacturer
  constructor() {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _addManufacturer(msg.sender);
  }

  // Define a modifier that checks if the caller has the manufacturer role
  modifier onlyManufacturer() {
    require(isManufacturer(msg.sender), "Caller is not a manufacturer.");
    _;
  }

  // Define a function to check if an address has the manufacturer role
  function isManufacturer(address account) public view returns (bool) {
    return hasRole(MANUFACTURER_ROLE, account);
  }

  // Define a function to add the manufacturer role to an address
  function addManufacturer(address account) public onlyManufacturer {
    _addManufacturer(account);
  }

  // Define a function to renounce the manufacturer role
  function renounceManufacturer() public {
    _removeManufacturer(msg.sender);
  }

  // Define an internal function to add the manufacturer role
  function _addManufacturer(address account) internal {
    grantRole(MANUFACTURER_ROLE, account);
  }

  // Define an internal function to remove the manufacturer role
  function _removeManufacturer(address account) internal {
    revokeRole(MANUFACTURER_ROLE, account);
  }
}
