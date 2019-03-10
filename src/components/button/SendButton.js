import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';

class SendButton extends Component{

	callClick = () => {
		this.props.handleAdd();
	}

	render(){
		return(
			<Button id='send-button' onClick={this.callClick}>
			    Send
			 </Button>
		);
	}
}


export default SendButton;