import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';

class DeleteButton extends Component{

	callDelete = () => {
		this.props.handleDelete();
	}

	render(){
		return(
			<Button circular id='delete-button' onClick={this.callDelete}>
				<i class="trash large alternate icon"></i>
			</Button>
		);
	}
}


export default DeleteButton;