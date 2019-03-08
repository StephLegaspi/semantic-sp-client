import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react'

import AddButton from '../button/AddButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

export default class AddAdmin extends Component {

   constructor() {
      super();
      this.state = {
        activeModal: false,
        first_name: "",
        middle_name: "",
        last_name: "",
        email_address: "",
        password: "",
        contact_number: ""
      }
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleMiddleNameChange = this.handleMiddleNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleContactChange = this.handleContactChange.bind(this);
  }

  handleFirstNameChange(e) { this.setState({first_name: e.target.value}); }
  handleMiddleNameChange(e) { this.setState({middle_name: e.target.value}); }
  handleLastNameChange(e) { this.setState({last_name: e.target.value}); }
  handleEmailChange(e) { this.setState({email_address: e.target.value}); }
  handlePasswordChange(e) { this.setState({password: e.target.value}); }
  handleContactChange(e) { this.setState({contact_number: e.target.value}); }

  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});
  }

  handleSubmit = () => {
        const admin = JSON.stringify({first_name: this.state.first_name, middle_name: this.state.middle_name, last_name: this.state.last_name, email_address: this.state.email_address, password: this.state.password, contact_number: this.state.contact_number})
       
        fetch(`http://localhost:3001/v1/administrators`,{
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: admin
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status){
            this.setState({activeModal: false})
            this.props.handleUpdate()
          }
        })
        .catch((e) => {
          console.log(e)
        })
  }

  render(){
    return(
      <div>
    <AddButton handleAdd={this.onModal}/>
        {this.state.activeModal && (
          <div className='add-modal'>
            <Form className='form-style-smaller'>
                  
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>First name</label>
                    <Input placeholder='First name' onChange={this.handleFirstNameChange}/>
                  </Form.Field>

                  <Form.Field>
                    <label>Middle name</label>
                    <Input placeholder='Middle name' onChange={this.handleMiddleNameChange}/>
                  </Form.Field>

                  <Form.Field>
                   <label>Last name</label>
                    <Input placeholder='Last name' onChange={this.handleLastNameChange}/>
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Email Address</label>
                    <Input placeholder='Email Address' onChange={this.handleEmailChange}/>
                  </Form.Field>

                  <Form.Field>
                    <label>Contact Number</label>
                    <Input placeholder='Contact Number' onChange={this.handleContactChange}/>
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Password</label>
                    <Input placeholder='Password' onChange={this.handlePasswordChange}/>
                  </Form.Field>

                  <Form.Field>
                    <label>Repeat Password</label>
                    <Input placeholder='Repeat Password'/>
                  </Form.Field>
                </Form.Group>

              <Button type='submit' onClick={this.handleSubmit} id='edit-button2'>Add</Button>
              <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
          </Form>
          </div>)}
        </div>
    );
  }
}

