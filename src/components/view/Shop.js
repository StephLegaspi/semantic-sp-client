import React, { Component } from 'react';
import { Input, Button, Header, Image, Card, Dropdown, Menu, Container } from 'semantic-ui-react'
import AddCartButton from '../button/AddCartButton.js'

import img_tree from '../../images/tree.jpg'
import logo from '../../images/logo.jpg'
import '../../styles/view.css';

class ViewUsers extends Component {
	constructor(props){
		super(props);

		this.state = {}
		this.stateOptions = [ { key: '1', value: '1', text: 'All' }, { key: '2', value: '2', text: 'Table' }, { key: '3', value: '3', text: 'Three' } ]
	}

	render() {
		return (
			<div>
				<div id='bar'>  
					<div id='search-bar2'>
					<Input style={{width: '500px'}} type='text' placeholder='Search product name.. ' action>
					    <input />
					    <label class="ui icon button" style={{backgroundColor: 'orange', color:'white'}}>
							<i class="large search icon" style={{paddingRight: '5px', width:'20px'}}></i>  
						</label>
					</Input>
					</div>

					<div id='cart-button'> 
						<label class="ui icon button" style={{backgroundColor: 'transparent', color:'white'}}>
							<i class="big cart icon"></i>  
						</label>
      				</div>
      			</div>
				
				<div class="ui fluid segment" id='upper-div4'>  
					<label>
					  Product Category: {' '}
					  <Dropdown
					    inline
					    options={this.stateOptions}
					    defaultValue='1'
					  />
					</label>
      			</div>
      			
      			<div id='card-div'>
				<Card.Group itemsPerRow={4}>
				<Card id='card2'>
					<Card.Content>
				      <Card.Header>Stephanie Legaspi </Card.Header>
				      <Card.Description >P 30.00 /pc</Card.Description>
				    </Card.Content>
				    <Image src={img_tree} rounded size='small' style={{marginLeft: '20%'}} />
				    <Card.Content extra>
				      <AddCartButton />
				    </Card.Content>
				</Card>

				</Card.Group>
				</div>
			</div>
		);
	}

}

export default ViewUsers;