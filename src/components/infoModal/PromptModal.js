import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/delete.css';
import '../../styles/button.css';

class PromptModal extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: this.props.modalStatus,
		}
	}


	cancel = () => {
		this.setState({activeModal: false});
		this.props.changePrompt();
	}

	render(){
		return(
		<div>
      	{this.state.activeModal && (
	      	<div className='delete-modal'>
	      		<div className='open-delete'>

					<h4> {this.props.message} </h4>
	                <br/>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Okay</Button>
				</div>
	      	</div>)}
      	</div>
		);
	}
}

export default PromptModal;