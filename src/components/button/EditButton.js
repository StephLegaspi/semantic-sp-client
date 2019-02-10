import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';

class EditButton extends Component{

	callEdit = () => {
		this.props.handleEdit();
	}

	render(){
		return(
			<Button circular id='edit-button' onClick={this.callEdit}>
				<i class="large edit icon"></i>
			</Button>
		);
	}
}


export default EditButton;