import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';

class ViewButton extends Component{

	callView = () => {
		this.props.handleView();
	}

	render(){
		return(
			<Button id='view-button' onClick={this.callView}> View </Button>
		);
	}
}


export default ViewButton;