require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const infuraSepolia = "https://linea-sepolia.infura.io/v3/9cfdf759f8c540b2ac3be541b99ccebc"
const mnemonicPhrase = "prize cause index swarm fence rabbit craft crop scout suit monster age";


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ganache: {
      host: "127.0.0.1",          // Localhost
      port: 7545,                 // Standard Ganache port
      network_id: 5777,           // Ganache network ID
      gas: 6721975,               // Gas limit (optional, adjust as needed)
      gasPrice: 20000000000,      // Gas price (optional, adjust as needed)
      skipDryRun: true            // Skip dry run (optional, useful for Ganache)
    }
    
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.10",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
}
