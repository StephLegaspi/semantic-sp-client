import React, { Component } from 'react';
import { Form, Input, Button, TextArea } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditInventory extends Component {
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
	                    <label>Total Quantity</label>
	                    <Input placeholder='Total Quantity'/>
	                  </Form.Field>
	                  <Form.Field>
	                    <label>No. of Remaining Items</label>
	                    <Input placeholder='No. of Remaining Items'/>
	                  </Form.Field>
	                </Form.Group>

	                
	                <Form.Field width={8}>
	                    <label>Date of Stock Renewal</label>
	                    <Input placeholder='Date of Stock Renewal'/>
	                </Form.Field>
	                
				    <Button type='submit' onClick={this.editDone} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditInventory;