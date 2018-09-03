import React from 'react'
import { Card, Icon, Image, Progress } from 'semantic-ui-react'
import DonateModal from './DonateModal'

const UNIX_TIME = 1535829759

const style = {
  campaignDiv: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  campaignCard: {
    margin: '1rem',
  }
}

class Campaigns extends React.Component{
  constructor(props) {
    super(props)
    this.state = {campaigns: []}
  }
  componentWillMount() {
    /*
     * TODO: Fetch all campaigns and add them to the components state with `this.setState({<params>})`
     * This function is called before the page loads
     */
    this.setState({campaigns: exampleCampaigns()})
    //
  }
  render () {
    if(this.state.campaigns.length === 0) {
      return (
        <h2> No campaigns found.</h2>
      )
    }
    else {
      return (
        <div style={style.campaignDiv} >
          {this.state.campaigns.map((campaign, i) => {
            return <span key={i}><Campaign {...campaign} /></span>
          })}
        </div>
      )
    }
  }

}

// NOTE: This functions is marked as async, consider using await (promises) inside of it
const getCampaign = async (address) => {
  /*
   * TODO: Fetch campaign info. See Campaign component below. Keep in mind it expects specific property names (props).
   * Use the examples below as a template.
   */
}

const exampleCampaigns = () => {
  return [
    {
      name: 'Test',
      target: 1000,
      raised: 100,
      ipfsImage: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
      funderCount: 10,
      expires: UNIX_TIME + 3600 * 4,
      address: '0xced42495b72d48a3a78b92346d4f1b7d2e1f7c61a22fe01641daed83cd749493'
    },
    {
      name: 'Test',
      target: 1000,
      raised: 100,
      ipfsImage: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
      funderCount: 10,
      expires: UNIX_TIME + 3600 * 4,
      address: '0xced42495b72d48a3a78b92346d4f1b7d2e1f7c61a22fe01641daed83cd749493'
    },
    {
      name: 'Test',
      target: 1000,
      raised: 100,
      ipfsImage: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
      funderCount: 10,
      expires: UNIX_TIME + 3600 * 4,
      address: '0xced42495b72d48a3a78b92346d4f1b7d2e1f7c61a22fe01641daed83cd749493'
    },
    {
      name: 'Test',
      target: 1000,
      raised: 100,
      ipfsImage: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
      funderCount: 10,
      expires: UNIX_TIME + 3600 * 4,
      address: '0xced42495b72d48a3a78b92346d4f1b7d2e1f7c61a22fe01641daed83cd749493'
    }
  ]
}

const Campaign = (props) => {
  return (
    <Card style={style.campaignCard}>
      <Image src={props.ipfsImage} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <Progress percent={props.raised / props.target * 100} />
        </Card.Meta>
        <Card.Description>{props.raised} wei/{props.target} wei</Card.Description>
        <DonateModal address={props.address}/>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {props.funderCount} Funders
        </a>
      </Card.Content>
    </Card>
  )
}

export default Campaigns