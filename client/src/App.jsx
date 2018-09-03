import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch } from 'react-router'

import Header from './components/Header'
import Campaigns from './components/Capaigns'
import CreateCampaign from './components/CreateCampaign'


const style = {
  rootDiv: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 1fr',
    width: '100%',
    marginTop: '3rem',
  },
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {connected: false}
  }
  componentWillMount () {
    // NOTE: Here is where we check for web3. If the user does not have metamask an error will be displayed.
    if(window.web3){
      this.setState({connected: true})
      console.log('Web3 availible')
    } else {
      console.log('Web3 not availible')
    }
  }
  render() {
    if(!this.state.connected) {
      return (
        <div>
          <h2>MetaMask Required</h2>
          <p>This app requires the MetaMask extension</p>
        </div>
      )
    } else {
      return (
        <div className="App">
          <Header />
          <div style={style.rootDiv} >
            <div></div>
            <Switch>
              {/* NOTE: This is how we control what 'page' we are on. React is really a single page application.*/}
              <Route exact path="/" component={Campaigns} />
              <Route exact path='/new' component={CreateCampaign}/>
            </Switch>
            <div></div>
          </div>
        </div>
      );
    }

  }
}

export default App;
