import React, { Component } from 'react';
import { Button, Header, Image, Card, Icon} from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import '../../styles/button.css';
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
				<HeaderBar headerTitle={'Portfolio'}/>
				<Image size='large' src={sample_header} style={{ minWidth:'100%'}}/>
				<p className='title-header'> Weddings</p>
				<div id='card-pics'>
					<Card image={img} style={{width: '100%'}}/>
					<Card.Group itemsPerRow={2} >
					    <Card image={img}/>
					    <Card image={img} />
					    <Card image={img} />
					    <Card image={img} />
					    
	  				</Card.Group>
				</div>

				<p className='title-header'> Debuts</p>
				<div id='card-pics'>
					<Card image={img} style={{width: '100%'}}/>
					<Card.Group itemsPerRow={2} >
					    <Card image={img}/>
					    <Card image={img} />
					    <Card image={img} />
					    <Card image={img} />
					    
	  				</Card.Group>
				</div>

				<p className='title-header'> Others</p>
				<div id='card-pics'>
					<Card image={img} style={{width: '100%'}}/>
					<Card.Group itemsPerRow={2} >
					    <Card image={img}/>
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

export default Portfolio;