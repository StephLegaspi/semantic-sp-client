import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import DeleteButton from '../button/DeleteButton.js'
import PromptModal from '../infoModal/PromptModal.js'

import '../../styles/delete.css';
import '../../styles/button.css';

import local_storage from 'localStorage';

class DeleteModal extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			success: ''
		}
	}

	onModal = () => {
		this.setState({activeModal: true});
	}

	cancel = () => {
		this.setState({activeModal: false});
	}

	setSuccess = () => {
	    this.setState({success: ''});
	    this.cancel();
	 }


	deleteData = () => {
		const id_session = JSON.parse(local_storage.getItem("user_data")).id;
		const data = JSON.stringify({session_id: id_session});

    	fetch(`http://localhost:3001/v1/`+ this.props.table_name + `/` + this.props.data_id,{
		      headers: { 'Content-Type': 'application/json' },
		      method: "DELETE",
		      body: data
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				if(result.status===200){
					console.log("Successfully deleted data");
					this.props.handleUpdate();
					this.setState({activeModal: false});
				}else if(result.status===500){
					this.setState({success: false});
				}
			})
			.catch((e) => {
				console.log(e)
			})
    }

	render(){
		return(
		<div>
		<DeleteButton handleDelete={this.onModal} buttonStatus={this.props.statusButton}/>
      	{this.state.activeModal && (
	      	<div className='delete-modal'>
	      		<div className='open-delete'>

					<h4> Are you sure you want to delete this? </h4>
	                <br/>
				    <Button type='submit' onClick={this.deleteData} id='yes-button'>Yes</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>No</Button>

				    {(this.state.success===false) ? <PromptModal changePrompt={this.setSuccess} modalStatus={true} message={'You cannot delete this.'}/> : '' }
				</div>
	      	</div>)}
      	</div>
		);
	}
}

export default DeleteModal;