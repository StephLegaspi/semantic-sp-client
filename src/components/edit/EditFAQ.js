import React, { Component } from 'react';
import { Form, Button, TextArea } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditFAQ extends Component {
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
					<Form.Field>
	                    <label>Question</label>
	                    <TextArea placeholder='Question' style={{ minHeight: 100 }} />
	                  </Form.Field>
	                  <Form.Field>
	                    <label>Answer</label>
	                    <TextArea placeholder='Answer' style={{ minHeight: 100 }} />
	                  </Form.Field>

				    <Button type='submit' onClick={this.editDone} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditFAQ;