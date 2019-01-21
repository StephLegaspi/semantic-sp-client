import React, { Component } from 'react';
import { Input, Button, Header, Image, Card } from 'semantic-ui-react'

import img_tree from './tree.jpg'
import './assets/index.css';

class ViewUsers extends Component {
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

				
				<div class="ui fluid segment" id='upper-div1'>
      				<label> Type of user: </label>
      				<Button id='upper-button'> Admin</Button>
      				<Button id='upper-button'> Customer</Button>
      			</div>
      			
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
				      <Button color='red' size='small' style={{padding: '8px'}}> View Profile </Button>
				    </Card.Content>
				</Card>

				<Card id='card'>
				    <Image src={img_tree} rounded size='small' />
				    <Card.Content>
				      <Card.Header>Stephanie Legaspi </Card.Header>
				      <Card.Meta>10066165</Card.Meta>
				      <Card.Description>sylegaspi@up.edu.ph</Card.Description>
				      <Card.Description>09498812448</Card.Description>
				    </Card.Content>
				    <Card.Content extra>
				      <Button color='red' size='small' style={{padding: '8px'}}> View Profile </Button>
				    </Card.Content>
				</Card>

				<Card id='card'>
				    <Image src={img_tree} rounded size='small' />
				    <Card.Content>
				      <Card.Header>Stephanie Legaspi </Card.Header>
				      <Card.Meta>10066165</Card.Meta>
				      <Card.Description>sylegaspi@up.edu.ph</Card.Description>
				      <Card.Description>09498812448</Card.Description>
				    </Card.Content>
				    <Card.Content extra>
				      <Button color='red' size='small' style={{padding: '8px'}}> View Profile </Button>
				    </Card.Content>
				</Card>

				<Card id='card'>
				    <Image src={img_tree} rounded size='small' />
				    <Card.Content>
				      <Card.Header>Stephanie Legaspi </Card.Header>
				      <Card.Meta>10066165</Card.Meta>
				      <Card.Description>sylegaspi@up.edu.ph</Card.Description>
				      <Card.Description>09498812448</Card.Description>
				    </Card.Content>
				    <Card.Content extra>
				      <Button color='red' size='small' style={{padding: '8px'}}> View Profile </Button>
				    </Card.Content>
				</Card>

				<Card id='card'>
				    <Image src={img_tree} rounded size='small' />
				    <Card.Content>
				      <Card.Header>Stephanie Legaspi </Card.Header>
				      <Card.Meta>10066165</Card.Meta>
				      <Card.Description>sylegaspi@up.edu.ph</Card.Description>
				      <Card.Description>09498812448</Card.Description>
				    </Card.Content>
				    <Card.Content extra>
				      <Button color='red' size='small' style={{padding: '8px'}}> View Profile </Button>
				    </Card.Content>
				</Card>

				</Card.Group>
				</div>
			</div>
		);
	}

}

export default ViewUsers;