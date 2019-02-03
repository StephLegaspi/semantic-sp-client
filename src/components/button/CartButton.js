import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';

class CartButton extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}

	}

	callClick = () => {
		this.props.handleClick();
	}

	render(){
		return(
			
			<label class="ui icon button" id='cart-button'  onClick={this.callClick}>
				<i class="big cart icon"></i>  
			</label>

		);
	}
}


export default CartButton;