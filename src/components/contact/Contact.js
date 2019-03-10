import React, { Component } from 'react';
import { Icon, Input, Form, TextArea } from 'semantic-ui-react'

import '../../styles/contact.css';
import HeaderBar from '../headerBar/HeaderBar.js'
import SendButton from '../button/SendButton.js'
import Footer from '../footer/Footer.js'

class Contact extends Component {
	constructor(props){
		super(props);

		this.state = {
			telephone_number: '',
			mobile_number: '',
			email_address: '',
			business_address: ''
		}

		this.stateOptions = [ { key: 'all', value: 'all', text: 'All' }, { key: 'pending', value: 'pending', text: 'Pending' }, { key: 'on-delivery', value: 'on-delivery', text: 'On-delivery' }, { key: 'delivered', value: 'delivered', text: 'Delivered' } ]

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
			          
			            <Form size='large'>

			                <Form.Group widths='equal'>
			                  <Form.Field>
			                    <label>First name</label>
			                    <Input placeholder='First name'/>
			                  </Form.Field>
			                  <Form.Field>
			                    <label>Middle name</label>
			                    <Input placeholder='Middle name'/>
			                  </Form.Field>
			                  <Form.Field>
			                   <label>Last name</label>
			                    <Input placeholder='Last name'/>
			                  </Form.Field>
			                </Form.Group>

			              	<Form.Group widths='equal'>
			                  <Form.Field>
			                    <label>Email Address</label>
			                    <Input placeholder='Email Address'/>
			                  </Form.Field>
			                  <Form.Field>
			                    <label>Contact Number</label>
			                    <Input placeholder='Contact Number'/>
			                  </Form.Field>
			                </Form.Group>

			                <Form.Field>
			                  <label>Message</label>
			                  <TextArea placeholder='Message' style={{ minHeight: 100 }} />
			                </Form.Field>

			                <SendButton/>
			            </Form>
			          
			        </div>
			    </div>
			  	
			  	<Footer/>
			</div>
		);
	}

}

export default Contact;