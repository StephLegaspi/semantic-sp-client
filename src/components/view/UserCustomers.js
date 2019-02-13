import React, { Component } from 'react';
import { Button, Image, Card } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import CustomerProfile from '../infoModal/CustomerProfile.js'

import '../../styles/view.css';
import img_tree from '../../images/tree.jpg'

class UserCustomers extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Customers'}/>
				<SearchBarTable titleHolder={'Search customer name..'}/>

      			<div id='card-div'>
				<Card.Group itemsPerRow={4}>
				<Card id='card'>
				    <Image src={img_tree} rounded size='small' />
				    <Card.Content>
				      <Card.Header>Stephanie Legaspi </Card.Header>
				      <Card.Meta>10066165</Card.Meta>
				      <Card.Description>sylegaspi@up.edu.ph</Card.Description>
				      <Card.Description>09498812448</Card.Description>
				    </Card.Content>
				    <Card.Content extra>
				      <CustomerProfile />
				    </Card.Content>
				</Card>

			
				</Card.Group>
				</div>
			</div>
		);
	}

}

export default UserCustomers;