import React, { Component } from 'react';
import { Button} from 'semantic-ui-react';

import '../../styles/button.css';

class RequestButton extends Component{

	callClick = () => {
		this.props.handleClicked();
	}

	render(){
		return(
			<Button circular icon='big file text' size='big' id='footer-button2' onClick={this.callClick}/>
		);
	}
}


export default RequestButton;