import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';

class CartButton extends Component{

	callView = () => {
		this.props.handleView();
	}

	render(){
		return(
			<div id='cart-button'> 
						<label class="ui icon button" style={{backgroundColor: 'transparent', color:'white'}}>
							<i class="big cart icon"></i>  
						</label>
      		</div>
		);
	}
}


export default CartButton;