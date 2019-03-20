import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

import '../../styles/add.css';
import '../../styles/button.css';

export default class SignUp extends Component {

  constructor() {
    super();

    this.state = {
      fname_error: '',
      mname_error: '',
      lname_error: '',
      email_error: '',
      contact_error: '',
      password_error: '',
      repeatpass_error: '',
      address_error: '',
      zipcode_error: '',
      form_complete: '',

      first_name: '',
      middle_name: '',
      last_name: '',
      email_address: '',
      contact_number: '',
      passsword: '',
      repeat_password: '',
      address: '',
      zip_code: ''
    }

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleMiddleNameChange = this.handleMiddleNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRepeatPassChange = this.handleRepeatPassChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
  }

  handleFirstNameChange(e) { this.setState({first_name: e.target.value, fname_error: false}); }
  handleMiddleNameChange(e) { this.setState({middle_name: e.target.value, mname_error: false}); }
  handleLastNameChange(e) { this.setState({last_name: e.target.value, lname_error: false}); }
  handleEmailChange(e) { this.setState({email_address: e.target.value, email_error: false}); }
  handleContactChange(e) { this.setState({contact_number: e.target.value, contact_error: false}); }
  handlePasswordChange(e) { this.setState({passsword: e.target.value, password_error: false}); }
  handleRepeatPassChange(e) { this.setState({repeat_password: e.target.value, repeatpass_error: false}); }
  handleAddressChange(e) { this.setState({address: e.target.value, address_error: false}); }
  handleZipCodeChange(e) { this.setState({zip_code: e.target.value, zipcode_error: false}); }

  checkForm = () => {
    var error;

    if(this.state.first_name === ''){
      this.setState({fname_error: true});
      error=true
    }
    if(this.state.middle_name === ''){
      this.setState({mname_error: true});
      error=true
    }
    if(this.state.last_name === ''){
      this.setState({lname_error: true});
      error=true
    }
    if(this.state.email_address === ''){
      this.setState({email_error: true});
      error=true
    }
    if(this.state.contact_number === ''){
      this.setState({contact_error: true});
      error=true
    }
    if(this.state.passsword === ''){
      this.setState({password_error: true});
      error=true
    }
    if(this.state.repeat_password === ''){
      this.setState({repeatpass_error: true});
      error=true
    }
    if(this.state.address === ''){
      this.setState({address_error: true});
      error=true
    }
    if(this.state.zip_code === ''){
      this.setState({zipcode_error: true});
      error=true
    }

    if(error){
      this.setState({form_complete: false});
    }else{
      this.setState({form_complete: true});
    }
  }

  render(){
    return(
      <div> 
        <HeaderBar headerTitle={'Sign Up'}/>
        <div className='form-style2'>
        
            
            <Form >

                <Form.Group widths='equal'>
                  <Form.Input fluid label='First name' placeholder='First name' onChange={this.handleFirstNameChange} error={this.state.fname_error} />
                  <Form.Input fluid label='Middle name' placeholder='Middle name' onChange={this.handleMiddleNameChange} error={this.state.mname_error} />
                  <Form.Input fluid label='Last name' placeholder='Last name' onChange={this.handleLastNameChange} error={this.state.lname_error} />
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input fluid label='Email Address' placeholder='Email Address' onChange={this.handleEmailChange} error={this.state.email_error} />
                  <Form.Input fluid label='Contact Number' placeholder='Contact Number' onChange={this.handleContactChange} error={this.state.contact_error} />
                </Form.Group >

                <Form.Group widths='equal'>
                  <Form.Input fluid label='Password' placeholder='Password' onChange={this.handlePasswordChange} error={this.state.password_error} />
                  <Form.Input fluid label='Repeat Password' placeholder='Repeat Password' onChange={this.handleRepeatPassChange} error={this.state.repeatpass_error} />
                </Form.Group>

                <Form.Group>
                  <Form.Input width={15} fluid label='Address' placeholder='Address' onChange={this.handleAddressChange} error={this.state.address_error} />
                  <Form.Input width={3} fluid label='Zip Code' placeholder='Zip Code' onChange={this.handleZipCodeChange} error={this.state.zipcode_error} />
                </Form.Group>

                {this.state.form_complete===false ?
                  <Message
                    header='Incomplete Information'
                    content='Please fill up all the fields.'
                  />
                : ''}
                <Button id='signup-button' onClick={this.checkForm}>
                  Sign Up
                </Button>

            </Form>
        </div>

        <Footer/>
      </div>
    );
  }
}

