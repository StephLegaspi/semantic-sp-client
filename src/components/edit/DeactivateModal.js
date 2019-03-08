import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import DeactivateButton from '../button/DeactivateButton.js'

import '../../styles/delete.css';
import '../../styles/button.css';

class DeactivateModal extends Component {
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

	submitEdit = () => {
       
        fetch(`http://localhost:3001/v1/administrators/deactivate/` + this.props.data_id,{
            headers: { 'Content-Type': 'application/json' },
            method: "PUT"
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
		<DeactivateButton handleDeactivate={this.onModal}/>
      	{this.state.activeModal && (
	      	<div className='delete-modal'>
	      		<div className='open-delete'>

					<h4> Are you sure you want to deactivate {this.props.data_id}? </h4>
	                <br/>
				    <Button type='submit' onClick={this.submitEdit} id='yes-button'>Yes</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>No</Button>
				</div>
	      	</div>)}
      	</div>
		);
	}
}

export default DeactivateModal;