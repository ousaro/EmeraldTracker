// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;


import "./EmeraldStates.sol";

contract Emerald {
    uint256 sku;
    uint256 upc;
    address payable ownerID;
    address payable originMinerID;
    string originMineName;
    string originMineInformation;
    string originMineLatitude;
    string originMineLongitude;
    uint256 productID;
    EmeraldStates.State emeraldState;
    string scaleInfo;
    string certifiedProperties;
    string manufactureInfo;
    uint256 marketPrice;
    address payable laboratoryID;
    address payable custodianID;
    address payable manufacturerID;
    address payable customerID;

    constructor() {}

    function setExtractionInfo(
        uint256 _sku,
        uint256 _upc,
        address payable _ownerID,
        address payable _originMinerID,
        string memory _originMineName,
        string memory _originMineInformation,
        string memory _originMineLatitude,
        string memory _originMineLongitude
    ) public {
        sku = _sku;
        upc = _upc;
        ownerID = _ownerID;
        originMinerID = _originMinerID;
        originMineName = _originMineName;
        originMineInformation = _originMineInformation;
        originMineLatitude = _originMineLatitude;
        originMineLongitude = _originMineLongitude;
        productID =_sku + _upc;
        emeraldState = EmeraldStates.State.Mined;
        marketPrice = 0;
        laboratoryID = payable(address(0));
        custodianID = payable(address(0));
        manufacturerID = payable(address(0));
        customerID = payable(address(0));
    }

    function setScaleInfo(string memory _scaleInfo) public {
        scaleInfo = _scaleInfo;
        
    }

    function setCertifiedInfo(string memory _certifiedProperties) public {
        certifiedProperties = _certifiedProperties;
    }

    function setManufactureInfo(string memory _manufactureInfo) public {
        manufactureInfo = _manufactureInfo;
    }

    function setEmeraldState(EmeraldStates.State _state) public {
        emeraldState = _state;
    }

    function setOwnerID(address payable _newOwnerID) public {
        ownerID = _newOwnerID;
    }

    function setMinerID(address payable _minerID) public {
        originMinerID = _minerID;
    }
    function authorizeLab(address payable _laboratoryID) public {
        laboratoryID = _laboratoryID;
    }

    function authorizeCustodian(address  payable _custodianID) public {
        custodianID = _custodianID;
    }

    function setManufacturerID(address payable _manufacturerID) public {
        manufacturerID = _manufacturerID;
    }

    function setCustomerID(address payable _customerID) public {
        customerID = _customerID;
    }

    function getSku() public view returns (uint256) {
        return sku;
    }

    function getUpc() public view returns (uint256) {
        return upc;
    }

    function getProductID() public view returns (uint256) {
        return productID;
    }

    function getOwnerID() public view returns (address payable) {
        return ownerID;
    }

    function getOriginMinerID() public view returns (address payable) {
        return originMinerID;
    }

    function getMarketPrice() public view returns (uint256) {
        return marketPrice;
    }

    function setMarketPrice(uint256 _marketPrice) public {
        marketPrice = _marketPrice;
    }

    function getCustomerID() public view returns (address payable) {
        return customerID;
    }

    function getCustodianID() public view returns (address payable) {
        return custodianID;
    }

    function getLaboratoryID() public view returns (address payable) {
        return laboratoryID;
    }

    function getManufacturerID() public view returns (address payable) {
        return manufacturerID;
    }

    function getEmeraldState() public view returns (EmeraldStates.State) {
        return emeraldState;
    }

    function getMineName() public view returns (string memory) {
        return originMineName;
    }

    function getMineInformation() public view returns (string memory) {
        return originMineInformation;
    }

    function getMineLatitude() public view returns (string memory) {
        return originMineLatitude;
    }

    function getMineLongitude() public view returns (string memory) {
        return originMineLongitude;
    }

    function getBasicInfo() public view returns (bytes memory) {
        return
            abi.encode(
                sku,
                upc,
                ownerID,
                originMinerID,
                originMineName,
                originMineInformation,
                originMineLatitude,
                originMineLongitude
            );
    }

    function getDetailedInfo() public view returns (bytes memory) {
        return
            abi.encode(
                sku,
                upc,
                productID,
                marketPrice,
                emeraldState,
                laboratoryID,
                custodianID,
                manufacturerID,
                customerID
            );
    }
}
