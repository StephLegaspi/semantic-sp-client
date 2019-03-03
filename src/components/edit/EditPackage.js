import React, { Component } from 'react';
import { Form, Input, Button, TextArea } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditPackage extends Component {
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
	                    <label>Package Name</label>
	                    <Input placeholder='Package Name'/>
	                  </Form.Field>
	                  <Form.Field>
	                    <label>Price</label>
	                    <Input placeholder='Price'/>
	                  </Form.Field>
	                </Form.Group>

	               <Form.Field>
	                  <label>Inclusions</label>
	                  <TextArea placeholder='e.g. Inclusion1, Inclusion2, Inclusion3' style={{ minHeight: 100 }} />
	                </Form.Field>
	                
				    <Button type='submit' onClick={this.editDone} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditPackage;