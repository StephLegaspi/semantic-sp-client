import React, { Component } from 'react';
import { Button} from 'semantic-ui-react';

import '../../styles/button.css';

class ContactButton extends Component{

	callClick = () => {
		this.props.handleClicked();
	}

	render(){
		return(
			<Button circular icon='big envelope outline' size='big' id='footer-button1' onClick={this.callClick}/>
		);
	}
}


export default ContactButton;