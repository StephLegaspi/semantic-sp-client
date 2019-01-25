import React, { Component } from 'react';
import { Input, Button, Header, Image, Card } from 'semantic-ui-react'

import img_tree from './tree.jpg'
import './assets/index.css';

class ViewPackages extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
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
				<Card id='card'>
				    <Card.Content>
				      <Card.Header>Package 1 </Card.Header>
				      <Card.Description>P 10,000</Card.Description>
				    </Card.Content>
				    <Card.Content extra>
				      <Button color='red' size='small' style={{padding: '8px', marginLeft: '2.5%'}}> View Details </Button>
				      <Button color='red' size='small' style={{padding: '8px'}}> Request Package </Button>
				    </Card.Content>
				</Card>

				<Card id='card'>
				    <Card.Content>
				      <Card.Header>Package 1 </Card.Header>
				      <Card.Description>P 10,000</Card.Description>
				    </Card.Content>
				    <Card.Content extra>
				      <Button color='red' size='small' style={{padding: '8px', marginLeft: '2.5%'}}> View Details </Button>
				      <Button color='red' size='small' style={{padding: '8px'}}> Request Package </Button>
				    </Card.Content>
				</Card>

				<Card id='card'>
				    <Card.Content>
				      <Card.Header>Package 1 </Card.Header>
				      <Card.Description>P 10,000</Card.Description>
				    </Card.Content>
				    <Card.Content extra>
				      <Button color='red' size='small' style={{padding: '8px', marginLeft: '2.5%'}}> View Details </Button>
				      <Button color='red' size='small' style={{padding: '8px'}}> Request Package </Button>
				    </Card.Content>
				</Card>

				<Card id='card'>
				    <Card.Content>
				      <Card.Header>Package 1 </Card.Header>
				      <Card.Description>P 10,000</Card.Description>
				    </Card.Content>
				    <Card.Content extra>
				      <Button color='red' size='small' style={{padding: '8px', marginLeft: '2.5%'}}> View Details </Button>
				      <Button color='red' size='small' style={{padding: '8px'}}> Request Package </Button>
				    </Card.Content>
				</Card>
				
				<Card id='card'>
				    <Card.Content>
				      <Card.Header>Package 1 </Card.Header>
				      <Card.Description>P 10,000</Card.Description>
				    </Card.Content>
				    <Card.Content extra>
				      <Button color='red' size='small' style={{padding: '8px', marginLeft: '2.5%'}}> View Details </Button>
				      <Button color='red' size='small' style={{padding: '8px'}}> Request Package </Button>
				    </Card.Content>
				</Card>

				</Card.Group>
				</div>
			</div>
		);
	}

}

export default ViewPackages;