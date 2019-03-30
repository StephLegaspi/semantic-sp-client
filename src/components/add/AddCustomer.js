import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'
import PromptModal from '../infoModal/PromptModal.js'

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
      form_error_field: '',

      first_name: '',
      middle_name: '',
      last_name: '',
      email_address: '',
      contact_number: '',
      password: '',
      repeat_password: '',
      address: '',
      zip_code: '',

      prompt_message: '',
      prompt_header: '',
      success: false
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
  handlePasswordChange(e) { this.setState({password: e.target.value, password_error: false}); }
  handleRepeatPassChange(e) { this.setState({repeat_password: e.target.value, repeatpass_error: false}); }
  handleAddressChange(e) { this.setState({address: e.target.value, address_error: false}); }
  handleZipCodeChange(e) { this.setState({zip_code: e.target.value, zipcode_error: false}); }
  setSuccess = () => {
    this.setState({success: false});
  }

  checkForm = () => {
    var error = false;

    if(this.state.first_name === ''){
      this.setState({fname_error: true});
      error=true;
    }
    if(this.state.middle_name === ''){
      this.setState({mname_error: true});
      error=true;
    }
    if(this.state.last_name === ''){
      this.setState({lname_error: true});
      error=true;
    }
    if(this.state.email_address === ''){
      this.setState({email_error: true});
      error=true;
    }
    if(this.state.contact_number === ''){
      this.setState({contact_error: true});
      error=true;
    }
    if(this.state.password === ''){
      this.setState({password_error: true});
      error=true;
    }
    if(this.state.repeat_password === ''){
      this.setState({repeatpass_error: true});
      error=true;
    }
    if(this.state.address === ''){
      this.setState({address_error: true});
      error=true;
    }
    if(this.state.zip_code === ''){
      this.setState({zipcode_error: true});
      error=true;
    }


    if(error){
      this.setState({form_complete: false});
      this.setState({prompt_header: 'Incomplete Information'}); 
      this.setState({prompt_message: 'Please fill up all the fields.'});  
    }else{
      this.setState({form_complete: true});
      if(this.state.password !== this.state.repeat_password){
        this.setState({form_error_field: true});
        this.setState({prompt_header: 'Passwords do not match'});
        this.setState({prompt_message: 'Please re-type password.'});
      }else{
        this.setState({form_error_field: false});
        this.handleSubmit();
      }
    }

  }

   handleSubmit = () => {
        const request = JSON.stringify({
            first_name: this.state.first_name, 
            middle_name: this.state.middle_name,
            last_name: this.state.last_name,
            email_address: this.state.email_address,
            contact_number: this.state.contact_number,
            password: this.state.password,
            address: this.state.address,
            zip_code: this.state.zip_code,
            user_type: 'Customer',

        })
       
        fetch(`http://localhost:3001/v1/Customers`,{
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: request
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status === 200){
            console.log("Successfully added request");
            this.setState({first_name: ''});
            this.setState({middle_name: ''});
            this.setState({last_name: ''});
            this.setState({email_address: ''});
            this.setState({contact_number: ''});
            this.setState({password: ''});
            this.setState({address: ''});
            this.setState({zip_code: ''});
            this.setState({repeat_password: ''});

            this.setState({form_complete: ''});
            this.setState({form_error_field: ''});
            this.setState({prompt_header: ''});
            this.setState({prompt_message: ''});
            this.setState({success: true});
          }else if(result.status===400){
            this.setState({form_error_field: true});
            this.setState({prompt_header: 'Invalid Email Address or Contact Number'});
            this.setState({prompt_message: 'Please enter a valid email or contact number.'});
          }else if(result.status===406){
            this.setState({form_error_field: true});
            this.setState({email_error: true});
            this.setState({prompt_header: 'Email Address already has an account'});
            this.setState({prompt_message: 'Please enter a different valid email address.'});
          }
        })
        .catch((e) => {
          console.log(e)
        })
  }

  render(){
    return(
      <div> 
        <HeaderBar headerTitle={'Sign Up'}/>
        <div className='form-style2'>
        
            
            <Form >

                <Form.Group widths='equal'>
                  <Form.Input fluid label='First name' placeholder='First name' onChange={this.handleFirstNameChange} error={this.state.fname_error} value={this.state.first_name}/>
                  <Form.Input fluid label='Middle name' placeholder='Middle name' onChange={this.handleMiddleNameChange} error={this.state.mname_error} value={this.state.middle_name}/>
                  <Form.Input fluid label='Last name' placeholder='Last name' onChange={this.handleLastNameChange} error={this.state.lname_error} value={this.state.last_name}/>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input fluid label='Email Address' placeholder='Email Address' onChange={this.handleEmailChange} error={this.state.email_error} value={this.state.email_address}/>
                  <Form.Input fluid label='Contact Number' placeholder='Contact Number' onChange={this.handleContactChange} error={this.state.contact_error} value={this.state.contact_number}/>
                </Form.Group >

                <Form.Group widths='equal'>
                  <Form.Input fluid label='Password' placeholder='Password' onChange={this.handlePasswordChange} error={this.state.password_error} value={this.state.password}/>
                  <Form.Input fluid label='Repeat Password' placeholder='Repeat Password' onChange={this.handleRepeatPassChange} error={this.state.repeatpass_error} value={this.state.repeat_password}/>
                </Form.Group>

                <Form.Group>
                  <Form.Input width={15} fluid label='Address' placeholder='Address' onChange={this.handleAddressChange} error={this.state.address_error} value={this.state.address}/>
                  <Form.Input width={3} fluid label='Zip Code' placeholder='Zip Code' onChange={this.handleZipCodeChange} error={this.state.zipcode_error} value={this.state.zip_code}/>
                </Form.Group>

                {(this.state.form_complete===false || this.state.form_error_field===true) ?
                  <Message
                    header={this.state.prompt_header}
                    content={this.state.prompt_message}
                  />
                : ''}
                <Button id='signup-button' onClick={this.checkForm}>
                  Sign Up
                </Button>

                {this.state.success ? <PromptModal changePrompt={this.setSuccess} modalStatus={true} message={'You have successfullly signed up!'}/> : ''}

            </Form>
        </div>

        <Footer/>
      </div>
    );
  }
}

