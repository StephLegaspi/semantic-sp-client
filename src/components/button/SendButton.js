import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';

class SendButton extends Component{

	callClick = () => {
		this.props.handleAddtoCart();
	}

	render(){
		return(
			<Button id='send-button'>
			    Send
			 </Button>
		);
	}
}


export default SendButton;