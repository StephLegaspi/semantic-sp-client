import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditInventory extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			date: ''
		}
	}

	handleChange = (event, {name, value}) => {
	    if (this.state.hasOwnProperty(name)) {
	      this.setState({ [name]: value });
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
	                    <label>Date of Stock Renewal</label>
	                    <DateInput
	                      name="date"
	                      placeholder="Event Date"
	                      value={this.state.date}
	                      iconPosition="left"
	                      onChange={this.handleChange}
	                    />
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

export default EditInventory;