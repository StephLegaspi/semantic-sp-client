import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';

class ActivateButton extends Component{

	callActivate = () => {
		this.props.handleActivate();
	}

	render(){
		return(
			<Button id='generic-button' onClick={this.callActivate}>
				Activate
			</Button>
		);
	}
}


export default ActivateButton;