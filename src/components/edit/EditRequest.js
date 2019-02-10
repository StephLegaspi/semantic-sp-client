import React, { Component } from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditRequest extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
		}

		this.requestStatusOptions = [{ key: 'pending', value: 'pending', text: 'Pending' }, { key: 'success', value: 'success', text: 'Successful' }, { key: 'unsuccessful', value: 'unsuccessful', text: 'Unsuccessful' } ]
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
	                    <label>Request Status</label>
	                     <Dropdown placeholder='Request Status' defaultValue='pending' search selection options={this.requestStatusOptions} />
	                  </Form.Field>
	                
				    <Button type='submit' onClick={this.editDone} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditRequest;