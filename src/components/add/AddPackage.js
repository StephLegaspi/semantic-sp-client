import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

import AddButton from '../button/AddButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

import local_storage from 'localStorage';

export default class AddPackage extends Component {

   constructor() {
      super();
      this.state = {
        activeModal: false,
        name: "",
        price: "",
        inclusion: "",

        name_error: '',
        price_error: '',
        inclusion_error: '',

        form_complete: '',
        prompt_message: '',
        prompt_header: ''
      }
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handlePriceChange = this.handlePriceChange.bind(this);
      this.handleInclusionChange = this.handleInclusionChange.bind(this);
  }

  handleNameChange(e) { this.setState({name: e.target.value, name_error: false}); }
  handlePriceChange(e) { this.setState({price: e.target.value, price_error: false}); }
  handleInclusionChange(e) { this.setState({inclusion: e.target.value, inclusion_error: false}); }


  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});

    this.setState({name: ''});
    this.setState({price: ''});
    this.setState({inclusion: ''});

    this.setState({name_error: ''});
    this.setState({price_error: ''});
    this.setState({inclusion_error: ''});

    this.setState({prompt_header: ''});
    this.setState({prompt_message: ''});
    this.setState({form_complete: ''});
  }

  checkForm = () => {
    var error = false;

    if(this.state.name === ''){
      this.setState({name_error: true});
      error=true;
    }
    if(this.state.price === ''){
      this.setState({price_error: true});
      error=true;
    }
    if(this.state.inclusion === ''){
      this.setState({inclusion_error: true});
      error=true;
    }

    if(error){
      this.setState({form_complete: false});
      this.setState({prompt_header: 'Incomplete Information'}); 
      this.setState({prompt_message: 'Please fill up all the required fields.'});  
    }else{
      this.setState({form_complete: true});
      this.handleSubmit();
      this.setState({name: ''});
      this.setState({price: ''});
      this.setState({inclusion: ''});
    }

  }

  handleSubmit = () => {
        const id_session = JSON.parse(local_storage.getItem("user_data")).id;
        const pkg = JSON.stringify({name: this.state.name, price: this.state.price, inclusion: this.state.inclusion, session_id: id_session})
       
        fetch(`http://localhost:3001/v1/packages`,{
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: pkg
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status){
            this.setState({activeModal: false})
            this.props.handleUpdate()
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
                  <Form.Input required label='Package Name' placeholder='Package Name' onChange={this.handleNameChange} error={this.state.name_error}/>
                  <Form.Input required label='Price' placeholder='Price' onChange={this.handlePriceChange} error={this.state.price_error}/>
                </Form.Group>

                <Form.TextArea required label='Inclusions' placeholder='e.g. Inclusion1, Inclusion2, Inclusion3' style={{ minHeight: 100 }}  onChange={this.handleInclusionChange} error={this.state.inclusion_error}/>

              {(this.state.form_complete===false) ?
                  <Message
                    header={this.state.prompt_header}
                    content={this.state.prompt_message}
                  />
                : ''}

              <Button type='submit' id='edit-button2' onClick={this.checkForm} method="POST">Add</Button>
              <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
          </Form>
          </div>)}
        </div>
    );
  }
}

