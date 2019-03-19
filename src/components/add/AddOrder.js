import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react'

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
      zip_code: ""
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
 
  handleFirstNameChange(e) { this.setState({first_name: e.target.value}); }
  handleMiddleNameChange(e) { this.setState({middle_name: e.target.value}); }
  handleLastNameChange(e) { this.setState({last_name: e.target.value}); }
  handleEmailChange(e) { this.setState({email_address: e.target.value}); }
  handleContactChange(e) { this.setState({contact_number: e.target.value}); }
  handleAddressChange(e) { this.setState({delivery_address: e.target.value}); }
  handleZipCodeChange(e) { this.setState({zip_code: e.target.value}); }
  handleCartChange(e) { this.setState({cart_id: e.target.value}); }


  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});
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
                  <Form.Field>
                    <label>First name</label>
                    <Input placeholder='First name' onChange={this.handleFirstNameChange}/>
                  </Form.Field>

                  <Form.Field>
                    <label>Middle name</label>
                    <Input placeholder='Middle name' onChange={this.handleMiddleNameChange}/>
                  </Form.Field>

                  <Form.Field>
                   <label>Last name</label>
                    <Input placeholder='Last name' onChange={this.handleLastNameChange}/>
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Email Address</label>
                    <Input placeholder='Email Address' onChange={this.handleEmailChange}/>
                  </Form.Field>

                  <Form.Field>
                    <label>Contact Number</label>
                    <Input placeholder='Contact Number' onChange={this.handleContactChange}/>
                  </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Delivery Address</label>
                    <Input placeholder='Delivery Address' onChange={this.handleAddressChange}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Zip Code</label>
                    <Input placeholder='Zip Code' onChange={this.handleZipCodeChange}/>
                  </Form.Field>
                </Form.Group>

              <Button type='submit' onClick={this.handleSubmit} id='edit-button2'>Add</Button>
              <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
          </Form>
          </div>)}
      </div>
    );
  }
}

