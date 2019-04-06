import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Button, Form, Message } from 'semantic-ui-react'

import PromptModal from '../infoModal/PromptModal.js'

import '../../styles/add.css';
import '../../styles/button.css';

import local_storage from 'localStorage';

class AddOrder extends Component {

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
      lname_error: '',
      email_error: '',
      contact_error: '',
      delivery_address_error: '',
      zip_code_error: '',

      form_error_field: '',
      form_complete: '',
      prompt_message: '',
      prompt_header: '',

      success: false      
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
  handleMiddleNameChange(e) { this.setState({middle_name: e.target.value}); }
  handleLastNameChange(e) { this.setState({last_name: e.target.value, lname_error: false}); }
  handleEmailChange(e) { this.setState({email_address: e.target.value, email_error: false}); }
  handleContactChange(e) { this.setState({contact_number: e.target.value, contact_error: false}); }
  handleAddressChange(e) { this.setState({delivery_address: e.target.value, delivery_address_error: false}); }
  handleZipCodeChange(e) { this.setState({zip_code: e.target.value, zip_code_error: false}); }
  handleCartChange(e) { this.setState({cart_id: e.target.value}); }

  componentDidMount() {
        const user_session = JSON.parse(local_storage.getItem("user_data")).id;

        fetch(`http://localhost:3001/v1/customers/profile/` + user_session,{
            method: "GET"
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status===200){
            this.setState({delivery_address: result.data[0].address});
            this.setState({zip_code: result.data[0].zip_code});

            this.setState({first_name: result.data[0].first_name});
            this.setState({middle_name: result.data[0].middle_name});
            this.setState({last_name: result.data[0].last_name});
            this.setState({email_address: result.data[0].email_address});
            this.setState({contact_number: result.data[0].contact_number});
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
  
  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});

    this.setState({fname_error: ''});
    this.setState({lname_error: ''});
    this.setState({email_error: ''});
    this.setState({contact_error: ''});
    this.setState({delivery_address_error: ''});
    this.setState({zip_code_error: ''});

    this.setState({prompt_header: ''});
    this.setState({prompt_message: ''});
    this.setState({form_complete: ''});
    this.setState({form_error_field: ''});
  }

  setSuccess = () => {
      this.setState({success: false});
      this.setState({activeModal: false});
      this.props.history.push('/shop/' + this.props.route);
  }

  checkForm = () => {
    var error = false;

    if(this.state.first_name === ''){
      this.setState({fname_error: true});
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
    }

  }

  handleSubmit = () => {
        const id_session = JSON.parse(local_storage.getItem("user_data")).id;
        const order = JSON.stringify({consignee_first_name: this.state.first_name, consignee_middle_name: this.state.middle_name, consignee_last_name: this.state.last_name, consignee_email: this.state.email_address, consignee_contact_number: this.state.contact_number, delivery_address: this.state.delivery_address, zip_code: this.state.zip_code, shopping_cart_id: this.props.id_cart, rental_duration: this.props.duration_rental, session_id: id_session})
       
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
            this.setState({success: true});
            this.setState({first_name: ''});
            this.setState({middle_name: ''});
            this.setState({last_name: ''});
            this.setState({email_address: ''});
            this.setState({contact_number: ''});
            this.setState({delivery_address: ''});
            this.setState({zip_code: ''});
          }else if(result.status===400){
            this.setState({form_error_field: true});
            this.setState({prompt_header: 'Invalid Email Address or Contact Number'});
            this.setState({prompt_message: 'Please enter a valid email or contact number.'});
          }
        })
        .catch((e) => {
          console.log(e)
        })
  }


  render(){
    return(
      <div > 
        <button style={{marginLeft: '34%'}} className="ui labeled icon button" id='checkout-button2' onClick={this.onModal} disabled={this.props.button_status}>
              <i className="cart icon"></i>
              Checkout
        </button>
        {this.state.activeModal && (
          <div className='add-modal'>
            <Form className='form-style-smaller'>
                  
                <Form.Group widths='equal'>   
                  <Form.Input required label='First name' placeholder='First name' onChange={this.handleFirstNameChange} defaultValue={this.state.first_name}  error={this.state.fname_error}/>
                  <Form.Input label='Middle name' placeholder='Middle name' onChange={this.handleMiddleNameChange} defaultValue={this.state.middle_name}/>
                  <Form.Input required label='Last name' placeholder='Last name' onChange={this.handleLastNameChange} defaultValue={this.state.last_name} error={this.state.lname_error}/>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input required label='Email Address' placeholder='Email Address' onChange={this.handleEmailChange} defaultValue={this.state.email_address} error={this.state.email_error}/>
                  <Form.Input required label='Contact Number' placeholder='Contact Number' onChange={this.handleContactChange} defaultValue={this.state.contact_number} error={this.state.contact_error}/>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input required label='Delivery Address' placeholder='Delivery Address' onChange={this.handleAddressChange} defaultValue={this.state.delivery_address} error={this.state.delivery_address_error}/>
                  <Form.Input required label='Zip Code' placeholder='Zip Code' onChange={this.handleZipCodeChange} defaultValue={this.state.zip_code} error={this.state.zip_code_error}/>
                </Form.Group>

              {(this.state.form_complete===false || this.state.form_error_field===true) ?
                  <Message
                    header={this.state.prompt_header}
                    content={this.state.prompt_message}
                  />
                : ''}


              <Button type='submit' onClick={this.checkForm} id='edit-button2'>Add</Button>
              <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
              <div>
              {this.state.success ? <PromptModal changePrompt={this.setSuccess} modalStatus={true} message={'Order has been successfuly placed!'}/> : ''}
              </div>
          </Form>
          </div>)}
      </div>
    );
  }
}

export default withRouter(AddOrder);
