import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/delete.css';
import '../../styles/button.css';

class DeleteModal extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: this.props.modalStatus,
		}
	}


	cancel = () => {
		this.setState({activeModal: false});
		this.props.changeSuccess();
	}

	render(){
		return(
		<div>
      	{this.state.activeModal && (
	      	<div className='delete-modal'>
	      		<div className='open-delete'>

					<h4> Request has been successfuly sent! </h4>
	                <br/>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Okay</Button>
				</div>
	      	</div>)}
      	</div>
		);
	}
}

export default DeleteModal;