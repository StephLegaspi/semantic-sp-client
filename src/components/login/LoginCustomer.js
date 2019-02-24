import React, { Component } from 'react';
import { Button, Form, Message, Segment } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'

import '../../styles/login.css';
import '../../styles/font.css';

class LoginCustomer extends Component {

  render() {
    return (
      <div>
      <HeaderBar headerTitle={'Login'}/>
      <div className='login-form'>
            <Form>
              <Segment id='login-form-style'>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button id='login-button' fluid size='large'>
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
