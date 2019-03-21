import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

import '../../styles/add.css';
import '../../styles/button.css';

export default class AddOrder extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      activeModal: false,

      first_name: "",
      middle_name: "",
      last_name: "",
      email_address: "",
      contact_number: "",
      delivery_address: "",
      zip_code: "",

      fname_error: '',
      mname_error: '',
      lname_error: '',
      email_error: '',
      contact_error: '',
      delivery_address_error: '',
      zip_code_error: '',

      form_complete: '',
      prompt_message: '',
      prompt_header: ''      
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleMiddleNameChange = this.handleMiddleNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
    this.handleCartChange = this.handleCartChange.bind(this);
  }
 
  handleFirstNameChange(e) { this.setState({first_name: e.target.value, fname_error: false}); }
  handleMiddleNameChange(e) { this.setState({middle_name: e.target.value, mname_error: false}); }
  handleLastNameChange(e) { this.setState({last_name: e.target.value, lname_error: false}); }
  handleEmailChange(e) { this.setState({email_address: e.target.value, email_error: false}); }
  handleContactChange(e) { this.setState({contact_number: e.target.value, contact_error: false}); }
  handleAddressChange(e) { this.setState({delivery_address: e.target.value, delivery_address_error: false}); }
  handleZipCodeChange(e) { this.setState({zip_code: e.target.value, zip_code_error: false}); }
  handleCartChange(e) { this.setState({cart_id: e.target.value}); }


  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});
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
    if(this.state.delivery_address === ''){
      this.setState({delivery_address_error: true});
      error=true;
    }
    if(this.state.zip_code === ''){
      this.setState({zip_code_error: true});
      error=true;
    }

    if(error){
      this.setState({form_complete: false});
      this.setState({prompt_header: 'Incomplete Information'}); 
      this.setState({prompt_message: 'Please fill up all the required fields.'});  
    }else{
      this.setState({form_complete: true});
      this.handleSubmit();
      this.setState({first_name: ''});
      this.setState({middle_name: ''});
      this.setState({last_name: ''});
      this.setState({email_address: ''});
      this.setState({contact_number: ''});
      this.setState({delivery_address: ''});
      this.setState({zip_code: ''});
    }

  }

  handleSubmit = () => {
        const order = JSON.stringify({consignee_first_name: this.state.first_name, consignee_middle_name: this.state.middle_name, consignee_last_name: this.state.last_name, consignee_email: this.state.email_address, consignee_contact_number: this.state.contact_number, delivery_address: this.state.delivery_address, zip_code: this.state.zip_code, shopping_cart_id: this.props.id_cart, rental_duration: this.props.duration_rental})
       
        fetch(`http://localhost:3001/v1/orders/` + this.props.table_name,{
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: order
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status===200){
            this.setState({activeModal: false})
            this.props.updateCart();
          }
        })
        .catch((e) => {
          console.log(e)
        })
  }


  render(){
    return(
      <div > 
        <button style={{marginLeft: '34%'}} className="ui labeled icon button" id='checkout-button2' onClick={this.onModal}>
              <i className="cart icon"></i>
              Checkout
        </button>
        {this.state.activeModal && (
          <div className='add-modal'>
            <Form className='form-style-smaller'>
                  
                <Form.Group widths='equal'>   
                  <Form.Input required label='First name' placeholder='First name' onChange={this.handleFirstNameChange} error={this.state.fname_error}/>
                  <Form.Input required label='Middle name' placeholder='Middle name' onChange={this.handleMiddleNameChange} error={this.state.mname_error}/>
                  <Form.Input required label='Last name' placeholder='Last name' onChange={this.handleLastNameChange} error={this.state.lname_error}/>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input required label='Email Address' placeholder='Email Address' onChange={this.handleEmailChange} error={this.state.email_error}/>
                  <Form.Input required label='Contact Number' placeholder='Contact Number' onChange={this.handleContactChange} error={this.state.contact_error}/>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input required label='Delivery Address' placeholder='Delivery Address' onChange={this.handleAddressChange} error={this.state.delivery_address_error}/>
                  <Form.Input required label='Zip Code' placeholder='Zip Code' onChange={this.handleZipCodeChange} error={this.state.zip_code_error}/>
                </Form.Group>

              {(this.state.form_complete===false) ?
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

