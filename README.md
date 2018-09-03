# CrowdFund

## Overview

## Steps

1. Setup truffle project in `/solidity`
    - Contracts are in `client/src/contracts`
    - You will need the `development` setup, you can add testnets if you want
    - Consider using a soft link (shortcut) so `solidity/contracts` and `client/src/contracts` remain in sync. (eg. `ln -s solidity/contracts/ client/src`)
    - You will need to delete `solidity/contracts/.placeholder`
2. Deploy contracts to ganache-cli
    - `truffle deploy --network development`
    - Use the mneumonic (seed phrase) from MetaMask `ganache-cli -m "<mneumonic>"` (make sure to use quotes!). This will mean that the accounts provided by ganache are the same as the ones in MetaMask
    - Make note of the addresses the contracts are deployed to
3. Connect MetaMask to ganache (choose `Private Network`)
4. Compile the ABI and add it to `client/src/constants/constants.js`
    - Use `npm run build:contracts` to compile and extract the ABI, you will see `*.abi` files generated in `client/src/contracts`
    - You can copy the contents of a `*.abi` file and assign it to a variable in `client/src/constants` like this: `const abi = JSON.parse(<ABI string>)`. If you can find a better method for importing the *.abi files let us know :)
5. Run client (`client/`)
    - `npm install`
    - `npm run start`
6. Implement web3 funtionality (see `// TODO: ...`)
    - Get all campaigns and display them on the home page (`client/src/components/Capaigns.jsx`)
    - Add new campaigns on the `/new` page (`client/src/components/newCampaign.jsx`)
    - Ability to donate to campaigns (`client/src/components/DonateModal.jsx`)
    - Make sure to display readable units of time (ie. not seconds)
7. Implement IPFS image hosting (optional)
    - Supply the IPFS hash as an additional field when creating a campaign. Modifications to the contracts will be necessary to store this
    - Consider using https://github.com/ipfs/js-ipfs

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

- Callbacks can be ugly. Here's a way to use them like promises:
> ```
> const getValue = async () {
>     let value = await new Promise((resolve, reject) => {
>     contract.getValue((err, data) => {
>        if(err) {
>          reject(err)
>        } else {
>          resolve(data.toString())
>        }
>      })
>    })
>   }
> ```
- Some contract calls might return BigNumber type. You can use `.toString()` to make them usable. If you print a BigNumber it might look like this: `<BN: c>`

### React/ES6
- To use a variable or object in another file you must:
    - Export it from its file `export const x = ...` or `export default MyComponent`
    - Import it: `import MyComponent from './MyComponent'`
- Props are parameters we can pass into a component
    - If I use `<SomeComponent name='hey' />` then I can access `this.props.name` inside SomeComponent
- You must use `this.setState({name: 'satoshi'})` to change the state of the component. Note: you only need to include the variables you want to change

### Interacting With Contract
- You can use `truffle console` to interact with deployed contracts for testing
- eg: `ContractA.at('<address>').funtion1(<params>)`

### MetaMask
- MetaMask does not support async calls (only callbacks)
- Connect MetaMask to `Private Network` (ie. Ganache-cli)
- Try switching networks if you don't see correct balances
- Make sure Ganache display the same account addresses as you see in MetaMask

## Documentation

- Web3 v0 (not Web3 v1): https://github.com/ethereum/wiki/wiki/JavaScript-API
- React: https://reactjs.org/
- Semantic-UI-React: https://react.semantic-ui.com/