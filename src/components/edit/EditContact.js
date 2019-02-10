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
		}
	}

	onModal = () => {
		this.setState({activeModal: true});
	}

	cancel = () => {
		this.setState({activeModal: false});
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
		                  <Input placeholder='Telephone Number'/>
		                </Form.Field>
		                <Form.Field>
		                  <label>Mobile Number</label>
		                  <Input placeholder='Mobile Number'/>
		                </Form.Field>
		            </Form.Group>
		            <Form.Group widths='equal'>
		                <Form.Field>
		                  <label>Email Address</label>
		                  <Input placeholder='Email Address'/>
		                </Form.Field>
		                <Form.Field>
		                  <label>Business Address</label>
		                  <Input placeholder='Business Address'/>
		                </Form.Field>
		            </Form.Group>

				    <Button type='submit' onClick={this.editDone} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditContact;