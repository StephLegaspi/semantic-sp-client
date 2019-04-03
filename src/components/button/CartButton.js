import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

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
			<Button icon id='cart-button'  onClick={this.callClick} disabled={this.props.button_status}>
			    <Icon name='big cart icon' />
			</Button>

		);
	}
}


export default CartButton;