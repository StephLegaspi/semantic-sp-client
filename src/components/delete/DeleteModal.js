import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import DeleteButton from '../button/DeleteButton.js'

import '../../styles/delete.css';
import '../../styles/button.css';

class DeleteModal extends Component {
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


	deleteData = () => {
    	fetch(`http://localhost:3001/v1/`+ this.props.table_name + `/` + this.props.data_id,{
		      method: "DELETE"
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				if(result.status){
					console.log("Successfully deleted data");
				}
				this.setState({activeModal: false});
				this.props.handleUpdate();
			})
			.catch((e) => {
				console.log(e)
			})
    }

	render(){
		return(
		<div>
		<DeleteButton handleDelete={this.onModal}/>
      	{this.state.activeModal && (
	      	<div className='delete-modal'>
	      		<div className='open-delete'>

					<h4> Are you sure you want to delete this? </h4>
	                <br/>
				    <Button type='submit' onClick={this.deleteData} id='yes-button'>Yes</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>No</Button>
				</div>
	      	</div>)}
      	</div>
		);
	}
}

export default DeleteModal;