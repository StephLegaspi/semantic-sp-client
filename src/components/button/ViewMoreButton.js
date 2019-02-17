import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';

class ViewMoreButton extends Component{

	clickModal = () => {
		this.props.handleClickModal();
	}

	render(){
		return(
			<Button size='small' id='view-button'  onClick={this.clickModal}> View More </Button>
		);
	}
}


export default ViewMoreButton;