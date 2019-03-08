import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import ActivateButton from '../button/ActivateButton.js'

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

	render(){
		return(
		<div>
		<ActivateButton handleDeactivate={this.onModal}/>
      	{this.state.activeModal && (
	      	<div className='delete-modal'>
	      		<div className='open-delete'>

					<h4> Are you sure you want to activate this? </h4>
	                <br/>
				    <Button type='submit'  id='yes-button'>Yes</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>No</Button>
				</div>
	      	</div>)}
      	</div>
		);
	}
}

export default DeactivateModal;