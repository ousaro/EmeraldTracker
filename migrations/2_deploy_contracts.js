// migrating the appropriate contracts
const CustodianRole = artifacts.require("CustodianRole");
const CustomerRole = artifacts.require("CustomerRole");
const LaboratoryRole = artifacts.require("LaboratoryRole");
const ManufacturerRole = artifacts.require("ManufacturerRole");
const MinerRole = artifacts.require("MinerRole");
const Emerald = artifacts.require("Emerald");
const EmeraldProperties = artifacts.require("EmeraldProperties");
const EmeraldStates = artifacts.require("EmeraldStates");
const SupplyChain = artifacts.require("SupplyChain");

module.exports = function (deployer) {
  deployer.deploy(CustomerRole);
  deployer.deploy(CustodianRole);
  deployer.deploy(LaboratoryRole);
  deployer.deploy(ManufacturerRole);
  deployer.deploy(MinerRole);
  deployer.deploy(Emerald);
  deployer.deploy(EmeraldProperties);
  deployer.deploy(EmeraldStates);
  deployer.deploy(SupplyChain);
};
