import React, { Component } from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditOrderRental extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
		}

		this.deliveryStatusOptions = [{ key: 'pending', value: 'pending', text: 'Pending' }, { key: 'on-delivery', value: 'on-delivery', text: 'On-delivery' }, { key: 'delivered', value: 'delivered', text: 'Delivered' } ]
		this.rentalStatusOptions = [ { key: 'on-rent', value: 'on-rent', text: 'On-rent' }, { key: 'returned', value: 'returned', text: 'Returned' }]
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
	                    <label>Delivery Status</label>
	                     <Dropdown placeholder='Delivery Status' defaultValue='pending' search selection options={this.deliveryStatusOptions} />
	                  </Form.Field>
	                  <Form.Field>
	                    <label>Rental Status</label>
	                     <Dropdown placeholder='Rental Status' defaultValue='on-rent' search selection options={this.rentalStatusOptions} />
	                  </Form.Field>
	                </Form.Group>
	                <br/>
	                <br/>
	                <br/>
	                <br/>
				    <Button type='submit' onClick={this.editDone} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditOrderRental;