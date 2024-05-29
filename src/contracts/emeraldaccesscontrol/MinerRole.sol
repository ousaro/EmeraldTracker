// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// Import the library 'AccessControl' from OpenZeppelin
import "@openzeppelin/contracts/access/AccessControl.sol";

// Define a contract 'MinerRole' to manage this role - add, remove, check
contract MinerRole is AccessControl {

  // Define a constant for the miner role
  bytes32 public constant MINER_ROLE = keccak256("MINER_ROLE");

  // In the constructor, make the address that deploys this contract the 1st miner
  constructor() {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _addMiner(msg.sender);
  }

  // Define a modifier that checks if the caller has the miner role
  modifier onlyMiner() {
    require(isMiner(payable(msg.sender)), "Caller is not a miner.");
    _;
  }

  // Define a function to check if an address has the miner role
  function isMiner(address payable account) public view returns (bool) {
    return hasRole(MINER_ROLE, account);
  }

  // Define a function to add the miner role to an address
  function addMiner(address account) public onlyMiner {
    _addMiner(account);
  }

  // Define a function to renounce the miner role
  function renounceMiner() public {
    _removeMiner(msg.sender);
  }

  // Define an internal function to add the miner role
  function _addMiner(address account) internal {
    grantRole(MINER_ROLE, account);
  }

  // Define an internal function to remove the miner role
  function _removeMiner(address account) internal {
    revokeRole(MINER_ROLE, account);
  }
}
