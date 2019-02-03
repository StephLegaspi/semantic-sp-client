import React, { Component } from 'react';
import { Input, Button, Header, Image, Card, Segment, Grid, Container, Icon} from 'semantic-ui-react'

import img from '../../images/header2.jpg'
import '../../styles/view.css';
import '../../styles/button.css';

import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

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
					    <Card id='card-request'>
				          <Card.Content>
				            <Card.Header className='card-header'>Browse through our catering packages and see what fits your needs and budget.</Card.Header>
				            <Button  size='small' id='card-button'> 
				            	<Icon name='gift' size='large'/>
				            View Packages </Button>
				          </Card.Content>
				        </Card>
				         <Card id='card-request'>
				          <Card.Content>
				            <Card.Header className='card-header'>Having trouble organizing and designing your event? Let us do the job for you.</Card.Header>
				            <Button  size='small' id='card-button'> 
				            	<Icon name='file text' size='large'/>
				            Request Package </Button>
				          </Card.Content>
				        </Card>
	  				</Card.Group>
				</div>

				<Footer/>
			</div>
		);
	}

}

export default MotifsPortfolio;