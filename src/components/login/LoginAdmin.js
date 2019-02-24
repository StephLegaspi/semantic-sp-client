import React, { Component } from 'react';
import { Button, Form, Header, Image, Message, Segment } from 'semantic-ui-react'

import logo from '../../images/logo.jpg'
import '../../styles/login.css';
import '../../styles/font.css';

class LoginCustomer extends Component {

  render() {
    return (
      <div>
      <div className='login-form'>
            <Header as='h2' id='font-blue' textAlign='center'>
             <Image circular src={logo} id='logo-login'/>
            </Header>
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
              <a href='menus-table'>Forgot Password?</a>
            </Message>
      </div>
      </div>
    );
  }
}

export default LoginCustomer
