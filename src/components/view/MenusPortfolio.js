import React, { Component } from 'react';
import { Input, Button, Header, Image, Card, Segment, Grid, Container, Icon, List} from 'semantic-ui-react'

import img from '../../images/food.jpg'
import '../../styles/view.css';
import '../../styles/button.css';

import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

class MenusPortfolio extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				
				<HeaderBar headerTitle={'Menu 1'}/>
				<div id='card-pics'>
					<Card image={img} style={{width: '100%'}}/>
					<Card.Group itemsPerRow={2} >
					    <Card image={img}/>
					    <Card image={img} />
					    <Card image={img} />
					    <Card image={img} />
					    
					    <Card id='card-menu'>
				          <Card.Content>
				            <Card.Header className='card-header'>Main Course</Card.Header>
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
				            <Card.Header className='card-header'>Appetizer</Card.Header>
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
				            <Card.Header className='card-header'>Dessert</Card.Header>
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
				            <Card.Header className='card-header'>Soup</Card.Header>
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
				            <Card.Header className='card-header'>Beverage</Card.Header>
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
				            <Card.Header className='card-header'>Others</Card.Header>
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

					    <Card id='card-request'>
				          <Card.Content>
				            <Card.Header className='card-header'>Browse through our catering packages and see what fits your needs and budget.</Card.Header>
				            <Button  size='small' id='card-button'> 
				            	<Icon name='gift' size='large'/>
				            View Packages </Button>
				          </Card.Content>
				        </Card>
				         <Card id='card-request'>
				          <Card.Content>
				            <Card.Header className='card-header'>Having trouble organizing and designing your event? Let us do the job for you.</Card.Header>
				            <Button  size='small' id='card-button'> 
				            	<Icon name='file text' size='large'/>
				            Request Package </Button>
				          </Card.Content>
				        </Card>
	  				</Card.Group>
				</div>

				<Footer/>
			</div>
		);
	}

}

export default MenusPortfolio;