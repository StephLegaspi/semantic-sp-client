import React, { Component } from 'react';
import { Icon, Form, Message } from 'semantic-ui-react'

import '../../styles/contact.css';
import HeaderBar from '../headerBar/HeaderBar.js'
import SendButton from '../button/SendButton.js'
import PromptModal from '../infoModal/PromptModal.js'
import Footer from '../footer/Footer.js'

class Contact extends Component {
	constructor(props){
		super(props);

		this.state = {
			telephone_number: '',
			mobile_number: '',
			email_address: '',
			business_address: '',

			first_name: '',
		    middle_name: '',
		    last_name: '',
		    email_address2: '',
		    contact_number: '',
		    message: '',

		    fname_error: '',
      		lname_error: '',
      		email_error: '',
      		contact_error: '',
      		message_error: '',

      		form_complete: '',
      		form_error_field: '',
      		prompt_message: '',
      		prompt_header: '',

      		success: false,
      		loading: false
		}

		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    	this.handleMiddleNameChange = this.handleMiddleNameChange.bind(this);
    	this.handleLastNameChange = this.handleLastNameChange.bind(this);
    	this.handleEmailChange = this.handleEmailChange.bind(this);
    	this.handleContactChange = this.handleContactChange.bind(this);
    	this.handleMessageChange = this.handleMessageChange.bind(this);

	}

	handleFirstNameChange(e) { this.setState({first_name: e.target.value, fname_error: false}); }
  	handleMiddleNameChange(e) { this.setState({middle_name: e.target.value}); }
  	handleLastNameChange(e) { this.setState({last_name: e.target.value, lname_error: false}); }
  	handleEmailChange(e) { this.setState({email_address2: e.target.value, email_error: false}); }
  	handleContactChange(e) { this.setState({contact_number: e.target.value, contact_error: false}); }
  	handleMessageChange(e) { this.setState({message: e.target.value, message_error: false}); }

  	setSuccess = () => {
	    this.setState({success: false});
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/contact_details', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({telephone_number: result.data[0].telephone_number});
            self.setState({mobile_number: result.data[0].mobile_number});
            self.setState({email_address: result.data[0].email_address});
            self.setState({business_address: result.data[0].business_address});
        }).catch(err => {
        	console.log(err);
        })
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
	    if(this.state.email_address2 === ''){
	      this.setState({email_error: true});
	      error=true;
	    }
	    if(this.state.contact_number === ''){
	      this.setState({contact_error: true});
	      error=true;
	    }
	    if(this.state.message === ''){
	      this.setState({message_error: true});
	      error=true;
	    }


	    if(error){
	      this.setState({form_complete: false});
	      this.setState({prompt_header: 'Incomplete Information'}); 
	      this.setState({prompt_message: 'Please fill up all the required fields.'});  
	    }else{
	      this.setState({form_complete: true});
	      this.setState({form_error_field: false});
	      this.handleSubmit();
	      this.setState({loading: true});
	    }

	}

	handleSubmit = () => {
        const request = JSON.stringify({
            first_name: this.state.first_name, 
            middle_name: this.state.middle_name,
            last_name: this.state.last_name,
            email_address: this.state.email_address2,
            contact_number: this.state.contact_number,
            message: this.state.message
        })
       
        fetch(`http://localhost:3001/v1/inquiry`,{
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: request
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status === 200){
            console.log("Successfully sent inquiry");
            this.setState({first_name: ''});
            this.setState({middle_name: ''});
            this.setState({last_name: ''});
            this.setState({email_address2: ''});
            this.setState({message: ''});
            this.setState({contact_number: ''});

            this.setState({success: true});
            this.setState({loading: false});
          }else if(result.status===400){
            this.setState({form_error_field: true});
            this.setState({loading: false});
            this.setState({prompt_header: 'Invalid Email Address or Contact Number'});
            this.setState({prompt_message: 'Please enter a valid email or contact number.'});
          }
        })
        .catch((e) => {
          console.log(e)
        })
  }

	render() {
		return (
			<div>
				
				<HeaderBar headerTitle={'Contact Us'}/>

				<div className='contact-div-top'>
					<Icon name='phone' size='big'/>
					<label> {this.state.telephone_number} </label>
				</div>
				<div className='contact-div'>
					<Icon name='mobile alternate' size='big'/>
					<label> {this.state.mobile_number} </label>
				</div>
				<div className='contact-div'>
					<Icon name='envelope' size='large'/>
                	<label> {this.state.email_address} </label>
				</div>
				<div className='contact-div'>
					<Icon name='location arrow' size='big'/>
					<label> {this.state.business_address} </label>
				</div>
				
				<div className='form-div'>
					<label> Do you have any inquiries? Send us a message. </label>
					<br/> <br/>
					<div id='form-contact'>
			          
			            <Form>

			                <Form.Group widths='equal'>
			                  <Form.Input fluid required label='First name' placeholder='First name' value={this.state.first_name} onChange={this.handleFirstNameChange} error={this.state.fname_error} />
			                  <Form.Input fluid label='Middle name' placeholder='Middle name' value={this.state.middle_name} onChange={this.handleMiddleNameChange} />
			                  <Form.Input fluid required label='Last name' placeholder='Last name' value={this.state.last_name} onChange={this.handleLastNameChange} error={this.state.lname_error} />
			                </Form.Group>

			              	<Form.Group widths='equal'>
			                  <Form.Input fluid required label='Email Address' placeholder='Email Address' value={this.state.email_address2} onChange={this.handleEmailChange} error={this.state.email_error} />
			                  <Form.Input fluid required label='Contact Number' placeholder='Contact Number' value={this.state.contact_number} onChange={this.handleContactChange} error={this.state.contact_error} />
			                </Form.Group>

			                
			                <Form.TextArea required label='Message' placeholder='Message' value={this.state.message} onChange={this.handleMessageChange} style={{ minHeight: 100 }} error={this.state.message_error}/>

			                {(this.state.form_complete===false || this.state.form_error_field===true) ?
			                  <Message
			                    header={this.state.prompt_header}
			                    content={this.state.prompt_message}
			                  />
			                : ''}

			                <SendButton handleAdd={this.checkForm} isLoading={this.state.loading}/>
			                {(this.state.success) ? <PromptModal changePrompt={this.setSuccess} modalStatus={true} message={'Inquiry sent! We will get back to you as soon as we can.'}/> : '' }
			            </Form>
			          
			        </div>
			    </div>
			  	
			  	<Footer/>
			</div>
		);
	}

}

export default Contact;