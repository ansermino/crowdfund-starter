import React from 'react'
import { Button }  from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const style = {
  rootDiv: {
    background: 'black',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 0.5fr'
  },
  title: {
    color: 'white',
    verticalAlign:  'middle',
    padding: '0.5rem',
    marginLeft: '2rem',
    display: 'inline',
    fontSize: '3rem'
  },
  addCampaign: {
    margin: '1rem',
    float: 'right',
    verticalAlign: 'middle'
  }
}


class Header extends React.Component{
  constructor(props) {
    super(props)
    this.handleRedirect = this.handleRedirect.bind(this)
  }
  handleRedirect() {
    this.props.history.push('/new')
  }
  render () {
    return (
      <div style={style.rootDiv}>
        <Link to='/'><h1 style={style.title}>CROWDFUND</h1></Link>
        <div></div>
        <div></div>
        <div></div>
        <Link to='/new'>
          <Button style={style.addCampaign} >New Campaign</Button>
        </Link>

      </div>
    )
  }
}

export default Header