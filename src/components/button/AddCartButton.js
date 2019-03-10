import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';

class AddCartButton extends Component{

	callClick = () => {
		this.props.handleAddtoCart();
	}

	render(){
		return(
			<Button class="ui labeled icon button" id='checkout-button' onClick={this.callClick}>
			              <i class="cart icon"></i>
			              Add to cart
			 </Button>
		);
	}
}


export default AddCartButton;