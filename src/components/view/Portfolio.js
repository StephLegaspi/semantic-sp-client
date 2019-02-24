import React, { Component } from 'react';
import { Button, Image, Card, Icon, Segment} from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import '../../styles/homepage.css';
import '../../styles/button.css';
import '../../styles/font.css';

import img from '../../images/header2.jpg'
import sample_header from '../../images/header1.jpg'

class Portfolio extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				<Segment id='container'>
		         <HeaderBar headerTitle={'Portfolio'}/>
				 <Image size='large' src={sample_header} style={{ minWidth:'100%'}}/>
		          <div id='div-header'>
		            <p className='header-font2' style={{marginTop: '29%'}}> For more than 10 years, we are committed to making our customers' dream events come true.  </p>
		          </div>
		        </Segment>

				
				<p className='title-header-larger'> Weddings</p>
				<div id='card-pics'>
					<Card image={img} style={{width: '100%'}}/>
					<Card.Group itemsPerRow={2} >
					    <Card image={img}/>
					    <Card image={img} />
					    <Card image={img} />
					    <Card image={img} />
					    
	  				</Card.Group>
				</div>

				<p className='title-header-larger'> Debuts</p>
				<div id='card-pics'>
					<Card image={img} style={{width: '100%'}}/>
					<Card.Group itemsPerRow={2} >
					    <Card image={img}/>
					    <Card image={img} />
					    <Card image={img} />
					    <Card image={img} />
					    
	  				</Card.Group>
				</div>

				<p className='title-header-larger'> Others</p>
				<div id='card-pics'>
					<Card image={img} style={{width: '100%'}}/>
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

export default Portfolio;