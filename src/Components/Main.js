import React, { Component } from 'react';


class Main extends Component {

  render() {
    const stateEnum = {
      0: 'Mined',
      1: 'Scaled',
      2: 'PackedForLab',
      3: 'ShipedToLab',
      4: 'LabReceived',
      5: 'Certified',
      6: 'ShippedToStore',
      7: 'StorageReceived',
      8: 'Stored',
      9: 'ForSale',
      10: 'Sold',
      11: 'ShipToManufacture',
      12: 'ManufacturerReceived',
      13: 'Manufactured',
      14: 'PackedForSale',
      15: 'Published',
      16: 'Buyed',
      17: 'ShippedToCustomer',
      18: 'Delivered'
    };

    // for the fetch data 2
    const stateValue = this.props.contractData2[4];

    const skuValue2 = this.props.contractData2[0] || 0
    const skuInt2 = Number(skuValue2);

    const upcValue2 = this.props.contractData2[1] || 0
    const upcInt2 = Number(upcValue2);

    const price = this.props.contractData2[3] || 0
    const priceInt = Number(price);

    const productID = this.props.contractData2[2] || 0
    const productIDInt = Number(productID);

    // for the fetch data 1
    const skuValue1 = this.props.contractData1[0] || 0
    const skuInt1 = Number(skuValue1);

    const upcValue1 = this.props.contractData1[1] || 0
    const upcInt1 = Number(upcValue1);


    return (

      <div id="content">
        <div class="dashboard-container">
                {/* Fetch data */}
                <div class="dashboard-section">
                    <h2 class="dashboard-heading">Emerald Overview</h2>
                    <div class="row">
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.fetchItemBufferOne(this.upc);
                            }}>
                                <div class="form-group">
                                    <label for="upc1">Emerald UPC</label>
                                    <input
                                        id="upc1"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Enter Emerald UPC"
                                        required />
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Fetch Data1</button>
                                </div>
                                <div className="info">
                                      <h5 className="table-title">BufferOne Data</h5>
                                      <table className="data-table">
                                          <thead>
                                              <tr>
                                                  <th>Field</th>
                                                  <th>Value</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td><b>SKU:</b></td>
                                                  <td>{skuInt1}</td>
                                              </tr>
                                              <tr>
                                                  <td><b>UPC:</b></td>
                                                  <td>{upcInt1}</td>
                                              </tr>
                                              <tr>
                                                  <td><b>Owner ID:</b></td>
                                                  <td>{this.props.contractData1[2]}</td>
                                              </tr>
                                              <tr>
                                                  <td><b>Origin Miner ID:</b></td>
                                                  <td>{this.props.contractData1[3]}</td>
                                              </tr>
                                              <tr>
                                                  <td><b>Origin Mine Name:</b></td>
                                                  <td>{this.props.contractData1[4]}</td>
                                              </tr>
                                              <tr>
                                                  <td><b>Origin Mine Information:</b></td>
                                                  <td>{this.props.contractData1[5]}</td>
                                              </tr>
                                              <tr>
                                                  <td><b>Origin Mine Latitude:</b></td>
                                                  <td>{this.props.contractData1[6]}</td>
                                              </tr>
                                              <tr>
                                                  <td><b>Origin Mine Longitude:</b></td>
                                                  <td>{this.props.contractData1[7]}</td>
                                              </tr>
                                              
                                          </tbody>
                                      </table>
                                  </div>      
                            </form>

                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.fetchItemBufferTwo(this.upc);
                            }}>
                                <div class="form-group">
                                    <label for="upc2">Emerald UPC</label>
                                    <input
                                        id="upc2"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Enter Emerald UPC"
                                        required />
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Fetch Data2</button>
                                </div>
                                <div className="info">
                                    <h5 class="table-title">BufferTwo Data</h5>
                                    <table className="data-table">
                                        <tr>
                                            <th>Field</th>
                                            <th>Value</th>
                                        </tr>
                                        <tr>
                                            <td><b>SKU:</b></td>
                                            <td>{skuInt2}</td>
                                        </tr>
                                        <tr>
                                            <td><b>UPC:</b></td>
                                            <td>{upcInt2}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Product ID:</b></td>
                                            <td>{productIDInt}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Price:</b></td>
                                            <td>{priceInt}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Emerald State:</b></td>
                                            <td>{stateEnum[stateValue]}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Laboratory ID:</b></td>
                                            <td>{this.props.contractData2[5]}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Custodian ID:</b></td>
                                            <td>{this.props.contractData2[6]}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Manufacturer ID:</b></td>
                                            <td>{this.props.contractData2[7]}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Customer ID:</b></td>
                                            <td>{this.props.contractData2[8]}</td>
                                        </tr>
                                    </table>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                
                {/* States map */}
                <div class="dashboard-section">
                    <h2 class="dashboard-heading">States Map:</h2>
                    <div class="info"> 
                        <div class="info">
                            <div class="state-map">
                                <div class="state-column">
                                    <div class="state-item">0 - Mined</div>
                                    <div class="state-item">1 - Scaled</div>
                                    <div class="state-item">2 - PackedForLab</div>
                                    <div class="state-item">3 - ShipedToLab</div>
                                    <div class="state-item">4 - LabReceived</div>
                                </div>
                                <div class="state-column">
                                    <div class="state-item">5 - Certified</div>
                                    <div class="state-item">6 - ShippedToStore</div>
                                    <div class="state-item">7 - StorageReceived</div>
                                    <div class="state-item">8 - Stored</div>
                                    <div class="state-item">9 - ForSale</div>
                                </div>
                                <div class="state-column">
                                    <div class="state-item">10 - Sold</div>
                                    <div class="state-item">11 - ShipToManufacture</div>
                                    <div class="state-item">12 - ManufacturerReceived</div>
                                    <div class="state-item">13 - Manufactured</div>
                                    <div class="state-item">14 - PackedForSale</div>
                                </div>
                                <div class="state-column">
                                    <div class="state-item">15 - Published</div>
                                    <div class="state-item">16 - Buyed</div>
                                    <div class="state-item">17 - ShippedToCustomer</div>
                                    <div class="state-item">18 - Delivered</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Register actors */}
                <div className="dashboard-section">
                    <h2 class="dashboard-heading">Register Actor (Authorization)</h2>        
                    <div class="row">

                        {/* Miner actor */}
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.addMiner(this.address);
                            }}>
                                <div class="form-group">
                                    <label for="miner-address">Register Miner</label>
                                    <br />
                                    <input
                                        id="miner-address"
                                        type="text"
                                        onChange={(e) => { this.address = e.target.value }}
                                        class="form-control"
                                        placeholder="Miner Address"
                                        required
                                    />           
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Register Miner</button>
                                </div>
                            </form>
                        </div>

                        {/* Laboratory actor */}
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.addLaboratory(this.address);
                            }}>
                                <div class="form-group">
                                    <label for="laboratory-address">Register Laboratory</label>
                                    <input
                                        id="laboratory-address"
                                        type="text"
                                        onChange={(e) => { this.address = e.target.value }}
                                        class="form-control"
                                        placeholder="Laboratory Address"
                                        required
                                    />           
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Register Laboratory</button>
                                </div>
                            </form>
                        </div>

                        {/* Custodian actor */}
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.addCustodian(this.address);
                            }}>
                                <div class="form-group">
                                    <label for="custodian-address">Register Custodian</label>
                                    <input
                                        id="custodian-address"
                                        type="text"
                                        onChange={(e) => { this.address = e.target.value }}
                                        class="form-control"
                                        placeholder="Custodian Address"
                                        required
                                    />           
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Register Custodian</button>
                                </div>
                            </form>
                        </div>

                        {/* Manufacturer actor */}
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.addManufacturer(this.address);
                            }}>
                                <div class="form-group">
                                    <label for="manufacturer-address">Register Manufacturer</label>
                                    <input
                                        id="manufacturer-address"
                                        type="text"
                                        onChange={(e) => { this.address = e.target.value }}
                                        class="form-control"
                                        placeholder="Manufacturer Address"
                                        required
                                    />           
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Register Manufacturer</button>
                                </div>
                            </form>
                        </div>

                        {/* Customer actor */}
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.addCustomer(this.address);
                            }}>
                                <div class="form-group">
                                    <label for="customer-address">Register Customer</label>
                                    <input
                                        id="customer-address"
                                        type="text"
                                        onChange={(e) => { this.address = e.target.value }}
                                        class="form-control"
                                        placeholder="Customer Address"
                                        required
                                    />           
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Register Customer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>      

                {/* Miner operations */}
                <div class="dashboard-section">
                    <h2 class="dashboard-heading">Miner Operations</h2>        
                    <div class="row">
                        <div class="column">
                            {/* Extract Emerald Form */}            
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                const sku = this.sku;
                                const upc = this.upc;
                                const originMinerID = this.originMinerID;
                                const originMineName = this.originMineName;
                                const originMineInformation = this.originMineInformation;
                                const originMineLatitude = this.originMineLatitude;
                                const originMineLongitude = this.originMineLongitude;
                                this.props.extractEmerald(sku, upc, originMinerID, originMineName, originMineInformation, originMineLatitude, originMineLongitude);
                            }}>
                                <div class="form-group">
                                    <label for="originMinerID">Miner ID</label>
                                    <br />
                                    <input
                                        id="originMinerID"
                                        type="text"
                                        onChange={(e) => { this.originMinerID = e.target.value }}
                                        class="form-control"
                                        placeholder="Miner ID"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="sku">SKU</label>
                                    <br />
                                    <input
                                        id="sku"
                                        type="number"
                                        onChange={(e) => { this.sku = e.target.value }}
                                        class="form-control"
                                        placeholder="SKU"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="upc">UPC</label>
                                    <br />
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="UPC"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="originMineName">Mine Name</label>
                                    <br />
                                    <input
                                        id="originMineName"
                                        type="text"
                                        onChange={(e) => { this.originMineName = e.target.value }}
                                        class="form-control"
                                        placeholder="Mine Name"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="originMineInformation">Mine Information</label>
                                    <br />
                                    <input
                                        id="originMineInformation"
                                        type="text"
                                        onChange={(e) => { this.originMineInformation = e.target.value }}
                                        class="form-control"
                                        placeholder="Mine Information"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="originMineLatitude">Mine Latitude</label>
                                    <br />
                                    <input
                                        id="originMineLatitude"
                                        type="text"
                                        onChange={(e) => { this.originMineLatitude = e.target.value }}
                                        class="form-control"
                                        placeholder="Mine Latitude"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="originMineLongitude">Mine Longitude</label>
                                    <br />
                                    <input
                                        id="originMineLongitude"
                                        type="text"
                                        onChange={(e) => { this.originMineLongitude = e.target.value }}
                                        class="form-control"
                                        placeholder="Mine Longitude"
                                        required
                                    />
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Extract Emerald</button>
                                </div>
                            </form>
                        </div>

                        <div class="column">

                             {/* Scale Emerald Form */}
                             <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.scaleEmerald(this.upc, this.scaleInfo);
                            }}>
                                <div class="form-group">
                                    <label for="scaleInfo">Scale Info</label>
                                    <input
                                        id="scaleInfo"
                                        type="text"
                                        onChange={(e) => { this.scaleInfo = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald Scale Information"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="upc">Emerald UPC</label>
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald UPC"
                                        required
                                    />
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Scale Emerald</button>
                                </div>
                            </form>
                        </div>

                        <div class="column">
                            {/* Pack Emerald */}
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.packScaledEmerald(this.upc, this.laboratoryID, this.custodianID);
                            }}>
                                <div class="form-group">
                                    <label for="upc">Emerald UPC</label>
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald UPC"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="laboratoryID">Laboratory Authorized ID</label>
                                    <input
                                        id="laboratoryID"
                                        type="text"
                                        onChange={(e) => { this.laboratoryID = e.target.value }}
                                        class="form-control"
                                        placeholder="Authorized Laboratory ID"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="custodianID">Custodian Authorized ID</label>
                                    <input
                                        id="custodianID"
                                        type="text"
                                        onChange={(e) => { this.custodianID = e.target.value }}
                                        class="form-control"
                                        placeholder="Authorized Custodian ID"
                                        required
                                    />
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Pack Emerald</button>
                                </div>
                            </form>
                        </div>

                        <div class="column">
                            {/* Ship Emerald to Laboratory */}
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.shipToLaboratory(this.upc);
                            }}>
                                <div class="form-group">
                                    <label for="upc">Emerald UPC</label>
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald UPC"
                                        required
                                    />
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Ship Emerald to Lab</button>
                                </div>
                            </form>
                        </div>

                        <div class="column">
                            {/* Register Emerald for Sale */}
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.registerForSale(this.upc, this.marketPrice);
                            }}>
                                <div class="form-group">
                                    <label for="upc">Emerald UPC</label>
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald UPC"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="marketPrice">Price</label>
                                    <input
                                        id="marketPrice"
                                        type="number"
                                        onChange={(e) => { this.marketPrice = e.target.value }}
                                        class="form-control"
                                        placeholder="Market Price"
                                        required
                                    />
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Register Emerald for Sale</button>
                                </div>
                            </form>                      
                        </div>
  
                    </div>
                </div>

                {/* Laboratory Operations */}
                <div class="dashboard-section">
                    <h2 class="dashboard-heading">Laboratory Operations</h2>        
                    <div class="row">

                        {/* Confirm the emerald reception */}            
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.laboratoryReceived(this.upc);
                            }}>
                                <div class="form-group">
                                    <label for="upc">Emerald UPC</label>
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald UPC"
                                        required
                                    />     
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Confirm Emerald Reception</button>
                                </div>
                            </form>
                        </div>

                        {/* Certify Emerald */}
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.certifiedProperties = "data";
                                this.props.certifyEmerald(this.upc, this.certifiedProperties);
                            }}>
                                <div class="form-group">
                                    <label for="upc">Emerald UPC</label>
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald UPC"
                                        required
                                    />  
                                </div>
                                <div class="form-group">
                                    <label for="certifiedProperties">Certify Emerald</label>
                                    <input
                                        id="certifiedProperties"
                                        type="text"
                                        onChange={(e) => { this.certifiedProperties = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald Certified Information"
                                        required
                                    />           
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Certify Emerald</button>
                                </div>
                            </form>
                        </div>

                        {/* Ship certified emerald to custodian */}            
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.shipToSecureStore(this.upc);
                            }}>
                                <div class="form-group">
                                    <label for="upc">Emerald UPC</label>
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald UPC"
                                        required
                                    />     
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Ship Certified Emerald to Storage</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                {/* Custodian Operations */}
                <div class="dashboard-section">
                    <h2 class="dashboard-heading">Custodian Operations</h2>        
                    <div class="row">

                        {/* Confirm the emerald reception */}            
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.SecureStorageReceived(this.upc);
                            }}>
                                <div class="form-group">
                                    <label for="upc">Emerald UPC</label>
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald UPC"
                                        required
                                    />     
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Confirm Emerald Reception</button>
                                </div>
                            </form>
                        </div>

                        {/* Store Emerald */}
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.StoreEmerald(this.upc);
                            }}>
                                <div class="form-group">
                                    <label for="upc">Emerald UPC</label>
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald UPC"
                                        required
                                    />     
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Store Emerald</button>
                                </div>
                            </form>
                        </div>

                        {/* Ship Emerald to Manufacturer */}
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.shipToManufacturer(this.upc);
                            }}>
                                <div class="form-group">
                                    <label for="upc">Emerald UPC</label>
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald UPC"
                                        required
                                    />     
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Ship Emerald to Manufacturer</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                {/* Manufacturer Operations */}
                <div class="dashboard-section">
                    <h2 class="dashboard-heading">Manufacturer Operations</h2>
                    <div class="row">

                        {/* Buy Emeralds from emeralds for sale */}
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.buyFromMiner(this.upc);
                            }}>
                                <div class="form-group">
                                    <label for="upc">Emerald UPC</label>
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald UPC"
                                        required
                                    />
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Buy Emerald</button>
                                </div>
                            </form>
                        </div>

                        {/* Confirm emerald reception from custodian */}
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.receiveFromStorage(this.upc);
                            }}>
                                <div class="form-group">
                                    <label for="upc">Emerald UPC</label>
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald UPC"
                                        required
                                    />
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Confirm Emerald Reception</button>
                                </div>
                            </form>
                        </div>

                        {/* Manufacture Emerald */}
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.manufacturedInfo = "data manufactured";
                                this.props.manufactureEmerald(this.upc, this.manufacturedInfo, priceInt);
                            }}>
                                <div class="form-group">
                                    <label for="upc">Emerald UPC</label>
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald UPC"
                                        required
                                    />
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Manufacture Emerald</button>
                                </div>
                            </form>
                        </div>

                        {/* Pack Manufactured Emerald */}
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.packCutEmerald(this.upc);
                            }}>
                                <div class="form-group">
                                    <label for="upc">Emerald UPC</label>
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald UPC"
                                        required
                                    />
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Pack Manufactured Emerald</button>
                                </div>
                            </form>
                        </div>

                        {/* Publish Manufactured Emerald for sale */}
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.publishEmerald(this.upc, priceInt);
                            }}>
                                <div class="form-group">
                                    <label for="upc">Emerald UPC</label>
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald UPC"
                                        required
                                    />
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Publish for Sale</button>
                                </div>
                            </form>
                        </div>

                        {/* Ship to customer */}
                        <div class="column">
                            <form class="dashboard-content" onSubmit={(event) => {
                                event.preventDefault();
                                this.props.shipEmeraldToCustomer(this.upc);
                            }}>
                                <div class="form-group">
                                    <label for="upc">Emerald UPC</label>
                                    <input
                                        id="upc"
                                        type="number"
                                        onChange={(e) => { this.upc = e.target.value }}
                                        class="form-control"
                                        placeholder="Emerald UPC"
                                        required
                                    />
                                </div>
                                <div class="button-div">
                                    <button type="submit" class="dashboard-button">Ship Emerald to Customer</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

              {/* Customer Operations */}
              <div class="dashboard-section">
                  <h2 class="dashboard-heading">Customer Operations</h2>
                  <div class="row">

                      {/* Buy Emeralds from manufactured emeralds available */}
                      <div class="column">
                          <form class="dashboard-content" onSubmit={(event) => {
                              event.preventDefault();
                              this.props.buyFromManufacturer(this.upc);
                          }}>
                              <div class="form-group">
                                  <label for="upc">Emerald UPC</label>
                                  <input
                                      id="upc"
                                      type="number"
                                      onChange={(e) => { this.upc = e.target.value }}
                                      class="form-control"
                                      placeholder="Emerald UPC"
                                      required
                                  />
                              </div>
                              <div class="button-div">
                                  <button type="submit" class="dashboard-button">Buy Manufactured Emerald</button>
                              </div>
                          </form>
                      </div>

                      {/* Confirm emerald reception from custodian */}
                      <div class="column">
                          <form class="dashboard-content" onSubmit={(event) => {
                              event.preventDefault();
                              this.props.deliverToCustomer(this.upc);
                          }}>
                              <div class="form-group">
                                  <label for="upc">Emerald UPC</label>
                                  <input
                                      id="upc"
                                      type="number"
                                      onChange={(e) => { this.upc = e.target.value }}
                                      class="form-control"
                                      placeholder="Emerald UPC"
                                      required
                                  />
                              </div>
                              <div class="button-div">
                                  <button type="submit" class="dashboard-button">Confirm Manufactured Emerald Reception</button>
                              </div>
                          </form>
                      </div>

    </div>
              </div>

        </div>

      </div>
    );
  }
}

export default Main;