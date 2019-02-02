import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';

class ModalButton extends Component{

	clickModal = () => {
		this.props.handleClickModal();
	}

	render(){
		return(
			<Button id='modal-button' onClick={this.clickModal}> View </Button>
		);
	}
}


export default ModalButton;