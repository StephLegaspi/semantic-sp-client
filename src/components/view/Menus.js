import React, { Component } from 'react';
import { Input, Button, Header, Image, Card } from 'semantic-ui-react'

import img_tree from '../../images/tree.jpg'
import '../../styles/view.css';

import ViewButton from '../button/ViewButton.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'
import SearchBar from '../searchBar/SearchBar.js'

class Menus extends Component {
	constructor(props){
		super(props);

		this.state = {}
		this.toMenusPortfolio = this. toMenusPortfolio.bind(this);
	}

	toMenusPortfolio(e) {
		this.props.history.push('/menu-portfolio');
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Food Menus'}/>
				<SearchBar titleHolder={'Search menu name..'}/>
      			
      			<div id='card-div2'>
				<Card.Group itemsPerRow={4}>
				<Card id='card2'>
				    <Card.Content>
				      <Card.Header>Menu 1 </Card.Header>
				    </Card.Content>
					<Image src={img_tree} rounded size='small' style={{marginLeft: '20%'}}/>
				    <Card.Content extra>
				      <ViewButton handleView={this.toMenusPortfolio}/>
				    </Card.Content>
				</Card>
				</Card.Group>
				</div>

				<Footer/>
			</div>
		);
	}

}

export default Menus;