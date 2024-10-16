require('@nomicfoundation/hardhat-toolbox')

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/yw5LC23tmcn0SuOG2Hjv_gv3OYFe2C0j",
      accounts: ['e99da9c326f4cf1e9e08dd35e8e6378dd60b6381ffaa9bed4a5165f0a689a266']
    }
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
