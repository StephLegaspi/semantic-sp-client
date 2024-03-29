import React, { Component } from 'react';
import { Button, Form, Message, Segment } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import Facebook from '../facebook/Facebook.js'

import '../../styles/login.css';
import '../../styles/font.css';

import local_storage from 'localStorage';

class LoginCustomer extends Component {

  constructor(){
    super();

    this.state = {
      email: "",
      password: "",

      login_error: '',
      prompt_message: '',
      prompt_header: ''
    }
    
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChanged(e) { this.setState({email: e.target.value}); }
  handlePasswordChanged(e) { this.setState({password: e.target.value}); }

  toHomePage = () => {
    window.location.href='/'
  }

  handleSubmit(event) {
        const credentials = JSON.stringify({email_address: this.state.email, password: this.state.password})

        fetch(`http://localhost:3001/v1/auth/login/customer`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: credentials
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status===200){
              local_storage.setItem('user_data', JSON.stringify(result.data));
              this.toHomePage();
          }else if(result.status===404){
            this.setState({login_error: true});
            this.setState({prompt_header: 'Invalid email address or password'});
            this.setState({prompt_message: 'The credentials you have entered do not match any account.'});
          }
        })
        .catch((e) => {
          console.log(e)
        })
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
                <div id='label'> OR </div>
                <Facebook/>

                {(this.state.login_error===true) ?
                  <Message
                    header={this.state.prompt_header}
                    content={this.state.prompt_message}
                  />
                : ''}

              </Segment>
            </Form>
            <Message id='message-style'>
              <a href='/reset-password/customer'>Forgot Password?</a>
            </Message>
      </div>
      </div>
    );
  }
}

export default LoginCustomer
