import React, { Component } from 'react';
import { Button, Form, Message, Segment } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'

import '../../styles/login.css';
import '../../styles/font.css';

import local_storage from 'localStorage';

class LoginCustomer extends Component {

  constructor(){
    super();

    this.state = {
      email: "",
      password: ""
    }
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChanged(e) { this.setState({email: e.target.value}); }
  handlePasswordChanged(e) { this.setState({password: e.target.value}); }

  handleSubmit(event) {
        const credentials = JSON.stringify({email_address: this.state.email, password: this.state.password})
       
        fetch(`http://localhost:3001/v1/auth/login/customer`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: credentials

        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            if(result.status===200){
              local_storage.setItem('user_data', JSON.stringify(result.data));
            }
        }).catch(function(err) {
            console.log(err)
        });
  }

  render() {
    return (
      <div>
      <HeaderBar headerTitle={'Login'}/>
      <div className='login-form'>
            <Form>
              <Segment id='login-form-style'>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.handleEmailChanged}/>
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.handlePasswordChanged}
                />

                <Button id='login-button' fluid size='large' onClick={this.handleSubmit}>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message id='message-style'>
              <a href='google.com'>Forgot Password?</a>
            </Message>
      </div>
      </div>
    );
  }
}

export default LoginCustomer
