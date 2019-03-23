import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

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
        contact_number: "",
        repeat_password: '',

        fname_error: '',
        mname_error: '',
        lname_error: '',
        email_error: '',
        contact_error: '',
        password_error: '',
        repeatpass_error: '',

        form_complete: '',
        form_error_pass: '',
        prompt_message: '',
        prompt_header: ''
      }
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleMiddleNameChange = this.handleMiddleNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleContactChange = this.handleContactChange.bind(this);
      this.handleRepeatPassChange = this.handleRepeatPassChange.bind(this);
  }

  handleFirstNameChange(e) { this.setState({first_name: e.target.value, fname_error: false}); }
  handleMiddleNameChange(e) { this.setState({middle_name: e.target.value, mname_error: false}); }
  handleLastNameChange(e) { this.setState({last_name: e.target.value, lname_error: false}); }
  handleEmailChange(e) { this.setState({email_address: e.target.value, email_error: false}); }
  handlePasswordChange(e) { this.setState({password: e.target.value, password_error: false}); }
  handleContactChange(e) { this.setState({contact_number: e.target.value, contact_error: false}); }
  handleRepeatPassChange(e) { this.setState({repeat_password: e.target.value, repeatpass_error: false}); }

  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});
  }

  checkForm = () => {
    var error = false;

    console.log(this.state.password);
    console.log(this.state.repeat_password);

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

    console.log(error);

    if(error){
      this.setState({form_complete: false});
      this.setState({prompt_header: 'Incomplete Information'}); 
      this.setState({prompt_message: 'Please fill up all the fields.'});  
    }else{
      this.setState({form_complete: true});
      if(this.state.password !== this.state.repeat_password){
        this.setState({form_error_pass: true});
        this.setState({prompt_header: 'Passwords do not match'});
        this.setState({prompt_message: 'Please re-type password.'});
      }else{
        this.setState({form_error_pass: false});
        this.handleSubmit();
      }
    }

    

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
                  <Form.Input label='First name' placeholder='First name' onChange={this.handleFirstNameChange} error={this.state.fname_error}/>
                  <Form.Input label='Middle name' placeholder='Middle name' onChange={this.handleMiddleNameChange} error={this.state.mname_error}/>
                  <Form.Input label='Last name' placeholder='Last name' onChange={this.handleLastNameChange} error={this.state.lname_error}/>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input label='Email Address' placeholder='Email Address' onChange={this.handleEmailChange} error={this.state.email_error}/>
                  <Form.Input label='Contact Number' placeholder='Contact Number' onChange={this.handleContactChange} error={this.state.contact_error}/>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input label='Password' placeholder='Password' onChange={this.handlePasswordChange} error={this.state.password_error}/>
                  <Form.Input label='Repeat Password' placeholder='Repeat Password' onChange={this.handleRepeatPassChange} error={this.state.repeatpass_error}/>
                </Form.Group>

              {(this.state.form_complete===false || this.state.form_error_pass===true) ?
                  <Message
                    header={this.state.prompt_header}
                    content={this.state.prompt_message}
                  />
                : ''}

              <Button type='submit' onClick={this.checkForm} id='edit-button2'>Add</Button>
              <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
          </Form>
          </div>)}
        </div>
    );
  }
}

