import React, { Component } from 'react';
import { Card, List} from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'

import '../../styles/view.css';
import '../../styles/button.css';
import '../../styles/font.css';


class MenusPortfolio extends Component {
	constructor(props){
		super(props);

		this.state = {
			main_course_arr: [],
			appetizer_arr: [],
			dessert_arr: [],
			soup_arr: [],
			beverage_arr: [],
			others_arr: [],

			menu_name: ''
		}
	}

	componentDidMount() {
        let self = this;
    
        fetch('http://localhost:3001/v1/food_menus/main_course/' + self.props.match.params.id ,{
            method: 'GET'
	        }).then(function(response) {
	            if (response.status >= 400) {
	                throw new Error("Bad response from server");
	            }
	            return response.json();
	        }).then(function(result) {
	            self.setState({main_course_arr: result.data});
	        }).catch(err => {
	        	console.log(err);
	    })

	    fetch('http://localhost:3001/v1/food_menus/appetizer/' + self.props.match.params.id ,{
            method: 'GET'
	        }).then(function(response) {
	            if (response.status >= 400) {
	                throw new Error("Bad response from server");
	            }
	            return response.json();
	        }).then(function(result) {
	            self.setState({appetizer_arr: result.data});
	        }).catch(err => {
	        	console.log(err);
	    })

	    fetch('http://localhost:3001/v1/food_menus/dessert/' + self.props.match.params.id ,{
            method: 'GET'
	        }).then(function(response) {
	            if (response.status >= 400) {
	                throw new Error("Bad response from server");
	            }
	            return response.json();
	        }).then(function(result) {
	            self.setState({dessert_arr: result.data});
	        }).catch(err => {
	        	console.log(err);
	    })

	    fetch('http://localhost:3001/v1/food_menus/soup/' + self.props.match.params.id ,{
            method: 'GET'
	        }).then(function(response) {
	            if (response.status >= 400) {
	                throw new Error("Bad response from server");
	            }
	            return response.json();
	        }).then(function(result) {
	            self.setState({soup_arr: result.data});
	        }).catch(err => {
	        	console.log(err);
	    })

	    fetch('http://localhost:3001/v1/food_menus/beverage/' + self.props.match.params.id ,{
            method: 'GET'
	        }).then(function(response) {
	            if (response.status >= 400) {
	                throw new Error("Bad response from server");
	            }
	            return response.json();
	        }).then(function(result) {
	            self.setState({beverage_arr: result.data});
	        }).catch(err => {
	        	console.log(err);
	    })

	    fetch('http://localhost:3001/v1/food_menus/others/' + self.props.match.params.id ,{
            method: 'GET'
	        }).then(function(response) {
	            if (response.status >= 400) {
	                throw new Error("Bad response from server");
	            }
	            return response.json();
	        }).then(function(result) {
	            self.setState({others_arr: result.data});
	        }).catch(err => {
	        	console.log(err);
	    })

	    fetch('http://localhost:3001/v1/food_menus/' + self.props.match.params.id ,{
	            method: 'GET'
	        }).then(function(response) {
	            if (response.status >= 400) {
	                throw new Error("Bad response from server");
	            }
	            return response.json();
	        }).then(function(result) {
	            self.setState({menu_name: result.data[0].name});
	        }).catch(err => {
	        	console.log(err);
	    })
	}

	render() {
		return (
			<div>
				
				<HeaderBar headerTitle={this.state.menu_name}/>

				<div id='card-group'>
					<Card.Group itemsPerRow={2} >				    
					    <Card id='card-menu'>
				          <Card.Content>
				            <Card.Header className='label-font2'>Main Course</Card.Header>
				            {this.state.main_course_arr.map(main =>
				            <List>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>{main.inclusion}</List.Content>
							    </List.Item>
							</List>
							)}
				          </Card.Content>
				        </Card>

				        <Card id='card-menu'>
				          <Card.Content>
				            <Card.Header className='label-font2'>Appetizer</Card.Header>
				            {this.state.appetizer_arr.map(appetizer =>
				            <List>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>{appetizer.inclusion}</List.Content>
							    </List.Item>
							</List>
							)}
				          </Card.Content>
				        </Card>

				        <Card id='card-menu'>
				          <Card.Content>
				            <Card.Header className='label-font2'>Dessert</Card.Header>
				            {this.state.dessert_arr.map(dessert =>
				            <List>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>{dessert.inclusion}</List.Content>
							    </List.Item>
							</List>
							)}
				          </Card.Content>
				        </Card>

				        <Card id='card-menu'>
				          <Card.Content>
				            <Card.Header className='label-font2'>Pasta/Noodle</Card.Header>
				            {this.state.soup_arr.map(soup =>
				            <List>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>{soup.inclusion}</List.Content>
							    </List.Item>
							</List>
							)}
				          </Card.Content>
				        </Card>

				        <Card id='card-menu'>
				          <Card.Content>
				            <Card.Header className='label-font2'>Beverage</Card.Header>
				            {this.state.beverage_arr.map(beverage =>
				            <List>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>{beverage.inclusion}</List.Content>
							    </List.Item>
							</List>
							)}
				          </Card.Content>
				        </Card>

				        <Card id='card-menu'>
				          <Card.Content>
				            <Card.Header className='label-font2'>Others</Card.Header>
				            {this.state.others_arr.map(others =>
				            <List>
							    <List.Item>
							      <List.Icon name='food' size='large'/>
							      <List.Content>{others.inclusion}</List.Content>
							    </List.Item>
							</List>
							)}
				          </Card.Content>
				        </Card>
	  				</Card.Group>
				</div>
			</div>
		);
	}

}

export default MenusPortfolio;