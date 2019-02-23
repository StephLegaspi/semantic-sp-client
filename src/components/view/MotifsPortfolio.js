import React, { Component } from 'react';
import { Button, Card, Icon, Image, Segment} from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import '../../styles/button.css';
import '../../styles/font.css';
import img from '../../images/header2.jpg'

class MotifsPortfolio extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				<Segment id='container-header'>
		          <HeaderBar headerTitle={'Motif 1'}/>
				  <Image size='large' src={img} style={{ minWidth:'100%'}}/>
		          <div id='desc-header'>
		            <p className='header-font2'> A blue-themed motif that comes with balloons of different arrangements, perfect for any kind of event.  </p>
		          </div>
		        </Segment>
				
				<div id='card-pics'>
					<Card.Group itemsPerRow={2} >
					    <Card image={img}/>
					    <Card image={img} />
					    <Card image={img} />
					    <Card image={img} />
					    <Card id='card-request'>
				          <Card.Content>
				            <Card.Header id='card-header'>Browse through our catering packages and see what fits your needs and budget.</Card.Header>
				            <Button  size='small' id='card-button'> 
				            	<Icon name='gift' size='large'/>
				            View Packages </Button>
				          </Card.Content>
				        </Card>
				         <Card id='card-request'>
				          <Card.Content>
				            <Card.Header id='card-header'>Having trouble organizing and designing your event? Let us do the job for you.</Card.Header>
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