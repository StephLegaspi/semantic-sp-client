import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';

class DeactivateButton extends Component{

	callDeactivate = () => {
		this.props.handleDeactivate();
	}

	render(){
		return(
			<Button circular id='deactivate-button' onClick={this.callDeactivate}>
				<i class="large ban icon"></i>
			</Button>
		);
	}
}


export default DeactivateButton;