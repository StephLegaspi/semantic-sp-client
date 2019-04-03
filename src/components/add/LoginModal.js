import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

import '../../styles/add.css';
import '../../styles/button.css';

import local_storage from 'localStorage';

class LoginModal extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeModal: this.props.modalStatus,

      email: "",
      password: ""
    }

    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleEmailChanged(e) { this.setState({email: e.target.value}); }
  handlePasswordChanged(e) { this.setState({password: e.target.value}); }

  cancel = () => {
    this.setState({activeModal: false});
    this.props.cancelAction();
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
              this.setState({activeModal: false});
              this.props.changeSession();
          }
        })
        .catch((e) => {
          console.log(e)
        })
  }

  render(){
    return(
    <div>
        {this.state.activeModal && (
          <div className='add-modal'>

            <Form className='form-login'>
             
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
                <Button id='login-button2' fluid size='large' onClick={this.cancel} >Cancel</Button>
                
                <Form.Field>
                    <a href='http://localhost:3000/sign-up'> No account yet? Sign up here.</a>
                  </Form.Field>
            </Form>

          </div>)}
        </div>
    );
  }
}

export default LoginModal;