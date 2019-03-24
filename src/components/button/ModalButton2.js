import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';

class ModalButton extends Component{

	clickModal = () => {
		this.props.handleClickModal(this.props.data_id);
	}

	render(){
		return(
			<Button id='modal-button2' onClick={this.clickModal}> View </Button>
		);
	}
}


export default ModalButton;