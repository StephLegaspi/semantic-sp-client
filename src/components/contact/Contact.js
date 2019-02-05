import React, { Component } from 'react';
import { Icon, Input, Form, Segment, Grid, TextArea } from 'semantic-ui-react'

import '../../styles/contact.css';
import HeaderBar from '../headerBar/HeaderBar.js'
import SendButton from '../button/SendButton.js'
import Footer from '../footer/Footer.js'

class Contact extends Component {
	constructor(props){
		super(props);

		this.state = {}

		this.stateOptions = [ { key: 'all', value: 'all', text: 'All' }, { key: 'pending', value: 'pending', text: 'Pending' }, { key: 'on-delivery', value: 'on-delivery', text: 'On-delivery' }, { key: 'delivered', value: 'delivered', text: 'Delivered' } ]

	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Contact Us'}/>
				<div className='contact-div'>
					<Icon name='phone' size='big'/>
					<label> +63 949 881 2448 </label>
				</div>
				<div className='contact-div'>
					<Icon name='mobile alternate' size='big'/>
					<label> +63 949 881 2448 </label>
				</div>
				<div className='contact-div'>
					<Icon name='envelope' size='large'/>
                	<label> leirajane@gmail.com </label>
				</div>
				<div className='contact-div'>
					<Icon name='location arrow' size='big'/>
					<label> Pembo, Makati </label>
				</div>

				
				<div className='form-div'>
					<label> Do you have any inquiries? Send us a message. </label>
					<br></br>
					<Grid id='form-contact'>
			          <Grid.Column>
			            <Form size='large'>
			              <Segment stacked>

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

			              </Segment>
			            </Form>
			          </Grid.Column>
			        </Grid>
			    </div>
			  	
			  	<Footer/>
			</div>
		);
	}

}

export default Contact;