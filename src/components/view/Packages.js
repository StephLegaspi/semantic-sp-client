import React, { Component } from 'react';
import { Input, Button, Header, Image, Card, Container} from 'semantic-ui-react'

import img_tree from '../../images/tree.jpg'
import '../../styles/view.css';

import ViewButton from '../button/ViewButton.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'
import SearchBar from '../searchBar/SearchBar.js'

class Packages extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Catering Packages'}/>
				<SearchBar titleHolder={'Search package name..'}/>
      			
      			<div id='card-div2'>
					<Card.Group itemsPerRow={4}>
					<Card id='card'>
					    <Card.Content>
					      <Card.Header>Package 1 </Card.Header>
					      <Card.Description>P 10,000</Card.Description>
					    </Card.Content>
					    <Card.Content extra>
					    	<ViewButton />
					    </Card.Content>
					</Card>
					<Card id='card'>
					    <Card.Content>
					      <Card.Header>Package 1 </Card.Header>
					      <Card.Description>P 10,000</Card.Description>
					    </Card.Content>
					    <Card.Content extra>
					    	<ViewButton />
					    </Card.Content>
					</Card>
					<Card id='card'>
					    <Card.Content>
					      <Card.Header>Package 1 </Card.Header>
					      <Card.Description>P 10,000</Card.Description>
					    </Card.Content>
					    <Card.Content extra>
					    	<ViewButton />
					    </Card.Content>
					</Card>
					<Card id='card'>
					    <Card.Content>
					      <Card.Header>Package 1 </Card.Header>
					      <Card.Description>P 10,000</Card.Description>
					    </Card.Content>
					    <Card.Content extra>
					    	<ViewButton />
					    </Card.Content>
					</Card>
					<Card id='card'>
					    <Card.Content>
					      <Card.Header>Package 1 </Card.Header>
					      <Card.Description>P 10,000</Card.Description>
					    </Card.Content>
					    <Card.Content extra>
					    	<ViewButton />
					    </Card.Content>
					</Card>
					</Card.Group>
				</div>

				<br></br>

				<Footer/>
				
			</div>
		);
	}

}

export default Packages;