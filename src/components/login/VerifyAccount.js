import React, { Component } from 'react';
import { Button, Form, Message, Segment } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'

import '../../styles/login.css';

import local_storage from 'localStorage';

class VerifyAccount extends Component {

  constructor(){
    super();

    this.state = {
      verification_code: "",

      verification_error: '',
      prompt_header: '',
      prompt_message: ''
    }
    
    this.handleCodeChanged = this.handleCodeChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCodeChanged(e) { this.setState({verification_code: e.target.value}); }

  toHomePage = () => {
    window.location.href='/'
  }

  login = () => {
       
        fetch(`http://localhost:3001/v1/customers/email/` + this.props.match.params.email_address, {
            method: 'GET'
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status===200){
              local_storage.setItem('user_data', JSON.stringify(result.data[0]));
              this.toHomePage();
          }
        })
        .catch((e) => {
          console.log(e)
        })
  }


  handleSubmit(event) {
        const credentials = JSON.stringify({verification_code: this.state.verification_code})

        fetch(`http://localhost:3001/v1/auth/verify-account/` + this.props.match.params.email_address,{
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: credentials
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status===200){
            this.login();
          }else if(result.status===404){
            this.setState({verification_error: true});
            this.setState({prompt_header: "Error"});
            this.setState({prompt_message: "You have entered a wrong verification code."});
          }else{
            this.setState({verification_error: true});
            this.setState({prompt_header: "Error"});
            this.setState({prompt_message: "Please try again."});
          }
        })
        .catch((e) => {
          console.log(e)
        })
  }

  render() {
    return (
      <div>
      <HeaderBar headerTitle={'Confirm Account'}/>
      <div className='login-form'>
            <Form>
              <Segment id='login-form-style'>
                <p style={{textAlign: 'center'}}>
                  Please enter the verification code we sent on your email to confirm your account.
                </p>
                <Form.Input fluid  placeholder='Verification Code' onChange={this.handleCodeChanged}/>

                <Button id='login-button' fluid size='large' onClick={this.handleSubmit}>
                  Send
                </Button>
                
                {(this.state.verification_error===true) ?
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

export default VerifyAccount
