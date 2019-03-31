import React, { Component } from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

import local_storage from 'localStorage';

class EditRequest extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			status: this.props.data.status
		}

		this.handleStatusChange = this.handleStatusChange.bind(this);

		this.requestStatusOptions = [{ key: 'pending', value: 'Pending', text: 'Pending' }, { key: 'successful', value: 'Successful', text: 'Successful' }, { key: 'unsuccessful', value: 'Unsuccessful', text: 'Unsuccessful' } ]
	}

	handleStatusChange = (e, { value }) => {
	    this.setState({status: value});
	}


	onModal = () => {
		this.setState({activeModal: true});
	}

	cancel = () => {
		this.setState({activeModal: false});
	}

	submitEdit = () => {
		const id_session = JSON.parse(local_storage.getItem("user_data")).id;
        const request = JSON.stringify({status: this.state.status, session_id: id_session})
       
        fetch(`http://localhost:3001/v1/requests/` + this.props.data.id,{
            headers: { 'Content-Type': 'application/json' },
            method: "PUT",
            body: request
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status){
            this.props.handleUpdate()
            this.setState({activeModal: false})
          }
        })
        .catch((e) => {
          console.log(e)
        })
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
	                     <Dropdown placeholder='Request Status' defaultValue={this.props.data.status} selection options={this.requestStatusOptions} onChange={this.handleStatusChange}/>
	                </Form.Field>
	                <br/>
	                <br/>
	                <br/>
	                <br/>
				    <Button type='submit' onClick={this.submitEdit} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditRequest;