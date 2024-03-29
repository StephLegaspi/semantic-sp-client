import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';

class ShopButton extends Component{

	callClick = () => {
		this.props.handleView(this.props.data_id);
	}

	render(){
		return(
			<Button animated  id='view-button' onClick={this.callClick} >
						       		<Button.Content visible>View</Button.Content>
						       		 <Button.Content hidden>
				                       <i class="magnify icon"></i>
				                    </Button.Content>
			 </Button>
		);
	}
}


export default ShopButton;