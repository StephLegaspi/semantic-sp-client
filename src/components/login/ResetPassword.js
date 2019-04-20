import React, { Component } from 'react';
import { Button, Form, Message, Segment } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'

import '../../styles/login.css';

import local_storage from 'localStorage';

class ResetPassword extends Component {

  constructor(){
    super();

    this.state = {
      email_address: "",

      reset_error: '',
      loading: false
    }
    
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChanged(e) { this.setState({email_address: e.target.value}); }

  toLogin = () => {
    this.setState({reset_error: false});
    window.location.href='/login/customer';
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
        this.setState({loading: true});
        fetch(`http://localhost:3001/v1/auth/reset-password/` + this.state.email_address,{
            method: 'GET'
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status===200){
            this.toLogin();
          }else if(result.status===404){
            this.setState({loading: false});
            this.setState({reset_error: true});
            this.setState({prompt_header: 'Email address not found'});
            this.setState({prompt_message: 'The email address you have entered do not match any account.'});
          }else{
            this.setState({loading: false});
            this.setState({reset_error: true});
            this.setState({prompt_header: 'Error'});
            this.setState({prompt_message: 'Failed to send a new password on your email. Please try again.'});
          }
        })
        .catch((e) => {
          console.log(e)
        })
  }

  render() {
    return (
      <div>
      <HeaderBar headerTitle={'Reset Password'}/>
      <div className='login-form'>
            <Form>
              <Segment id='login-form-style'>
                <p style={{textAlign: 'center'}}>
                  We will send an auto-generated password on your email.
                </p>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.handleEmailChanged}/>

                <Button id='login-button' fluid size='large' onClick={this.handleSubmit} loading={this.state.loading} disabled={this.state.loading}>
                  Reset Password
                </Button>
                
                {(this.state.reset_error===true) ?
                  <Message
                    header={this.state.prompt_header}
                    content={this.state.prompt_message}
                  />
                : ''}

              </Segment>
            </Form>
      </div>
      </div>
    );
  }
}

export default ResetPassword
