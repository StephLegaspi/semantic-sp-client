import React, { Component } from 'react';
import { Input, Button, Header, Image, Card } from 'semantic-ui-react'

import img from '../homepage/header2.jpg'
import './assets/index.css';

class MotifsPortfolio extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				<div id='bar'>
					<h1 id='bar-title'> Motif 1</h1>
				</div>
				<div id='card-pics'>
					<Card color='red' image={img} style={{width: '100%'}}/>
					<Card.Group itemsPerRow={2}>
					    <Card image={img} />
					    <Card image={img} />
					    <Card image={img} />
					    <Card image={img} />
	  				</Card.Group>

	  				<Card id='card-request'>
			          <Card.Content>
			            <Card.Header>Event motif is included in the catering package.</Card.Header>
			            <Button id='checkout-button'> View Packages </Button>
			            <Button id='checkout-button'> Request Package </Button>
			          </Card.Content>
			        </Card>
				</div>
			</div>
		);
	}

}

export default MotifsPortfolio;