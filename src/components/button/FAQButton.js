import React, { Component } from 'react';
import { Button} from 'semantic-ui-react';

import '../../styles/button.css';

class FAQButton extends Component{

	callClick = () => {
		this.props.handleClicked();
	}

	render(){
		return(
			<Button circular icon='big question' size='big' id='footer-button2' onClick={this.callClick}/>
		);
	}
}


export default FAQButton;