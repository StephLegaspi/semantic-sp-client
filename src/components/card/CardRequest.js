import React, { Component } from 'react';
import { Button, Icon, Header } from 'semantic-ui-react'

import '../../styles/card.css';
import '../../styles/button.css';
import '../../styles/font.css';


class CardRequest extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div id='card-request'>
					<div id='icon-holder'>
				 		<Icon name='file text' size='massive'/>
				 	</div>
				    <Header id='card-header'>Having trouble organizing and designing your event? Let us do the job for you.</Header>
				    <Button  size='small' id='card-button'> 
				     	<Icon name='file text' size='large'/>
				        Request Package 
				    </Button>
			</div>
			
		);
	}

}

export default CardRequest;