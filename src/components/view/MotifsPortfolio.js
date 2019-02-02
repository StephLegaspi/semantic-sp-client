import React, { Component } from 'react';
import { Input, Button, Header, Image, Card} from 'semantic-ui-react'

import img from '../../images/header2.jpg'
import '../../styles/view.css';
import '../../styles/button.css';

import HeaderBar from '../headerBar/HeaderBar.js'

class MotifsPortfolio extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				
				<HeaderBar headerTitle={'Motif 1'}/>
				<div id='card-pics'>
					<Card image={img} style={{width: '100%'}}/>
					<Card.Group itemsPerRow={2}>
					    <Card image={img} />
					    <Card image={img} />
					    <Card image={img} />
					    <Card image={img} />
	  				</Card.Group>

	  				<Card id='card-request'>
			          <Card.Content>
			            <Card.Header>Event motif is included in the catering package.</Card.Header>
			            <Button > View Packages </Button>
			            <Button > Request Package </Button>
			          </Card.Content>
			        </Card>
				</div>
			</div>
		);
	}

}

export default MotifsPortfolio;