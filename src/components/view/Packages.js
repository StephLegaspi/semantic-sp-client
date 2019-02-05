import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

import ViewButton from '../button/ViewButton.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'
import SearchBar from '../searchBar/SearchBar.js'

import '../../styles/view.css';

class Packages extends Component {
	constructor(props){
		super(props);

		this.state = {}
		this.toPackageInclusion = this.toPackageInclusion.bind(this);
	}

	toPackageInclusion(e) {
		this.props.history.push('/package-inclusion');
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
					    	<ViewButton handleView={this.toPackageInclusion}/>
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