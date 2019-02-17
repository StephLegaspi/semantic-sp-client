import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';

class DeactivateButton extends Component{

	callDeactivate = () => {
		this.props.handleDeactivate();
	}

	render(){
		return(
			<Button id='generic-button' onClick={this.callDeactivate}>
				Deactivate
			</Button>
		);
	}
}


export default DeactivateButton;