import React, { Component } from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditOrderRentalStatus extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
		}

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
	                    <label>Rental Status</label>
	                     <Dropdown placeholder='Rental Status' defaultValue='on-rent' search selection options={this.rentalStatusOptions} />
	                  </Form.Field>
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

export default EditOrderRentalStatus;