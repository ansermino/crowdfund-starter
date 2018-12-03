# CrowdFund

## Overview

## Steps

1. Deploy contracts to ganache-cli
    
    a) Use the mneumonic (seed phrase) from MetaMask `ganache-cli -m "<mneumonic>"` (make sure to use quotes!). This will mean that the accounts provided by ganache are the same as the ones in MetaMask
    
    b) Once Ganache is running, inside of `solidity/` run `truffle deploy`
    
    c) Make note of the addresses the contracts are deployed to (`Factory: 0x1234...` and `Dashboard: 0x1234...`)
2. Connect MetaMask to Ganache (choose `Private Network`)

3. Run client

    a) First, update `client/src/constants/constants.js`. Set `DASHBOARD_ADDRESS` and `FACTORY_ADDRESS` to the addresses truffle gave us above.

    b) Inside of `client/` run:
    - `npm install`
    - `npm run start`
6. Implement web3 funtionality (see `// TODO: ...`)
    - Get all campaigns and display them on the home page (`client/src/components/Capaigns.jsx`)
    - Add new campaigns on the `/new` page (`client/src/components/newCampaign.jsx`)
    - Ability to donate to campaigns (`client/src/components/DonateModal.jsx`)

## Troubleshooting & Tips

### Web3
- Make sure to use Web3 v0.x not v1.x
- You can access the MetaMask web3 instance via `window.web3`
- Interacting with a contract might look like this:
> ```
> const ContractA = window.web3.eth.contract(CONTRACT_ABI)
> let ContractAInstance = ContractA.at(CONRACT_ADDRESS)
> ContractA.functionA(<params>, <options>, <callback>)
> ```


### Interacting With Contract
- You can use `truffle console` to interact with deployed contracts for testing
- eg: `ContractA.at('<address>').funtion1(<params>)`

### MetaMask
- Connect MetaMask to `Private Network` (ie. Ganache-cli)
- Try switching networks if you don't see correct balances
- Make sure Ganache display the same account addresses as you see in MetaMask

## Documentation

- Web3 v0 (not Web3 v1): https://github.com/ethereum/wiki/wiki/JavaScript-API
- React: https://reactjs.org/
- Semantic-UI-React: https://react.semantic-ui.com/