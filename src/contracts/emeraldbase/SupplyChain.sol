// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "../emeraldaccesscontrol/MinerRole.sol";
import "../emeraldaccesscontrol/LaboratoryRole.sol";
import "../emeraldaccesscontrol/CustodianRole.sol";
import "../emeraldaccesscontrol/ManufacturerRole.sol";
import "../emeraldaccesscontrol/CustomerRole.sol";
import "./EmeraldStates.sol";
import "./Emerald.sol";

// Define a contract 'Supplychain'
contract  SupplyChain is Ownable, AccessControl, MinerRole, LaboratoryRole, CustodianRole, ManufacturerRole, CustomerRole {

    // Define a variable called 'upc' for Universal Product Code (UPC)
    uint256 upc;

    // Define a variable called 'sku' for Stock Keeping Unit (SKU)
    uint256 sku;

    // Define a public mapping 'emeralds' that maps the UPC to an Emerald.
    mapping (uint256 => Emerald) emeralds;

    // Define a public mapping 'emeraldHistory' that maps the UPC to an array of TxHash, 
    // that track its journey through the supply chain -- to be sent from DApp.
    mapping (uint256 => string[]) emeraldsHistory;

    EmeraldStates.State constant defaultState = EmeraldStates.State.Mined;

    // Define 17 events with the same 17 state values and accept 'upc' as input argument
    event Mined(uint256 upc);
    event Scaled(uint256 upc);
    event PackedForLab(uint256 upc);
    event ShipedToLab(uint256 upc);
    event LabReceived(uint256 upc);
    event Certified(uint256 upc);
    event ShippedToStore(uint256 upc);
    event StorageReceived(uint256 upc);
    event Stored(uint256 upc);
    event ForSale(uint256 upc);
    event Sold(uint256 upc);
    event ShipToManufacture(uint256 upc);
    event ManufacturerReceived(uint256 upc);
    event Manufactured(uint256 upc);
    event PackedForSale(uint256 upc);
    event Published(uint256 upc);
    event Buyed(uint256 upc);
    event ShippedToCustomer(uint256 upc);
    event Delivered(uint256 upc);

    // Define a modifer that verifies the Caller
    modifier verifyCaller(address _address) {
        require(msg.sender == _address, "Caller is not authorized");
        _;
    }

    // Define a modifier that checks if the paid amount is sufficient to cover the price
    modifier paidEnough(uint256 _price) {
        require(msg.value >= _price, "Insufficient funds");
        _;
    }
  
    // Define a modifier that checks the price and refunds the remaining balance
    modifier checkValue(uint256 _upc) {
        _;
        uint256 _price = emeralds[_upc].getMarketPrice();
        uint256 amountToReturn = msg.value - _price;
        if (amountToReturn > 0) {
            payable(msg.sender).transfer(amountToReturn);
        }
    }

    // Checks if a emerald is Mined
    modifier mined(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.Mined, "Emerald is not in Mined state");
        _;
    }

    //Checks if an emerald was scaled
    modifier scaled(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.Scaled, "Emerald is not in Scaled state");
        _;
    }
  
    //Checks if an emerald is packed
    modifier packedForLab(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.PackedForLab, "Emerald is not in PackedForLab state");
        _;
    }

    // Checks if an emerald was shipped to the laboratory
    modifier shipedToLab(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.ShipedToLab, "Emerald is not in ShipedToLab state");
        _;
    }

    // Checks if an emerald was received by the Laboratory
    modifier labReceived(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.LabReceived, "Emerald is not in LabReceived state");
        _;
    }
  
    // Checks if an emerald was certified by the laboratory
    modifier certified(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.Certified, "Emerald is not in Certified state");
        _;
    }

    // Checks if an emerald was shipped to the storage by the laboratory
    modifier shippedToStore(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.ShippedToStore, "Emerald is not in ShippedToStore state");
        _;
    }

    // Checks if an emerald was received by the custodian service
    modifier storageReceived(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.StorageReceived, "Emerald is not in StorageReceived state");
        _;
    }  

    // Checks if an emerald was stored by the custodian
    modifier stored(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.Stored, "Emerald is not in Stored state");
        _;
    }

    // Checks if a raw emerald is available for sale
    modifier forSale(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.ForSale, "Emerald is not in ForSale state");
        _;
    }

    // Checks if a raw emerald was sold
    modifier sold(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.Sold, "Emerald is not in Sold state");
        _;
    }
  
    // Checks if a sold emerald was shipped to the buyer
    modifier shiptoManufacture(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.ShipToManufacture, "Emerald is not in ShipToManufacture state");
        _;
    }

    // Checks if an emerald was received by the manufacturer
    modifier manufacturerReceived(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.ManufacturerReceived, "Emerald is not in ManufacturerReceived state");
        _;
    }

    // Checks if an emerald was processed by the manufacturer
    modifier manufactured(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.Manufactured, "Emerald is not in Manufactured state");
        _;
    }

    // Checks if a cut emerald was packed
    modifier packedForSale(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.PackedForSale, "Emerald is not in PackedForSale state");
        _;
    }
  
    // Checks if a processed emerald is ready for sale
    modifier published(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.Published, "Emerald is not in Published state");
        _;
    }

    // Checks if a processed emerald was purchased
    modifier buyed(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.Buyed, "Emerald is not in Buyed state");
        _;
    }

    // Checks if a cut emerald was shipped to the buyer
    modifier shippedToCustomer(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.ShippedToCustomer, "Emerald is not in ShippedToCustomer state");
        _;
    }

    // Checks if a cut emerald was received by the customer
    modifier delivered(uint256 _upc) {
        require(emeralds[_upc].getEmeraldState() == EmeraldStates.State.Delivered, "Emerald is not in Delivered state");
        _;
    }

    // In the constructor set 'owner' to the address that instantiated the contract
    // and set 'sku' to 1
    // and set 'upc' to 1
    constructor() {
        //owner = msg.sender;
        sku = 1;
        upc = 1;
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    // Define a function 'kill' if required
    function kill() public onlyOwner {
        //selfdestruct(payable(msg.sender));
    }

    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }


    // Define a function 'extractEmerald' that allows a Miner to mark an emerald as 'Mined'
    function extractEmerald(
        uint256 _sku,
        uint256 _upc,
        address payable _originMinerID,
        string memory _originMineName,
        string memory _originMineInformation, 
        string memory _originMineLatitude, 
        string memory _originMineLongitude  
    )
        public
        onlyMiner
    {
        // Add emerald to emeralds list in the contract
        Emerald emerald = new Emerald();
        emerald.setExtractionInfo(
            _sku,
            _upc,
            _originMinerID,
            _originMineName,
            _originMineInformation, 
            _originMineLatitude, 
            _originMineLongitude      
        );

        emerald.setEmeraldState(EmeraldStates.State.Mined);

        emeralds[_upc] = emerald;

        // Increment sku
        sku += 1;

        // Emit the appropriate event
        emit Mined(_upc);
    }

    // Define a function 'scaleEmerald' that allows Miner to mark an item as 'Scaled'
    function scaleEmerald(uint256 _upc, string memory _scaleInfo) 
        public
        // Call modifier to check if upc has passed previous supply chain stage
        mined(_upc)
        // Call modifier to verify caller of this function
        verifyCaller(emeralds[_upc].getOriginMinerID())
        onlyMiner 
    {
        // Update the appropriate fields
        emeralds[_upc].setScaleInfo(_scaleInfo);
        emeralds[_upc].setEmeraldState(EmeraldStates.State.Scaled);

        // Emit the appropriate event
        emit Scaled(_upc);  
    }

    // Define a function 'packScaledEmerald' that allows a Miner to mark an item 'PackedForLab'
    function packScaledEmerald(uint256 _upc, address _laboratoryID, address _custodianID)
        public 
        // Call modifier to check if upc has passed previous supply chain stage
        scaled(_upc)
        // Call modifier to verify caller of this function
        verifyCaller(emeralds[_upc].getOriginMinerID())
        onlyMiner 
    {
        // Update the appropriate fields
        emeralds[_upc].authorizeLab(_laboratoryID);
        emeralds[_upc].authorizeCustodian(_custodianID);
        
        // Update Emerald state
        emeralds[_upc].setEmeraldState(EmeraldStates.State.PackedForLab);

        // Emit the appropriate event
        emit PackedForLab(_upc);
    }

    // Define a function 'shipToLaboratory' that allows a Miner to mark an item 'ShipedToLab'
    function shipToLaboratory(uint256 _upc)
        public 
        // Call modifier to check if upc has passed previous supply chain stage
        packedForLab(_upc)
        // Call modifier to verify caller of this function
        verifyCaller(emeralds[_upc].getOriginMinerID())
        onlyMiner 
    {
        // Update the appropriate fields
        emeralds[_upc].setEmeraldState(EmeraldStates.State.ShipedToLab);

        // Emit the appropriate event
        emit ShipedToLab(_upc);
    }

    // Define a function 'laboratoryReceived' that allows a Miner to mark an item 'LabReceived'
    function laboratoryReceived(uint256 _upc)
        public 
        // Call modifier to check if upc has passed previous supply chain stage
        shipedToLab(_upc)
        // Call modifier to verify caller of this function
        verifyCaller(emeralds[_upc].getLaboratoryID())
        onlyLaboratory
    {
        // Update the appropriate fields
        emeralds[_upc].setEmeraldState(EmeraldStates.State.LabReceived);

        // Emit the appropriate event
        emit LabReceived(_upc);
    }

    // Define a function 'certifyEmerald' that allows a Miner to mark an item 'Certified'
    function certifyEmerald(uint256 _upc, string memory _certifiedProperties) 
        public
        // Call modifier to check if upc has passed previous supply chain stage
        labReceived(_upc)
        // Call modifier to verify caller of this function
        verifyCaller(emeralds[_upc].getLaboratoryID())
        onlyLaboratory 
    {
        // Update the appropriate fields
        emeralds[_upc].setCertifiedInfo(_certifiedProperties);
        emeralds[_upc].setEmeraldState(EmeraldStates.State.Certified);

        // Emit the appropriate event
        emit Certified(_upc);  
    }

    // Define a function 'shipToSecureStore' that allows a Miner to mark an item 'ShippedToStore'
    function shipToSecureStore(uint256 _upc)
        public 
        // Call modifier to check if upc has passed previous supply chain stage
        certified(_upc)
        // Call modifier to verify caller of this function
        verifyCaller(emeralds[_upc].getLaboratoryID())
        onlyLaboratory
    {
        // Update the appropriate fields
        emeralds[_upc].setEmeraldState(EmeraldStates.State.ShippedToStore);

        // Emit the appropriate event
        emit ShippedToStore(_upc);
    }   

    // Define a function 'secureStorageReceived' that allows a Miner to mark an item 'StorageReceived'
    function secureStorageReceived(uint256 _upc)
        public 
        // Call modifier to check if upc has passed previous supply chain stage
        shippedToStore(_upc)
        // Call modifier to verify caller of this function
        verifyCaller(emeralds[_upc].getCustodianID())
        onlyCustodian
    {
        // Update the appropriate fields
        emeralds[_upc].setEmeraldState(EmeraldStates.State.StorageReceived);

        // Emit the appropriate event
        emit StorageReceived(_upc);
    }

    // Define a function 'storeEmerald' that allows a Miner to mark an item 'Stored'
    function storeEmerald(uint256 _upc)
        public 
        // Call modifier to check if upc has passed previous supply chain stage
        storageReceived(_upc)
        // Call modifier to verify caller of this function
        verifyCaller(emeralds[_upc].getCustodianID())
        onlyCustodian
    {
        // Update the appropriate fields
        emeralds[_upc].setEmeraldState(EmeraldStates.State.Stored);

        // Emit the appropriate event
        emit Stored(_upc);
    }

    // Define a function 'registerForSale' that allows a Miner to mark an item 'ForSale'
    function registerForSale(uint256 _upc, uint256 _marketPrice)
        public
        // Call modifier to check if upc has passed previous supply chain stage
        stored(_upc)
        // Call modifier to verify caller of this function
        verifyCaller(emeralds[_upc].getOriginMinerID())
        onlyMiner
    {
        // Setup market price  
        emeralds[_upc].setMarketPrice(_marketPrice);
        // Update the appropriate fields
        emeralds[_upc].setEmeraldState(EmeraldStates.State.ForSale);

        // Emit the appropriate event
        emit ForSale(_upc); 
    }

    // Define a function 'buyFromMiner' that allows the Manufacturer to mark an item 'Sold'
    function buyFromMiner(uint256 _upc) 
        public 
        payable 
        // Call modifier to check if upc has passed previous supply chain stage
        forSale(_upc)
        // Call modifer to check if buyer has paid enough
        paidEnough(emeralds[_upc].getMarketPrice())
        // Call modifer to send any excess ether back to buyer
        checkValue(_upc)
        onlyManufacturer
    {
        // Transfer money to Miner
        (bool success, ) = emeralds[_upc].getOriginMinerID().call{value: emeralds[_upc].getMarketPrice()}("");
        require(success, "Transfer failed");

        // Tranfer emerald ownership
        //emeralds[_upc].setOwnerID(msg.sender);
        emeralds[_upc].setManufacturerID(msg.sender);

        // Update emerald state
        emeralds[_upc].setEmeraldState(EmeraldStates.State.Sold);

        // Emit the appropriate event
        emit Sold(_upc);
    }

    // Define a function 'shipToManufacturer' that allows a Miner to mark an item 'ShipToManufacture'
    function shipToManufacturer(uint256 _upc) 
        public 
        // Call modifier to check if upc has passed previous supply chain stage
        sold(_upc)
        // Call modifier to verify caller of this function
        onlyCustodian
    {
        // Update the appropriate fields
        emeralds[_upc].setEmeraldState(EmeraldStates.State.ShipToManufacture);

        // Emit the appropriate event
        emit ShipToManufacture(_upc);    
    }

    // Define a function 'receiveFromStorage' that allows the manufacturer mark an item 'ManufacturerReceived'
    function receiveFromStorage(uint256 _upc) 
        public 
        // Call modifier to check if upc has passed previous supply chain stage
        shiptoManufacture(_upc)
        // Access Control
        onlyManufacturer
    {
        // Update the appropriate fields
        emeralds[_upc].setEmeraldState(EmeraldStates.State.ManufacturerReceived);

        // Emit the appropriate event
        emit ManufacturerReceived(_upc);
    }

    // Define a function 'manufactureEmerald' that allows the manufacturer mark an item 'Manufactured'
    function manufactureEmerald(uint256 _upc, string memory _manofactureInfo, uint _price)
        public 
        // Call modifier to check if upc has passed previous supply chain stage
        manufacturerReceived(_upc)
        // Access Control
        onlyManufacturer
    {
        // Update the appropriate fields
        emeralds[_upc].setManufactureInfo(_manofactureInfo);
        emeralds[_upc].setMarketPrice(_price);
        emeralds[_upc].setEmeraldState(EmeraldStates.State.Manufactured);

        // Emit the appropriate event
        emit Manufactured(_upc);
    }

    // Define a function 'packForSale' that allows the manufacturer to mark an item 'PackedForSale'
    function packForSale(uint256 _upc)
        public 
        // Call modifier to check if upc has passed previous supply chain stage
        manufactured(_upc)
        // Access Control
        onlyManufacturer
    {
        // Update the appropriate fields
        emeralds[_upc].setEmeraldState(EmeraldStates.State.PackedForSale);

        // Emit the appropriate event
        emit PackedForSale(_upc);
    }

    // Define a function 'publish' that allows the manufacturer to mark an item 'Published'
    function publish(uint _upc)
        public 
        // Call modifier to check if upc has passed previous supply chain stage
        packedForSale(_upc)
        // Access Control
        onlyManufacturer
    {
        // Update the appropriate fields
        emeralds[_upc].setEmeraldState(EmeraldStates.State.Published);

        // Emit the appropriate event
        emit Published(_upc);
    }

    // Define a function 'buyFromManufacturer' that allows the customer to mark an item 'Buyed'
    function buyFromManufacturer(uint256 _upc) 
        public 
        payable 
        // Call modifier to check if upc has passed previous supply chain stage
        published(_upc)
        // Call modifer to check if buyer has paid enough
        paidEnough(emeralds[_upc].getMarketPrice())
        // Call modifer to send any excess ether back to buyer
        checkValue(_upc)
        onlyCustomer
    {
        // Transfer money to Manufacturer
        (bool success, ) = emeralds[_upc].getManufacturerID().call{value: emeralds[_upc].getMarketPrice()}("");
        require(success, "Transfer failed");

        // Tranfer emerald ownership
        //emeralds[_upc].setOwnerID(msg.sender);
        emeralds[_upc].setCustomerID(msg.sender);

        // Update emerald state
        emeralds[_upc].setEmeraldState(EmeraldStates.State.Buyed);

        // Emit the appropriate event
        emit Buyed(_upc);
    }

    // Define a function 'shipToCustomer' that allows a Manufacturer to mark an item 'ShippedToCustomer'
    function shipToCustomer(uint256 _upc) 
        public 
        // Call modifier to check if upc has passed previous supply chain stage
        buyed(_upc)
        // Access Control
        onlyManufacturer
    {
        // Update the appropriate fields
        emeralds[_upc].setEmeraldState(EmeraldStates.State.ShippedToCustomer);

        // Emit the appropriate event
        emit ShippedToCustomer(_upc);
    }

    // Define a function 'customerReceived' that allows a Manufacturer to mark an item 'Delivered'
    function customerReceived(uint256 _upc) 
        public 
        // Call modifier to check if upc has passed previous supply chain stage
        shippedToCustomer(_upc)
        // Access Control
        onlyCustomer
    {
        // Update the appropriate fields
        emeralds[_upc].setEmeraldState(EmeraldStates.State.Delivered);

        // Emit the appropriate event
        emit Delivered(_upc);
    }

    // Define a function 'fetchItemBufferOne' that fetches the data
  function fetchItemBufferOne(uint256 _upc) public view returns (bytes memory) 
  {
    return (emeralds[_upc].getBasicInfo());
  }

  // Define a function 'fetchItemBufferTwo' that fetches the data
  function fetchItemBufferTwo(uint256 _upc) public view returns (bytes memory) 
  {
    return (emeralds[_upc].getDetailedInfo());
  } 
}
