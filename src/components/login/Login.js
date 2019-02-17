import React from 'react'
import { Button, Form, Header, Image, Message, Segment } from 'semantic-ui-react'

import logo from '../../images/logo.jpg'
import '../../styles/login.css';
import '../../styles/font.css';

const Login = () => (
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
          <a>Forgot Password?</a>
        </Message>
  </div>
)

export default Login
