import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';

class AddButton extends Component{

	callAdd = () => {
		this.props.handleAdd();
	}

	render(){
		return(
			<div id='add-button'>  
					<Button circular icon='add' size='big' style={{backgroundColor: 'orange', color: 'white'}}/>
      		</div>
		);
	}
}


export default AddButton;