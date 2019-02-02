import React, { Component } from 'react';
import { Input, Button, Header, Image, Card } from 'semantic-ui-react'

import img_tree from '../../images/tree.jpg'
import '../../styles/view.css';

import MotifsPortfolio from './MotifsPortfolio.js'
import ViewButton from '../button/ViewButton.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

class Motifs extends Component {
	constructor(props){
		super(props);

		this.state = {
			redirect: false
		}

		this.toMotifsPortfolio = this. toMotifsPortfolio.bind(this);
	}

	toMotifsPortfolio(e) {
		this.props.history.push('/motifs-portfolio');
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Event Motifs'}/>
				<div id='search-bar'>
					<Input style={{width: '40%'}} type='text' placeholder='Search user name.. ' action>
					    <input />
					    <label class="ui icon button" style={{backgroundColor: 'red', color:'white'}}>
							<i class="large search icon" style={{paddingRight: '5px', width:'20px'}}></i>  
						</label>
					</Input>
				</div>
      			
      			<div id='card-div2'>
				<Card.Group itemsPerRow={4}>
				<Card id='card2'>
				    <Card.Content>
				      <Card.Header>Motif 1 </Card.Header>
				    </Card.Content>
					<Image src={img_tree} rounded size='small' style={{marginLeft: '20%'}}/>
				    <Card.Content extra>
				    	<ViewButton handleView={this.toMotifsPortfolio}/>
				    </Card.Content>
				</Card>
				</Card.Group>
				</div>

				<Footer/>
			</div>
		);
	}

}

export default Motifs;