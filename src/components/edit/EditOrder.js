import React, { Component } from 'react';
import { Form, Input, Button, Dropdown } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditOrder extends Component {
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
	      		
					<Form.Field width={8}>
	                    <label>Delivery Status</label>
	                     <Dropdown placeholder='Delivery Status' defaultValue='pending' search selection options={this.deliveryStatusOptions} />
	                  </Form.Field>
	                
				    <Button type='submit' onClick={this.editDone} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditOrder;