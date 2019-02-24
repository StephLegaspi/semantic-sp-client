import React, { Component } from 'react';
import { Image, Card, Segment} from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import CardPackage from '../card/CardPackage.js'
import CardRequest from '../card/CardRequest.js'
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
		            <p className='header-font2' style={{marginTop: '29%'}}> For more than 10 years, we are committed in making our customers' dream events come true.  </p>
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
					    
					    <CardPackage/>
				        <CardRequest />

	  				</Card.Group>
				</div>

				<Footer/>
			</div>
		);
	}

}

export default Portfolio;