import React, { Component } from 'react';
import Web3 from 'web3'
import {decodeParameters} from 'web3-eth-abi';
import SupplyChain from './abis/SupplyChain.json'
import Main from './Components/Main'


class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = SupplyChain.networks[networkId]
    if(networkData) {
      const supplychain = new web3.eth.Contract(SupplyChain.abi, networkData.address)
      this.setState({ supplychain })
      this.setState({ loading: false})
    } else {
      window.alert('SupplyChain contract not deployed to detected network.')
    }
  }

  constructor(props) {
    super(props)
    console.log("this is " , this.props)
  
    this.addMiner = this.addMiner.bind(this)
    this.addLaboratory = this.addLaboratory.bind(this)  
    this.addCustodian = this.addCustodian.bind(this)  
    this.addManufacturer = this.addManufacturer.bind(this)    
    this.addCustomer = this.addCustomer.bind(this)     
    this.extractEmerald = this.extractEmerald.bind(this)
    this.scaleEmerald = this.scaleEmerald.bind(this)
    this.packScaledEmerald = this.packScaledEmerald.bind(this)
    this.shipToLaboratory = this.shipToLaboratory.bind(this)
    this.laboratoryReceived = this.laboratoryReceived.bind(this)
    this.certifyEmerald = this.certifyEmerald.bind(this)
    this.shipToSecureStore = this.shipToSecureStore.bind(this)
    this.SecureStorageReceived = this.SecureStorageReceived.bind(this)
    this.StoreEmerald = this.StoreEmerald.bind(this)
    this.registerForSale = this.registerForSale.bind(this)
    this.buyFromMiner = this.buyFromMiner.bind(this)
    this.shipToManufacturer = this.shipToManufacturer.bind(this)
    this.receiveFromStorage = this.receiveFromStorage.bind(this)
    this.manufactureEmerald = this.manufactureEmerald.bind(this)
    this.packCutEmerald = this.packCutEmerald.bind(this)
    this.publishEmerald = this.publishEmerald.bind(this)
    this.buyFromManufacturer = this.buyFromManufacturer.bind(this)
    this.shipEmeraldToCustomer = this.shipEmeraldToCustomer.bind(this)
    this.deliverToCustomer = this.deliverToCustomer.bind(this)
    this.fetchItemBufferOne = this.fetchItemBufferOne.bind(this)
    this.fetchItemBufferTwo = this.fetchItemBufferTwo.bind(this)
    
  }

  state = {
    supplychain: null,
    account: '',
    sku: 1,
    upc: 1,
    originMinerID: 0,
    originMineName: "",
    originMineInformation: "",
    originMineLatitude: "",
    originMineLongitude: "",
    loading: true,
    contractData1: [],
    contractData2: []
  }


  addMiner(originMinerID) {
    this.setState({ loading: true })
    console.log("supplychain",this.state.supplychain.methods.addMiner(originMinerID))
    this.state.supplychain.methods.addMiner(originMinerID).send({ 
      from: this.state.account,
      gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('originMinerID',originMinerID);
  }  

  addLaboratory(laboratoryID) {
    this.setState({ loading: true })
    this.state.supplychain.methods.addLaboratory(laboratoryID).send({ 
      from: this.state.account,
      gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('laboratoryID',laboratoryID);
  }  

  addCustodian(custodianID) {
    this.setState({ loading: true })
    this.state.supplychain.methods.addCustodian(custodianID).send({ 
      from: this.state.account,
      gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('custodianID',custodianID);
  }  

  addManufacturer(manufacturerID) {
    this.setState({ loading: true })
    this.state.supplychain.methods.addManufacturer(manufacturerID).send({ 
      from: this.state.account,
      gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('manufacturerID',manufacturerID);
  }

  addCustomer(customerID) {
    this.setState({ loading: true })
    this.state.supplychain.methods.addCustomer(customerID).send({ 
      from: this.state.account,
      gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('customerID',customerID);
  }  

  extractEmerald(sku,
    upc, 
    originMinerID,
    originMineName,
    originMineInformation,
    originMineLatitude,
    originMineLongitude) {
    this.setState({ loading: true })
    this.state.supplychain.methods.extractEmerald(sku,
      upc, 
      originMinerID,
      originMineName,
      originMineInformation,
      originMineLatitude,
      originMineLongitude).send({ 
        from: this.state.account,
        gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }

  scaleEmerald(
    upc, 
    scaleInfo) {
    this.setState({ loading: true })
    this.state.supplychain.methods.scaleEmerald(
      upc, 
      scaleInfo).send({ 
        from: this.state.account,
        gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }  

  packScaledEmerald(
    upc, 
    laboratoryID,
    custodianID) {
    this.setState({ loading: true })
    this.state.supplychain.methods.packScaledEmerald(
      upc, 
      laboratoryID, 
      custodianID).send({ 
        from: this.state.account,
        gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }  

  shipToLaboratory(
    upc) {
    this.setState({ loading: true })
    this.state.supplychain.methods.shipToLaboratory(
      upc).send({ 
        from: this.state.account,
        gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }   


  laboratoryReceived(upc) {
    this.setState({ loading: true })
    this.state.supplychain.methods.laboratoryReceived(
      upc).send({ 
        from: this.state.account,
        gas: 6721975

      })
    .once('receipt', (receipt) => {
      console.log(this.state.account)
      this.setState({ loading: false })
    })
    .on('error', (error) => {
      if (error.receipt) {
        // Transaction was processed but failed
        console.error('Transaction failed', error.receipt);
      } else {
        // Error occurred before the transaction was processed
        console.error('Error sending transaction', error);
      }
      console.log(error)
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }   

  certifyEmerald(
    upc, 
    scaleInfo) {
    this.setState({ loading: true })
    this.state.supplychain.methods.certifyEmerald(
      upc, 
      scaleInfo).send({ 
        from: this.state.account,
        gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }  

  shipToSecureStore(upc) {
    this.setState({ loading: true })
    this.state.supplychain.methods.shipToSecureStore(upc)
    .send({ 
      from: this.state.account,
        gas: 6721975
     })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }  


  SecureStorageReceived(upc) {
    this.setState({ loading: true })
    this.state.supplychain.methods.secureStorageReceived(upc)
    .send({ 
      from: this.state.account,
      gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }  

  StoreEmerald(upc) {
    this.setState({ loading: true })
    this.state.supplychain.methods.StoreEmerald(
      upc).send({ 
        from: this.state.account,
        gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }  

  registerForSale(
    upc, 
    marketPrice) {
    this.setState({ loading: true })
    this.state.supplychain.methods.registerForSale(
      upc, 
      marketPrice).send({ 
        from: this.state.account,
        gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }  

  buyFromMiner(upc) {
    this.setState({ loading: true })
    this.state.supplychain.methods.buyFromMiner(
      upc).send({ 
        from: this.state.account,
        gas: 6721975,
        value: Web3.utils.toWei("1", "ether")})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  } 

  shipToManufacturer(upc) {
    this.setState({ loading: true })
    this.state.supplychain.methods.shipToManufacturer(
      upc).send({ 
        from: this.state.account,
        gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }  

  receiveFromStorage(upc) {
    this.setState({ loading: true })
    this.state.supplychain.methods.receiveFromStorage(upc)
    .send({ 
      from: this.state.account,
      gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }    

  manufactureEmerald(upc, manufacturedInfo) {
    this.setState({ loading: true })
    this.state.supplychain.methods.manufactureEmerald(
      upc, manufacturedInfo).send({ 
        from: this.state.account,
        gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }   

  packCutEmerald(upc) {
    this.setState({ loading: true })
    this.state.supplychain.methods.packCutEmerald(
      upc).send({ 
        from: this.state.account,
        gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }  

  publishEmerald(
    upc, 
    marketPrice) {
    this.setState({ loading: true })
    this.state.supplychain.methods.publishEmerald(
      upc, 
      marketPrice).send({ 
        from: this.state.account,
        gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }    

  buyFromManufacturer(upc) {
    this.setState({ loading: true })
    this.state.supplychain.methods.buyFromManufacturer(upc)
    .send({ 
      from: this.state.account,
      gas: 6721975,
      value: Web3.utils.toWei("1", "ether")})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }    

  shipEmeraldToCustomer(upc) {
    this.setState({ loading: true })
    this.state.supplychain.methods.shipEmeraldToCustomer(
      upc).send({ 
        from: this.state.account,
        gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }   
  
  deliverToCustomer(upc) {
    this.setState({ loading: true })
    this.state.supplychain.methods.deliverToCustomer(
      upc).send({ 
        from: this.state.account,
        gas: 6721975 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log('upc',upc);
  }   

  async fetchItemBufferOne(upc){
    this.setState({ loading: true })
    const bufferOne = await this.state.supplychain.methods.fetchItemBufferOne(upc).call()
    const decodeBasicData = decodeParameters(['uint256','uint256','address','string','string','string','string'],bufferOne)
    this.setState({ contractData1: decodeBasicData});
    console.log("result",decodeBasicData)
    console.log('respuesta',this.state.contractData1);
    this.setState({ loading: false })
  }

  async fetchItemBufferTwo(upc) {
    this.setState({ loading: true })
    const bufferTwo = await this.state.supplychain.methods.fetchItemBufferTwo(upc).call()
    const decodeDetailedData = decodeParameters(['uint256','uint256','uint256','uint256','uint256','address','address','address','address'],bufferTwo)
    this.setState({contractData2: decodeDetailedData})
    console.log("result",decodeDetailedData)
    console.log('respuesta',this.state.contractData2);
    this.setState({ loading: false })
  }  

  render() {
    return (
      <div>
        <div><b>Active account:</b> {this.state.account}</div>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex">
              { this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : <Main
                  contractData1 = {this.state.contractData1}
                  contractData2 = {this.state.contractData2}
                  addMiner={this.addMiner}
                  addLaboratory={this.addLaboratory}
                  addCustodian={this.addCustodian}
                  addManufacturer={this.addManufacturer}
                  addCustomer={this.addCustomer}
                  extractEmerald={this.extractEmerald}
                  scaleEmerald = {this.scaleEmerald}
                  packScaledEmerald={this.packScaledEmerald}
                  shipToLaboratory={this.shipToLaboratory}
                  laboratoryReceived={this.laboratoryReceived}
                  certifyEmerald={this.certifyEmerald}
                  shipToSecureStore={this.shipToSecureStore}
                  SecureStorageReceived={this.SecureStorageReceived}
                  StoreEmerald={this.StoreEmerald}
                  registerForSale={this.registerForSale}
                  buyFromMiner={this.buyFromMiner}
                  shipToManufacturer={this.shipToManufacturer}
                  receiveFromStorage={this.receiveFromStorage}
                  manufactureEmerald={this.manufactureEmerald}
                  packCutEmerald={this.packCutEmerald}
                  publishEmerald={this.publishEmerald}
                  buyFromManufacturer={this.buyFromManufacturer}
                  shipEmeraldToCustomer={this.shipEmeraldToCustomer}
                  deliverToCustomer={this.deliverToCustomer}
                  fetchItemBufferOne={this.fetchItemBufferOne}
                  fetchItemBufferTwo={this.fetchItemBufferTwo}
                  

                   />
              }
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

