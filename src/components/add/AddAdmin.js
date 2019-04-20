import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

import AddButton from '../button/AddButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

import local_storage from 'localStorage';
const passwordValidator = require('password-validator');

export default class AddAdmin extends Component {

   constructor() {
      super();
      this.state = {
        pass_schema: new passwordValidator(),
        activeModal: false,
        first_name: "",
        middle_name: "",
        last_name: "",
        email_address: "",
        password: "",
        contact_number: "",
        repeat_password: '',
        image: '',

        fname_error: '',
        mname_error: '',
        lname_error: '',
        email_error: '',
        contact_error: '',
        password_error: '',
        repeatpass_error: '',
        image_error: '',

        form_complete: '',
        form_error_field: '',
        prompt_message: '',
        prompt_header: ''
      }

      this.state.pass_schema.is().min(8);
      this.state.pass_schema.has().uppercase();

      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleMiddleNameChange = this.handleMiddleNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleContactChange = this.handleContactChange.bind(this);
      this.handleRepeatPassChange = this.handleRepeatPassChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleFirstNameChange(e) { this.setState({first_name: e.target.value, fname_error: false}); }
  handleMiddleNameChange(e) { this.setState({middle_name: e.target.value, mname_error: false}); }
  handleLastNameChange(e) { this.setState({last_name: e.target.value, lname_error: false}); }
  handleEmailChange(e) { this.setState({email_address: e.target.value, email_error: false}); }
  handlePasswordChange(e) { this.setState({password: e.target.value, password_error: false}); }
  handleContactChange(e) { this.setState({contact_number: e.target.value, contact_error: false}); }
  handleRepeatPassChange(e) { this.setState({repeat_password: e.target.value, repeatpass_error: false}); }
  handleImageChange(e) {this.setState({image: e.target.files[0], image_error:false});}

  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});

    this.setState({first_name: ''});
    this.setState({middle_name: ''});
    this.setState({last_name: ''});
    this.setState({email_address: ''});
    this.setState({contact_number: ''});
    this.setState({password: ''});
    this.setState({repeat_password: ''});
    this.setState({image: ''});

    this.setState({fname_error: ''});
    this.setState({mname_error: ''});
    this.setState({lname_error: ''});
    this.setState({email_error: ''});
    this.setState({contact_error: ''});
    this.setState({password_error: ''});
    this.setState({repeatpass_error: ''});
    this.setState({image_error: ''});

    this.setState({prompt_header: ''});
    this.setState({prompt_message: ''});
    this.setState({form_complete: ''});
    this.setState({form_error_field: ''});

  }

  checkForm = () => {
    var error = false;

    if(this.state.first_name === ''){
      this.setState({fname_error: true});
      error=true;
    }
    if(this.state.middle_name === ''){
      this.setState({mname_error: true});
      error=true;
    }
    if(this.state.last_name === ''){
      this.setState({lname_error: true});
      error=true;
    }
    if(this.state.email_address === ''){
      this.setState({email_error: true});
      error=true;
    }
    if(this.state.contact_number === ''){
      this.setState({contact_error: true});
      error=true;
    }
    if(this.state.password === ''){
      this.setState({password_error: true});
      error=true;
    }
    if(this.state.repeat_password === ''){
      this.setState({repeatpass_error: true});
      error=true;
    }
    if(this.state.image === ''){
      this.setState({image_error: true});
      error=true;
    }

    if(error){
      this.setState({form_complete: false});
      this.setState({prompt_header: 'Incomplete Information'}); 
      this.setState({prompt_message: 'Please fill up all the fields.'});  
    }
    else{
      this.setState({form_complete: true});
      if(this.state.password !== this.state.repeat_password){
        this.setState({form_error_field: true});
        this.setState({prompt_header: 'Passwords do not match'});
        this.setState({prompt_message: 'Please re-type password.'});
      }else if(!this.state.pass_schema.validate(this.state.password)){
        this.setState({form_error_field: true});
        this.setState({prompt_header: 'Weak Password'});
        this.setState({prompt_message: 'Please enter a password that contains atleast 8 characters and atleast 1 uppercase letter.'});
      }else{
        this.setState({form_error_field: false});
        this.handleSubmit();
        
      }
    }

    

  }

  handleSubmit = () => {
        const id_session = JSON.parse(local_storage.getItem("user_data")).id;

        let formData = new FormData();
        formData.set('enctype','multipart/form-data') 

        formData.append('first_name', this.state.first_name);
        formData.append('middle_name', this.state.middle_name);
        formData.append('last_name', this.state.last_name);
        formData.append('email_address', this.state.email_address);
        formData.append('contact_number', this.state.contact_number);
        formData.append('password', this.state.password);
        formData.append('image', this.state.image);
        formData.append('session_id', id_session);
       
        fetch(`http://localhost:3001/v1/administrators`,{
            method: "POST",
            body: formData
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status===200){
            this.setState({activeModal: false});
            this.props.handleUpdate();
            this.setState({first_name: ''});
            this.setState({middle_name: ''});
            this.setState({last_name: ''});
            this.setState({email_address: ''});
            this.setState({contact_number: ''});
            this.setState({password: ''});
            this.setState({repeat_password: ''});
            this.setState({image: ''});
          }else if(result.status===400){
            this.setState({form_error_field: true});
            this.setState({prompt_header: 'Invalid Email Address or Contact Number'});
            this.setState({prompt_message: 'Please enter a valid email or contact number.'});
          }else if(result.status===406){
            this.setState({form_error_field: true});
            this.setState({prompt_header: 'Email Address already has an account'});
            this.setState({prompt_message: 'Please enter a different valid email address.'});
          }
        })
        .catch((e) => {
          console.log(e)
        })
  }

  render(){
    return(
      <div>
    <AddButton handleAdd={this.onModal}/>
        {this.state.activeModal && (
          <div className='add-modal'>
            <Form className='form-style-smaller'>
                  
                <Form.Group widths='equal'>
                  <Form.Input label='First name' placeholder='First name' onChange={this.handleFirstNameChange} error={this.state.fname_error}/>
                  <Form.Input label='Middle name' placeholder='Middle name' onChange={this.handleMiddleNameChange} error={this.state.mname_error}/>
                  <Form.Input label='Last name' placeholder='Last name' onChange={this.handleLastNameChange} error={this.state.lname_error}/>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input label='Contact Number' placeholder='Contact Number' onChange={this.handleContactChange} error={this.state.contact_error}/>
                  <Form.Input label='Email Address' placeholder='Email Address' onChange={this.handleEmailChange} error={this.state.email_error}/>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input type='password' label='Password' placeholder='Password' onChange={this.handlePasswordChange} error={this.state.password_error}/>
                  <Form.Input type='password' label='Repeat Password' placeholder='Repeat Password' onChange={this.handleRepeatPassChange} error={this.state.repeatpass_error}/>
                </Form.Group>

                <Form.Field>
                  <label> Password must contain atleast 8 characters and atleast 1 uppercase letter.</label>
                </Form.Field>

                <Form.Group inline>
                    <label>Admin Image: </label>
                    <Form.Field className="relative" error={this.state.image_error}>
                        <input name='image' type="file" className="absolute" onChange={this.handleImageChange} id='embedpollfileinput'/>
                        <div className="absolute2"> 
                          <label for="embedpollfileinput" className="ui button" style={{height: '37px', width:'104px', paddingTop: '10px', paddingRight: '17px'}}> 
                            <i class="ui upload icon"></i>   
                             Upload
                          </label>
                        </div>
                    </Form.Field>
                </Form.Group>   

              {(this.state.form_complete===false || this.state.form_error_field===true) ?
                  <Message
                    header={this.state.prompt_header}
                    content={this.state.prompt_message}
                  />
                : ''}

              <Button type='submit' onClick={this.checkForm} id='edit-button2'>Add</Button>
              <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
          </Form>
          </div>)}
        </div>
    );
  }
}

