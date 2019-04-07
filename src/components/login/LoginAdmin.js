import React, { Component } from 'react';
import { Button, Form, Header, Image, Message, Segment } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
import logo from '../../images/logo.jpg'
import '../../styles/login.css';
import '../../styles/font.css';

import local_storage from 'localStorage';

class LoginAdmin extends Component {

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

  toDashboard = () => {
    window.location.href='/dashboard'
  }

  toHomepage() {
    this.props.history.push('/');
  }

  componentDidMount() {
        const user = JSON.parse(local_storage.getItem("user_data"));

        if(user !== null){
          this.toHomepage();
        }
  }

  handleSubmit(event) {
        const credentials = JSON.stringify({email_address: this.state.email, password: this.state.password})

        fetch(`http://localhost:3001/v1/auth/login/admin`,{
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
              this.toDashboard();
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

                {(this.state.login_error===true) ?
                  <Message
                    header={this.state.prompt_header}
                    content={this.state.prompt_message}
                  />
                : ''}
                
              </Segment>
            </Form>
            <Message id='message-style'>
              <a href='/reset-password/admin'>Forgot Password?</a>
            </Message>
      </div>
      </div>
    );
  }
}

export default withRouter(LoginAdmin);
