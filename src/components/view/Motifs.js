import React, { Component } from 'react';
import { Image, Card } from 'semantic-ui-react'

import ViewButton from '../button/ViewButton.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'
import SearchBar from '../searchBar/SearchBar.js'

import '../../styles/view.css';
import img_tree from '../../images/tree.jpg'

class Motifs extends Component {
	constructor(props){
		super(props);

		this.state = {}

		this.toMotifsPortfolio = this.toMotifsPortfolio.bind(this);
	}

	toMotifsPortfolio(e) {
		this.props.history.push('/motif-portfolio');
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Event Motifs'}/>
				<SearchBar titleHolder={'Search motif name..'}/>
      			
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