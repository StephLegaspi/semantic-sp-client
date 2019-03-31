import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

import local_storage from 'localStorage';

class EditContact extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			telephone_number: "",
			mobile_number: "",
			email_address: "",
			business_address: "",

			telephone_number_error: false,
    		mobile_number_error: false,
    		email_address_error: false,
    		business_address_error: false,

	        form_complete: '',
	        prompt_message: '',
	        prompt_header: ''
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

		this.setState({telephone_number_error: ''});
	    this.setState({mobile_number_error: ''});
	    this.setState({email_address_error: ''});
	    this.setState({business_address_error: ''});

	    this.setState({form_complete: ''});
	    this.setState({prompt_header: ''});
    	this.setState({prompt_message: ''});
	}

	getData = () => {
		this.setState({telephone_number: this.props.data.telephone_number})
		this.setState({mobile_number: this.props.data.mobile_number})
		this.setState({email_address: this.props.data.email_address})
		this.setState({business_address: this.props.data.business_address})
	}

	checkForm = () => {
	    var error = false;

	    if(this.state.telephone_number === ''){
	      this.setState({telephone_number_error: true});
	      error=true;
	    }
	    if(this.state.mobile_number === ''){
	      this.setState({mobile_number_error: true});
	      error=true;
	    }
	    if(this.state.email_address === ''){
	      this.setState({email_address_error: true});
	      error=true;
	    }
	    if(this.state.business_address === ''){
	      this.setState({business_address_error: true});
	      error=true;
	    }

	    if(error){
	      this.setState({form_complete: false});
	      this.setState({prompt_header: 'Incomplete Information'}); 
	      this.setState({prompt_message: 'Please fill up all the fields.'});  
	    }else{
	      this.setState({form_complete: true});
	      this.submitEdit();
	      this.setState({telephone_number: ''});
	      this.setState({mobile_number: ''});
	      this.setState({email_address: ''});
	      this.setState({business_address: ''});

	      this.setState({telephone_number_error: ''});
	      this.setState({mobile_number_error: ''});
	      this.setState({email_address_error: ''});
	      this.setState({business_address_error: ''});
	    }

	}

	submitEdit = () => {
		const id_session = JSON.parse(local_storage.getItem("user_data")).id;

        const contact = JSON.stringify({telephone_number: this.state.telephone_number, mobile_number: this.state.mobile_number, email_address: this.state.email_address, business_address: this.state.business_address, session_id: id_session})
       
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
		                <Form.Input label='Telephone Number' placeholder='Telephone Number' defaultValue={this.props.data.telephone_number} onChange={this.handleTelephoneChange} error={this.state.telephone_number_error}/>
		                <Form.Input label='Mobile Number' placeholder='Mobile Number' defaultValue={this.props.data.mobile_number} onChange={this.handleMobileChange} error={this.state.mobile_number_error}/>
		            </Form.Group>

		            <Form.Group widths='equal'>
		                <Form.Input label='Email Address' placeholder='Email Address' defaultValue={this.props.data.email_address} onChange={this.handleEmailChange} error={this.state.email_address_error}/>
		                 <Form.Input label='Business Address' placeholder='Business Address' defaultValue={this.props.data.business_address} onChange={this.handleAddressChange} error={this.state.business_address_error}/>
		            </Form.Group>

		            {(this.state.form_complete===false) ?
	                  <Message
	                    header={this.state.prompt_header}
	                    content={this.state.prompt_message}
	                  />
	                : ''}

				    <Button type='submit' onClick={this.checkForm} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditContact;