import React from 'react'
import { Modal, Header, Form, Input, Button, Message } from 'semantic-ui-react'

class DonateModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {amount: '', processing: false, success: false, error: false, errorMessage: ''}

    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleAmountChange(e) {
    this.setState({amount: e.target.value})
  }
  handleSubmit() {
    console.log('Submit')
    this.setState({processing: true, success: false, error: false})
    if(this.state.amount === '' || isNaN(this.state.amount)) {
      this.setState({error: true, processing: false, errorMessage: 'Please enter a number.'})
    }
    else if(this.state.amount <= 0){
      this.setState({error: true, processing: false, errorMessage: 'Must be > 0.'})
    }
    else{
      /*
       * TODO: Submit a call to Dashboard.makeContribution including the amount of wei specified
       */

    }
  }
  render() {
    return (
      <Modal trigger={<Button color='green' style={{float: 'right'}}>Donate</Button>}>
        <Modal.Header>Make A Contribution</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Choose Amount</Header>
            <Form loading={this.state.processing}>

              {this.state.error ? <Header as='h4' color='red'>{this.state.errorMessage}</Header> : null}
              <Input placeholder='wei' onChange={this.handleAmountChange} value={this.state.amount}/>
              <Button style={{marginLeft: '1rem'}} onClick={this.handleSubmit}>Submit</Button>
              <Message error header='Invalid' content={this.state.errorMessage}/>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default DonateModal