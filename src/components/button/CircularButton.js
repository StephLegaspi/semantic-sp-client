import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import '../../styles/button.css';
import '../../styles/homepage.css';

class CircularButton extends Component{

	callClick = () => {
		this.props.handleClick(this.props.data.id);
	}

	render(){
		return(
			<Button animated circular id='circle-homepage' onClick={this.callClick} >
                    <Button.Content visible>{this.props.data.name}</Button.Content>
                    {this.props.category === 'package' ? <Button.Content visible className='label-font2'>P {this.props.data.price} per person</Button.Content> : ''}
                    
                    <Button.Content hidden className='label-font2'>
                      View
                    </Button.Content>
            </Button>
		);
	}
}


export default CircularButton;