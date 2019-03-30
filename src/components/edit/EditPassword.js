import React, { Component } from 'react';
import { Form, Button, Message} from 'semantic-ui-react';

import '../../styles/edit.css';
import '../../styles/button.css';

class EditPassword extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeModal: false,

      email_address: '',
      old_password: '',
      new_password: '',
      confirm_password: '',

      email_address_error: '',
      old_password_error: '',
      new_password_error: '',
      confirm_password_error: '',

      form_complete: '',
      form_error_field: '',
      prompt_message: '',
      prompt_header: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleOldPassChange = this.handleOldPassChange.bind(this);
    this.handleNewPassChange = this.handleNewPassChange.bind(this);
    this.handleConfirmPassChange = this.handleConfirmPassChange.bind(this);
  }

  handleEmailChange(e) {this.setState({email_address: e.target.value, email_address_error: false}); }
  handleOldPassChange(e) {this.setState({old_password: e.target.value, old_password_error: false}); }
  handleNewPassChange(e) {this.setState({new_password: e.target.value, new_password_error: false}); }
  handleConfirmPassChange(e) {this.setState({confirm_password: e.target.value, confirm_password_error: false}); }

  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});

    this.setState({email_address: ''});
    this.setState({old_password: ''});
    this.setState({new_password: ''});
    this.setState({confirm_password: ''});

    this.setState({email_address_error: ''});
    this.setState({old_password_error: ''});
    this.setState({new_password_error: ''});
    this.setState({confirm_password_error: ''});

    this.setState({prompt_header: ''});
    this.setState({prompt_message: ''});
    this.setState({form_complete: ''});
    this.setState({form_error_field: ''});
  }

  checkForm = () => {
    var error = false;

    if(this.state.email_address === ''){
      this.setState({email_address_error: true});
      error=true;
    }
    if(this.state.old_password === ''){
      this.setState({old_password_error: true});
      error=true;
    }
    if(this.state.confirm_password === ''){
      this.setState({confirm_password_error: true});
      error=true;
    }
    if(this.state.new_password === ''){
      this.setState({new_password_error: true});
      error=true;
    }

    if(error){
      this.setState({form_complete: false});
      this.setState({prompt_header: 'Incomplete Information'}); 
      this.setState({prompt_message: 'Please fill up all the fields.'});  
    }else{
      this.setState({form_complete: true});
      if(this.state.new_password !== this.state.confirm_password){
        this.setState({form_error_field: true});
        this.setState({prompt_header: 'Passwords do not match'});
        this.setState({prompt_message: 'Please re-type password.'});
      }else{
        this.setState({form_error_field: false});
        this.submitEdit();
        
      }
    }

  }

  submitEdit = () => {

        const info = JSON.stringify({email_address: this.state.email_address, old_password: this.state.old_password, new_password: this.state.new_password, confirm_password: this.state.confirm_password})
       
        fetch(`http://localhost:3001/v1/users/change_password/` + this.props.id_user,{
            headers: { 'Content-Type': 'application/json' },
            method: "PUT",
            body: info
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status===200){
            this.setState({activeModal: false})
            this.setState({email_address: ''});
            this.setState({old_password: ''});
            this.setState({new_password: ''});
            this.setState({confirm_password: ''});
          }else if(result.status===404){
            this.setState({form_error_field: true});
            this.setState({prompt_header: 'Account does not exist'});
            this.setState({prompt_message: 'Please enter a valid email address and password.'});
          }
        })
        .catch((e) => {
          console.log(e)
        })
  }

  render(){
    return(
    <div>
    <Button id='generic-button' onClick={this.onModal}> Change Password </Button>
        {this.state.activeModal && (
          <div className='edit-modal'>
            <Form className='forms'>

                <Form.Group widths='equal'>
                  <Form.Input required label='Email Address' placeholder='Email Address' onChange={this.handleEmailChange} error={this.state.email_address_error}/>
                  <Form.Input required label='Old Password' placeholder='Old Password' onChange={this.handleOldPassChange} error={this.state.old_password_error}/>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input required label='New Password' placeholder='New Password' onChange={this.handleNewPassChange} error={this.state.new_password_error}/>
                  <Form.Input required label='Confirm Password' placeholder='Confirm Password' onChange={this.handleConfirmPassChange} error={this.state.confirm_password_error}/>
                </Form.Group>

                {(this.state.form_complete===false || this.state.form_error_field===true) ?
                  <Message
                    header={this.state.prompt_header}
                    content={this.state.prompt_message}
                  />
                : ''} 

                <Button type='submit' onClick={this.checkForm} id='edit-button2'>Edit</Button>
                <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
            </Form>
          </div>)}
        </div>
    );
  }
}

export default EditPassword;