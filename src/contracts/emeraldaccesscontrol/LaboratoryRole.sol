// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// Import the library 'AccessControl' from OpenZeppelin
import "@openzeppelin/contracts/access/AccessControl.sol";

// Define a contract 'LaboratoryRole' to manage this role - add, remove, check
contract LaboratoryRole is AccessControl {

  // Define a constant for the laboratory role
  bytes32 public constant LABORATORY_ROLE = keccak256("LABORATORY_ROLE");

  // In the constructor, make the address that deploys this contract the 1st laboratory
  constructor() {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _addLaboratory(msg.sender); 
  }

  // Define a modifier that checks if the caller has the laboratory role
  modifier onlyLaboratory() {
    require(isLaboratory(msg.sender), "Caller is not a laboratory.");    
    _;
  }

  // Define a function to check if an address has the laboratory role
  function isLaboratory(address account) public view returns (bool) {
    return hasRole(LABORATORY_ROLE, account);
  }

  // Define a function to add the laboratory role to an address
  function addLaboratory(address account) public onlyLaboratory {
    _addLaboratory(account);
  }

  // Define a function to renounce the laboratory role
  function renounceLaboratory() public {
    _removeLaboratory(msg.sender);
  }

  // Define an internal function to add the laboratory role
  function _addLaboratory(address account) internal {
    grantRole(LABORATORY_ROLE, account);
  }

  // Define an internal function to remove the laboratory role
  function _removeLaboratory(address account) internal {
    revokeRole(LABORATORY_ROLE, account);
  }
}
