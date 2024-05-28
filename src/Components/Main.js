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
        <h2>Emerald Overview</h2>
        <div class="row">

        {/* Load data for FetchBufferOne */}
          <div class="column">
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.fetchItemBufferOne(this.upc)
        }}>
          <div className="form-group mr-sm-2">
            Emerald UPC
            <br></br>
            <input
              id="upc"
              type="number"
              onChange={(e)=>{this.upc = e.target.value}}
              className="form-contro"
              placeholder="Emerald UPC"
              required/>              
          </div>
          <div className="button-div">
          <button type="submit" className="btn btn-primary">Fetch Data1</button>   
          </div>
          <div className="info">
           <h5>BufferOne data</h5>
              <b>SKU: </b>{skuInt1}<br></br>
              <b>UPC: </b>{upcInt1}<br></br>
              <b>Owner ID: </b>{this.props.contractData1[2]}<br></br>
              <b>originMinerID: </b>{this.props.contractData1[2]}<br></br>
              <b>originMineName: </b>{this.props.contractData1[3]}<br></br>
              <b>originMineInformation: </b>{this.props.contractData1[4]}<br></br> 
              <b>originMineLatitude: </b>{this.props.contractData1[5]}<br></br>
              <b>originMineLongitude: </b>{this.props.contractData1[6]}<br></br>      

            </div>
        </form>
        </div>

        
        {/* Load data for FetchBufferTwo */}
        <div class="column">
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.fetchItemBufferTwo(this.upc)
        }}>
          <div className="form-group mr-sm-2">
            Emerald UPC
            <br></br>
            <input
              id="upc"
              type="number"
              onChange={(e)=>{this.upc = e.target.value}}
              className="form-contro"
              placeholder="Emerald UPC"
              required/>              
          </div>
          <div className="button-div">
          <button type="submit" className="btn btn-primary">Fetch Data2</button>
          </div>
          <div className="info">
           <h5>BufferTwo data</h5>
              <b>SKU: </b>{skuInt2}<br></br>
              <b>UPC: </b>{upcInt2}<br></br>
              <b>productID: </b>{productIDInt}<br></br>
              <b>price: </b>{priceInt}<br></br>
              <b>emeraldState: </b>{stateEnum[stateValue]}<br></br>
              <b>laboratoryID: </b>{this.props.contractData2[5]}<br></br> 
              <b>custodianID: </b>{this.props.contractData2[6]}<br></br>
              <b>manufacturerID: </b>{this.props.contractData2[7]}<br></br>
              <b>customerID: </b>{this.props.contractData2[8]}<br></br>          
            </div>
        </form>
        </div>


        </div>                
        <div className="info">
        States map:
        <div class="row">
          <div class="column2">
            0 - Mined<br></br>  
            1 - Scaled<br></br>
            2 - PackedForLab<br></br>
            3 - ShipedToLab<br></br>
            4 - LabReceived<br></br>
          </div>
          <div class="column2">
            5 - Certified<br></br>
            6 - ShippedToStore<br></br>
            7 - StorageReceived<br></br>
            8 - Stored<br></br>
            9 - ForSale<br></br>
          </div>
          <div class="column2">
            10 - Sold<br></br>
            11 - ShipToManufacture<br></br>
            12 - ManufacturerReceived<br></br>
            13 - Manufactured<br></br>
            14 - PackedForSale<br></br>
            </div>
          <div class="column2">
            15 - Published<br></br>
            16 - Buyed<br></br>
            17 - ShippedToCustomer<br></br>            
            18 - Delivered<br></br>
          </div>
        </div>
        </div>
        
        <br></br>

        {/* Actor registration */}

        <h2>Register Actor (Authorization)</h2>        
        <div class="row">

        {/* Miner actor */}
        <div class="form-group">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.props.addMiner(this.address)
                }}>
                  <div className="form-group">
                  Register Miner
                    <br></br>
                    <input
                      id="address"
                      type="text"
                      onChange={(e)=>{this.address = e.target.value}}
                      className="form-contro"
                      placeholder="Miner Address"
                      required
                      />           
                  </div>
                  
                  <div className="button-div">
                  <button type="submit" className="btn btn-primary">Register Miner</button>
                  </div>
                </form>
              </div>

        {/* laboratory actor */}
        <div class="form-group">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.props.addLaboratory(this.address)
                }}>
                  <div className="form-group mr-sm-2">
                  Register Laboratory
                    <br></br>
                    <input
                      id="address"
                      type="text"
                      onChange={(e)=>{this.address = e.target.value}}
                      className="form-contro"
                      placeholder="Miner Address"
                      required
                      />           
                  </div>
                  <div className="button-div">
                  <button type="submit" className="btn btn-primary">Register Laboratory</button>
                  </div>
                </form>
              </div>

        {/* custodian actor */}
        <div class="form-group">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.props.addCustodian(this.address)
                }}>
                  <div className="form-group mr-sm-2">
                  Register Custodian
                    <br></br>
                    <input
                      id="address"
                      type="text"
                      onChange={(e)=>{this.address = e.target.value}}
                      className="form-contro"
                      placeholder="Custodian Address"
                      required
                      />           
                  </div>
                  <div className="button-div">
                  <button type="submit" className="btn btn-primary">Register custodian</button>
                  </div>
                </form>
              </div>

        {/* Manufacturer actor */}
        <div class="form-group">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.props.addManufacturer(this.address)
                }}>
                  <div className="form-group mr-sm-2">
                  Register Manufacturer
                    <br></br>
                    <input
                      id="address"
                      type="text"
                      onChange={(e)=>{this.address = e.target.value}}
                      className="form-contro"
                      placeholder="Manufacturer Address"
                      required
                      />           
                  </div>
                  <div className="button-div">
                  <button type="submit" className="btn btn-primary">Register manufacturer</button>
                  </div>
                </form>
              </div>

        {/* Customer actor */}
        <div class="form-group">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.props.addCustomer(this.address)
                }}>
                  <div className="form-group mr-sm-2">
                  Register Customer
                    <br></br>
                    <input
                      id="address"
                      type="text"
                      onChange={(e)=>{this.address = e.target.value}}
                      className="form-contro"
                      placeholder="Customer Address"
                      required
                      />           
                  </div>
                  <div className="button-div">
                  <button type="submit" className="btn btn-primary">Register Customer</button>
                  </div>
                </form>
              </div>

        </div>



        {/* Minner operations*/}
        <h2>Miner Operations</h2>        
        <div class="row">
          <div class="column">
        {/* Extract Emerald Form */}            
            <div class="form-group">
              <form onSubmit={(event) => {
                event.preventDefault()
                const sku = this.sku
                const upc = this.upc
                const originMinerID = this.originMinerID
                const originMineName = this.originMineName
                const originMineInformation = this.originMineInformation
                const originMineLatitude = this.originMineLatitude
                const originMineLongitude = this.originMineLongitude
                this.props.extractEmerald(sku, upc, originMinerID, originMineName, originMineInformation, originMineLatitude, originMineLongitude)
              }}>
                <div className="form-group mr-sm-2">
                Miner ID 
                  <br></br>
                  <input
                    id="originMinerID"
                    type="text"
                    onChange={(e)=>{this.originMinerID = e.target.value}}
                    className="form-contro"
                    class="input-field"
                    placeholder="Miner ID"
                    required
                    />
                    <br></br>            
                    SKU 
                  <br></br>
                  <input
                    id="sku"
                    type="number"
                    onChange={(e)=>{this.sku = e.target.value}}
                    className="form-contro"
                    class="input-field"
                    placeholder="sku"
                    required
                    size="300" />
                    <br></br>
                  UPC
                  <br></br>
                  <input
                    id="upc"
                    type="number"
                    onChange={(e)=>{this.upc = e.target.value}}
                    className="form-contro"
                    placeholder="upc"
                    required
                    size="300" />                    
                  Mine Name 
                  <br></br>
                  <input
                    id="originMineName"
                    type="text"
                    onChange={(e)=>{this.originMineName = e.target.value}}
                    className="form-contro"
                    class="input-field"
                    placeholder="Mine name"
                    required
                    size="300" />
                    <br></br>
                  Mine Information
                  <br></br>
                  <input
                    id="originMineInformation"
                    type="text"
                    onChange={(e)=>{this.originMineInformation = e.target.value}}
                    className="form-contro"
                    placeholder="Mine Information"
                    required
                    size="300" />
                  <br></br>
                  Mine Latitude
                  <br></br>
                  <input
                    id="originMineLatitude"
                    type="text"
                    onChange={(e)=>{this.originMineLatitude = e.target.value}}
                    className="form-contro"
                    placeholder="Mine latitude"
                    required
                    size="300"/>
                  <br></br>                            
                  Mine Longitud
                  <br></br>
                  <input
                    id="originMineLongitude"
                    type="text"
                    onChange={(e)=>{this.originMineLongitude = e.target.value}}
                    className="form-contro"
                    placeholder="Mine longitud"
                    required
                    size="300"/>  
                </div>
                <div className="button-div">
                <button type="submit" className="btn btn-primary">Extract Emerald</button>
                </div>
              </form>
            </div>
          </div>


          <div class="column">

        {/* Scale Emerald Form */}
            <div class="form-group">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.props.scaleEmerald(this.upc, this.scaleInfo)
                }}>
                  <div className="form-group mr-sm-2">
                  Scale Info
                    <br></br>
                    <input
                      id="scaleInfo"
                      type="text"
                      onChange={(e)=>{this.scaleInfo = e.target.value}}
                      className="form-contro"
                      class="input-field"
                      placeholder="Emerald scale information"
                      required
                      />
                      <br></br>      
                      <input
                      id="upc"
                      type="number"
                      onChange={(e)=>{this.upc = e.target.value}}
                      className="form-contro"
                      class="input-field"
                      placeholder="Emerald upc"
                      required
                      />
                      <br></br>            
                  </div>
                  <div className="button-div">
                  <button type="submit" className="btn btn-primary">Scale Emerald</button>
                  </div>
                </form>
              </div>

        {/* Pack Emerald */}
            <div class="form-group">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.props.packScaledEmerald(this.upc,this.laboratoryID,this.custodianID)
                }}>
                Emerald UPC
                   <input
                      id="upc"
                      type="number"
                      onChange={(e)=>{this.upc = e.target.value}}
                      className="form-contro"
                      class="input-field"
                      placeholder="Emerald upc"
                      required
                      />
                Laboratory Authorized ID 
                  <br></br>
                  <input
                    id="laboratoryID"
                    type="text"
                    onChange={(e)=>{this.laboratoryID = e.target.value}}
                    className="form-contro"
                    class="input-field"
                    placeholder="Authorized laboratory ID"
                    required
                    />
                Custodian authorized ID
                  <br></br>
                  <input
                    id="custodianID"
                    type="text"
                    onChange={(e)=>{this.custodianID = e.target.value}}
                    className="form-contro"
                    class="input-field"
                    placeholder="Authorized custodian ID"
                    required
                    />                    
                  <div className="button-div">
                  <button type="submit" className="btn btn-primary">Pack Emerald</button>
                  </div>
                </form>
              </div>

            {/* </div> */}

        {/* Ship Emerald to Laboratory */}
        <div class="form-group">
            <form onSubmit={(event) => {
              event.preventDefault()
              this.props.shipToLaboratory(this.upc)
            }}>
              Emerald UPC
                   <input
                      id="upc"
                      type="number"
                      onChange={(e)=>{this.upc = e.target.value}}
                      className="form-contro"
                      class="input-field"
                      placeholder="Emerald upc"
                      required
                      />
              <div className="button-div">
              <button type="submit" className="btn btn-primary">Ship Emerald to Lab</button>
              </div>
            </form>
          </div>
        {/* </div> */}

        {/* Register emerald for sale */}
        <div class="form-group">
            <form onSubmit={(event) => {
              event.preventDefault()
              this.props.registerForSale(this.upc,this.marketPrice)
            }}>
            Emerald UPC
            <br></br>
            <input
                id="upc"
                type="number"
                onChange={(e)=>{this.upc = e.target.value}}
                className="form-contro"
                class="input-field"
                placeholder="Emerald upc"
                required
                />     
            Price 
            <br></br>
            <input
              id="marketPrice"
              type="number"
              onChange={(e)=>{this.marketPrice = e.target.value}}
              className="form-contro"
              placeholder="sku"
              required
              size="300" />
              <br></br>
              <div className="button-div">
              <button type="submit" className="btn btn-primary">Register Emerald for sale</button>
              </div>
            </form>
          </div>
        </div>
        </div>


        {/* Laboratory Operations */}

        <h2>Laboratory Operations</h2>        
        <div class="row">

        {/* Confirm the emerald reception */}            
            <div class="form-group">
              <form onSubmit={(event) => {
                event.preventDefault()
                this.props.laboratoryReceived(this.upc)
              }}>
                 Emerald UPC
                <br></br>
                <input
                    id="upc"
                    type="number"
                    onChange={(e)=>{this.upc = e.target.value}}
                    className="form-contro"
                    class="input-field"
                    placeholder="Emerald upc"
                    required
                    />     
                <div className="button-div">
                <button type="submit" className="btn btn-primary">Confirm Emerald reception</button>
                </div>
              </form>
            </div>


        {/* Certify Emerald */}
        <div class="form-group">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.certifiedProperties = "data"
                  this.props.certifyEmerald(this.upc, this.certifiedProperties)
                }}>
                  <div className="form-group mr-sm-2">
                  Emerald UPC
                  <br></br>
                  <input
                      id="upc"
                      type="number"
                      onChange={(e)=>{this.upc = e.target.value}}
                      className="form-contro"
                      class="input-field"
                      placeholder="Emerald upc"
                      required
                      />     
                  Certify Emerald
                    <br></br>
                    <input
                      id="scaleInfo"
                      type="text"
                      onChange={(e)=>{this.certifiedProperties = e.target.value}}
                      className="form-contro"
                      class="input-field"
                      placeholder="Emerald certified information"
                      required
                      />           
                  </div>
                  <div className="button-div">
                  <button type="submit" className="btn btn-primary">Certify Emerald</button>
                  </div>
                </form>
              </div>

        {/* Ship certified emerald to custodian */}            
        <div class="form-group">
              <form onSubmit={(event) => {
                event.preventDefault()
                this.props.shipToSecureStore(this.upc)
              }}>
                 Emerald UPC
                <br></br>
                <input
                    id="upc"
                    type="number"
                    onChange={(e)=>{this.upc = e.target.value}}
                    className="form-contro"
                    class="input-field"
                    placeholder="Emerald upc"
                    required
                    />     
                <div className="button-div">
                <button type="submit" className="btn btn-primary">Ship certified emerald to storage</button>
                </div>
              </form>
            </div>

        </div>

        {/* Custodian Operations */}
        <h2>Custodian Operations</h2>        
        <div class="row">

        {/* Confirm the emerald reception */}            
            <div class="form-group">
              <form onSubmit={(event) => {
                event.preventDefault()
                this.props.SecureStorageReceived(this.upc)
              }}>
                 Emerald UPC
                <br></br>
                <input
                    id="upc"
                    type="number"
                    onChange={(e)=>{this.upc = e.target.value}}
                    className="form-contro"
                    class="input-field"
                    placeholder="Emerald upc"
                    required
                    />     
                <div className="button-div">
                <button type="submit" className="btn btn-primary">Confirm Emerald reception</button>
                </div>
              </form>
          </div>

        {/* Confirm Store Emeralad */}
        <div class="form-group">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.props.StoreEmerald(this.upc)
                }}>
                     Emerald UPC
                    <br></br>
                    <input
                        id="upc"
                        type="number"
                        onChange={(e)=>{this.upc = e.target.value}}
                        className="form-contro"
                        class="input-field"
                        placeholder="Emerald upc"
                        required
                        />     
                  <div className="button-div">
                  <button type="submit" className="btn btn-primary">Store Emerald</button>
                  </div>
                </form>
              </div>

        {/* Confirm Store Emeralad */}
        <div class="form-group">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.props.shipToManufacturer(this.upc)
                }}>
                   Emerald UPC
                  <br></br>
                  <input
                      id="upc"
                      type="number"
                      onChange={(e)=>{this.upc = e.target.value}}
                      className="form-contro"
                      class="input-field"
                      placeholder="Emerald upc"
                      required
                      />     
                  <div className="button-div">
                  <button type="submit" className="btn btn-primary">Ship Emerald to Manufucturer</button>
                  </div>
                </form>
              </div>


        </div>


        {/* Manufacturer Operations */}

        <h2>Manufacturer Operations</h2>        
        <div class="row">
        {/* Buy Emeralds from emeralds for sale */}            
            <div class="form-group">
              <form onSubmit={(event) => {
                event.preventDefault()
                this.props.buyFromMiner(this.upc)
              }}>
                   Emerald UPC
                  <br></br>
                  <input
                      id="upc"
                      type="number"
                      onChange={(e)=>{this.upc = e.target.value}}
                      className="form-contro"
                      class="input-field"
                      placeholder="Emerald upc"
                      required
                      />     
                <div className="button-div">
                <button type="submit" className="btn btn-primary">Buy Emerald</button>
                </div>
              </form>
          </div>

        {/* Confirm emerald reception from custodian */}
        <div class="form-group">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.props.receiveFromStorage(this.upc)
                }}>
                 Emerald UPC
                  <br></br>
                  <input
                      id="upc"
                      type="number"
                      onChange={(e)=>{this.upc = e.target.value}}
                      className="form-contro"
                      class="input-field"
                      placeholder="Emerald upc"
                      required
                      />     
                  <div className="button-div">
                  <button type="submit" className="btn btn-primary">Confirm emerald reception</button>
                  </div>
                </form>
              </div>

        {/* Manufacture Emerald */}
        <div class="form-group">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.manufacturedInfo = "data manufactured"
                  this.props.manufactureEmerald(this.upc, this.manufacturedInfo, priceInt)
                }}>
                  Emerald UPC
                  <br></br>
                  <input
                      id="upc"
                      type="number"
                      onChange={(e)=>{this.upc = e.target.value}}
                      className="form-contro"
                      class="input-field"
                      placeholder="Emerald upc"
                      required
                      />     
                  <div className="button-div">
                  <button type="submit" className="btn btn-primary">Manufacture Emerald</button>
                  </div>
                </form>
              </div>

        {/* Pack Manufactured Emerald */}
        <div class="form-group">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.props.packCutEmerald(this.upc)
                }}>
                  Emerald UPC
                  <br></br>
                  <input
                      id="upc"
                      type="number"
                      onChange={(e)=>{this.upc = e.target.value}}
                      className="form-contro"
                      class="input-field"
                      placeholder="Emerald upc"
                      required
                      />     
                  <div className="button-div">
                  <button type="submit" className="btn btn-primary">Pack Manufactured Emerald</button>
                  </div>
                </form>
              </div>

        {/* Publish Manufactured Emerald for sale*/}
        <div class="form-group">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.props.publishEmerald(this.upc, priceInt)
                }}>
                  Emerald UPC
                  <br></br>
                  <input
                      id="upc"
                      type="number"
                      onChange={(e)=>{this.upc = e.target.value}}
                      className="form-contro"
                      class="input-field"
                      placeholder="Emerald upc"
                      required
                      />     
                  <div className="button-div">
                  <button type="submit" className="btn btn-primary">Publish for sale</button>
                  </div>
                </form>
              </div>

        {/* Ship to customer*/}
        <div class="form-group">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.props.shipEmeraldToCustomer(this.upc)
                }}>
                  Emerald UPC
                  <br></br>
                  <input
                      id="upc"
                      type="number"
                      onChange={(e)=>{this.upc = e.target.value}}
                      className="form-contro"
                      class="input-field"
                      placeholder="Emerald upc"
                      required
                      />     
                  <div className="button-div">
                  <button type="submit" className="btn btn-primary">Ship emerald to customer</button>
                  </div>
                </form>
              </div>


        </div>


        {/* Customer Operations */}

        <h2>Customer Operations</h2>        
        <div class="row">
        {/* Buy Emeralds from manufactured emeralds available */}            
            <div class="form-group">
              <form onSubmit={(event) => {
                event.preventDefault()
                this.props.buyFromManufacturer(this.upc)
              }}>
                Emerald UPC
                  <br></br>
                  <input
                      id="upc"
                      type="number"
                      onChange={(e)=>{this.upc = e.target.value}}
                      className="form-contro"
                      class="input-field"
                      placeholder="Emerald upc"
                      required
                      />     
                <div className="button-div">
                <button type="submit" className="btn btn-primary">Buy Manufactured Emerald</button>
                </div>
              </form>
          </div>

        {/* Confirm emerald reception from custodian */}
        <div class="form-group">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  this.props.deliverToCustomer(this.upc)
                }}>
                  Emerald UPC
                  <br></br>
                  <input
                      id="upc"
                      type="number"
                      onChange={(e)=>{this.upc = e.target.value}}
                      className="form-contro"
                      class="input-field"
                      placeholder="Emerald upc"
                      required
                      />     
                  <div className="button-div">
                  <button type="submit" className="btn btn-primary">Confirm manufactured emerald reception</button>
                  </div>
                </form>
              </div>
        </div>




      </div>
    );
  }
}

export default Main;