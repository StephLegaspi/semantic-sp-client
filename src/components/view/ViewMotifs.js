import React, { Component } from 'react';
import { Input, Button, Header, Image, Card } from 'semantic-ui-react'

import img_tree from './tree.jpg'
import './assets/index.css';

class ViewMotifs extends Component {
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
				<Card id='card2'>
				    <Card.Content>
				      <Card.Header>Motif 1 </Card.Header>
				    </Card.Content>
					<Image src={img_tree} rounded size='small' style={{marginLeft: '20%'}}/>
				    <Card.Content extra>
				      <Button color='red' size='small' style={{padding: '8px', marginLeft: '57%'}}> View Details </Button>
				    </Card.Content>
				</Card>

				<Card id='card2'>
				    <Card.Content>
				      <Card.Header>Motif 1 </Card.Header>
				    </Card.Content>
					<Image src={img_tree} rounded size='small' style={{marginLeft: '20%'}}/>
				    <Card.Content extra>
				      <Button color='red' size='small' style={{padding: '8px', marginLeft: '57%'}}> View Details </Button>
				    </Card.Content>
				</Card>

				<Card id='card2'>
				    <Card.Content>
				      <Card.Header>Motif 1 </Card.Header>
				    </Card.Content>
					<Image src={img_tree} rounded size='small' style={{marginLeft: '20%'}}/>
				    <Card.Content extra>
				      <Button color='red' size='small' style={{padding: '8px', marginLeft: '57%'}}> View Details </Button>
				    </Card.Content>
				</Card>

				<Card id='card2'>
				    <Card.Content>
				      <Card.Header>Motif 1 </Card.Header>
				    </Card.Content>
					<Image src={img_tree} rounded size='small' style={{marginLeft: '20%'}}/>
				    <Card.Content extra>
				      <Button color='red' size='small' style={{padding: '8px', marginLeft: '57%'}}> View Details </Button>
				    </Card.Content>
				</Card>

				</Card.Group>
				</div>
			</div>
		);
	}

}

export default ViewMotifs;