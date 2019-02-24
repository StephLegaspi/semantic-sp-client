import React, { Component } from 'react';
import { Card, Image, Segment} from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import CardPackage from '../card/CardPackage.js'
import CardRequest from '../card/CardRequest.js'
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
					    
					    <CardPackage/>
				        <CardRequest />
	  				</Card.Group>
				</div>

				<Footer/>
			</div>
		);
	}

}

export default MotifsPortfolio;