import React, { Component } from 'react';
import { Button, Form, Header, Image, Message, Segment } from 'semantic-ui-react'

import logo from '../../images/logo.jpg'
import '../../styles/login.css';
import '../../styles/font.css';

class LoginAdmin extends Component {

  constructor(){
    super();

    this.state = {
      email: "",
      password: ""
    }
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toDashboard = this.toDashboard.bind(this);
  }


  handleEmailChanged(e) { this.setState({email: e.target.value}); }
  handlePasswordChanged(e) { this.setState({password: e.target.value}); }

  toDashboard(e) {
    this.props.history.push('/dashboard');
  }

  handleSubmit(event) {
        const credentials = JSON.stringify({email_address: this.state.email, password: this.state.password})
       
        fetch(`http://localhost:3001/v1/auth/login/admin`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: credentials

        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            console.log("Success"); 
            this.props.history.push('/dashboard');   
        }).catch(function(err) {
            console.log(err)
        });
  }

  render() {
    return (
      <div>
      <div className='login-form'>
            <Header as='h2' id='font-blue' textAlign='center'>
             <Image circular src={logo} id='logo-login'/>
            </Header>
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
               <Button id='login-button' fluid size='large' onClick={this.handleSubmit} method="POST">
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

export default LoginAdmin;
