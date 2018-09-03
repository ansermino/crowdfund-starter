import React from 'react'
import { Form, Button, Input, Message } from 'semantic-ui-react'

class CreateCampaign extends React.Component{
  constructor(props) {
    super(props)

    this.state = {name: '', goal: '', beneficiary: '', duration: '', error: false, errorMessage: '', loading: false}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleGoalChange =  this.handleGoalChange.bind(this)
    this.handleBeneficiaryChange =  this.handleBeneficiaryChange.bind(this)
    this.handleDurationChange =  this.handleDurationChange.bind(this)

  }
  handleSubmit(e) {
    if(this.state.goal <= 0) {
      this.setState({error: true, errorMessage: 'Please enter a target > 0.'})
    } else if (this.state.name.length < 3) {
      this.setState({error: true, errorMessage: 'Please enter name with at least 3 characters.'})
    } else if (this.state.beneficiary.length !== 42) {
      this.setState({error: true, errorMessage: 'Invalid beneficiary address'})
    } else if (this.state.duration === 0) {
      this.setState({error: true, errorMessage: 'Minimum duration 1 day.'})
    } else {
      this.setState({loading: true})
      this.createCampaign(this.state.name, this.state.beneficiary, this.state.goal)
    }
  }
  handleNameChange(e) {
    this.setState({error: false, name: e.target.value})
  }
  handleGoalChange(e) {
    if(e.target.value === '' || isNaN(e.target.value)){
      this.setState({error: true, errorMessage: 'Please enter a numerical value.', goal: 0})
    } else {
      this.setState({error: false, goal: parseInt(e.target.value, 10)})
    }
  }
  handleBeneficiaryChange(e) {
    if(e.target.value.substr(0,2) !== '0x') {
      this.setState({error: false, beneficiary: '0x' + e.target.value})
    } else {
      this.setState({error: false, beneficiary: e.target.value})
    }
  }
  handleDurationChange(e) {
    if(e.target.value === '' || isNaN(e.target.value)){
      this.setState({error: true, errorMessage: 'Please enter a numerical value.', duration: 0})
    } else {
      this.setState({error: false, duration: parseInt(e.target.value, 10)})
    }
  }
  createCampaign (name, beneficiary, goal, duration) {
    /*
     * TODO: Implement the creation of a new component.
     */
  }
  render () {
    return (
      <div>
        <Form error loading={this.state.loading}>
          <h1>Create Campaign</h1>
          <Form.Field>
            <label>Capaign Name:</label>
            <input placeholder='Campaign Name' onChange={this.handleNameChange} value={this.state.name}/>
          </Form.Field>
          <Form.Field>
            <label>Beneficiary Address:</label>
            <input placeholder='0x1234' onChange={this.handleBeneficiaryChange} value={this.state.beneficiary}/>
          </Form.Field>
          <Form.Field>
            <label>Target:</label>
            <Input placeholder='100' onChange={this.handleGoalChange} value={this.state.goal}/>
          </Form.Field>
          <Form.Field>
            <label>Duration (days):</label>
            <Input placeholder='30' onChange={this.handleDurationChange} value={this.state.duration}/>
          </Form.Field>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
        {this.state.error ? <Message error header='Invalid' content={this.state.errorMessage}/> : null}
      </div>
    )
  }
}

export default CreateCampaign