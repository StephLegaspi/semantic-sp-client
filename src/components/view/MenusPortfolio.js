import React, { Component } from 'react';
import { Card, List} from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import CardPackage from '../card/CardPackage.js'
import CardRequest from '../card/CardRequest.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import '../../styles/button.css';
import '../../styles/font.css';


class MenusPortfolio extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				
				<HeaderBar headerTitle={'Menu 1'}/>
				<div id='card-group'>
					<Card.Group itemsPerRow={2} >
					    
					    <Card id='card-menu'>
				          <Card.Content>
				            <Card.Header className='label-font2'>Main Course</Card.Header>
				            <List style={{marginLeft: '35%'}}>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>Main Course</List.Content>
							    </List.Item>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>Main Course</List.Content>
							    </List.Item>
							  </List>
				          </Card.Content>
				        </Card>
				        <Card id='card-menu'>
				          <Card.Content>
				            <Card.Header className='label-font2'>Appetizer</Card.Header>
				            <List style={{marginLeft: '37%'}}>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>Appetizer</List.Content>
							    </List.Item>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>Appetizer</List.Content>
							    </List.Item>
							  </List>
				          </Card.Content>
				        </Card>
				        <Card id='card-menu'>
				          <Card.Content>
				            <Card.Header className='label-font2'>Dessert</Card.Header>
				            <List style={{marginLeft: '40%'}}>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>Dessert</List.Content>
							    </List.Item>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>Dessert</List.Content>
							    </List.Item>
							  </List>
				          </Card.Content>
				        </Card>
				        <Card id='card-menu'>
				          <Card.Content>
				            <Card.Header className='label-font2'>Soup</Card.Header>
				            <List style={{marginLeft: '40%'}}>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>Soup</List.Content>
							    </List.Item>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>Soup</List.Content>
							    </List.Item>
							  </List>
				          </Card.Content>
				        </Card>
				        <Card id='card-menu'>
				          <Card.Content>
				            <Card.Header className='label-font2'>Beverage</Card.Header>
				            <List style={{marginLeft: '37%'}}>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>Beverage</List.Content>
							    </List.Item>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>Beverage</List.Content>
							    </List.Item>
							  </List>
				          </Card.Content>
				        </Card>
				        <Card id='card-menu'>
				          <Card.Content>
				            <Card.Header className='label-font2'>Others</Card.Header>
				            <List style={{marginLeft: '39%'}}>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>Others</List.Content>
							    </List.Item>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>Others</List.Content>
							    </List.Item>
							  </List>
				          </Card.Content>
				        </Card>

					    <CardPackage/>
				        <CardRequest />
	  				</Card.Group>
				</div>

				<Footer/>
			</div>
		);
	}

}

export default MenusPortfolio;