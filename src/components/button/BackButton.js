import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

import '../../styles/button.css';

class BackButton extends Component{

	callClick = () => {
		this.props.handleClick();
	}

	render(){
		return(
			<Button icon id='back-button' onClick={this.callClick}>
			    <Icon name='arrow left' />
			    	Go Back
			</Button>
		);
	}
}


export default BackButton;