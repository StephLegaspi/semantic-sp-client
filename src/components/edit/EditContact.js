import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditContact extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			telephone_number: "",
			mobile_number: "",
			email_address: "",
			business_address: ""
		}
		this.handleTelephoneChange = this.handleTelephoneChange.bind(this);
		this.handleMobileChange = this.handleMobileChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleAddressChange = this.handleAddressChange.bind(this);
	}

	handleTelephoneChange(e) {this.setState({telephone_number: e.target.value}); }
	handleMobileChange(e) {this.setState({mobile_number: e.target.value}); }
	handleEmailChange(e) {this.setState({email_address: e.target.value}); }
	handleAddressChange(e) {this.setState({business_address: e.target.value}); }

	onModal = () => {
		this.getData();
		this.setState({activeModal: true});
	}

	cancel = () => {
		this.setState({activeModal: false});
	}

	getData = () => {
		this.setState({telephone_number: this.props.data.telephone_number})
		this.setState({mobile_number: this.props.data.mobile_number})
		this.setState({email_address: this.props.data.email_address})
		this.setState({business_address: this.props.data.business_address})
	}

	submitEdit = () => {

        const contact = JSON.stringify({telephone_number: this.state.telephone_number, mobile_number: this.state.mobile_number, email_address: this.state.email_address, business_address: this.state.business_address})
       
        fetch(`http://localhost:3001/v1/contact_details/`,{
            headers: { 'Content-Type': 'application/json' },
            method: "PUT",
            body: contact
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status){
            this.props.handleUpdate()
            this.setState({activeModal: false})
          }
          this.getData()
        })
        .catch((e) => {
          console.log(e)
        })
  }

	render(){
		return(
		<div>
		<EditButton handleEdit={this.onModal}/>
      	{this.state.activeModal && (
	      	<div className='edit-modal'>
	      		<Form className='forms'>
	      			<Form.Group widths='equal'>
						<Form.Field>
		                  <label>Telephone Number</label>
		                  <Input placeholder='Telephone Number' defaultValue={this.props.data.telephone_number} onChange={this.handleTelephoneChange}/>
		                </Form.Field>
		                <Form.Field>
		                  <label>Mobile Number</label>
		                  <Input placeholder='Mobile Number' defaultValue={this.props.data.mobile_number} onChange={this.handleMobileChange}/>
		                </Form.Field>
		            </Form.Group>
		            <Form.Group widths='equal'>
		                <Form.Field>
		                  <label>Email Address</label>
		                  <Input placeholder='Email Address' defaultValue={this.props.data.email_address} onChange={this.handleEmailChange}/>
		                </Form.Field>
		                <Form.Field>
		                  <label>Business Address</label>
		                  <Input placeholder='Business Address' defaultValue={this.props.data.business_address} onChange={this.handleAddressChange}/>
		                </Form.Field>
		            </Form.Group>

				    <Button type='submit' onClick={this.submitEdit} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditContact;