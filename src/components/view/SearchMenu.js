import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

import '../../styles/view.css';

import ShopButton from '../button/ShopButton.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'
import SearchBar from '../searchBar/SearchBar.js'

class SearchMenu extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			menu_name: ""
		}
		this.toMenusPortfolio = this.toMenusPortfolio.bind(this);
		this.handleMenuChange = this.handleMenuChange.bind(this);
		this.toSearchMenu = this.toSearchMenu.bind(this);
	}

	toMenusPortfolio(id) {
		this.props.history.push('/menu-portfolio/' + id);
	}

	handleMenuChange(e) { 
		this.setState({menu_name: e.target.value});
	}

	toSearchMenu() {
		this.props.history.push('/menus/search/' + this.state.menu_name);
		this.update();
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/food_menus/search/' + self.props.match.params.name, {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({data: result.data});
        }).catch(err => {
        	console.log(err);
        })
    }

    update = () => {
        let self = this;
        fetch('http://localhost:3001/v1/food_menus/search/' + self.state.menu_name, {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({data: result.data});
        }).catch(err => {
        	console.log(err);
        })
    }

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Food Menus'}/>
				<SearchBar titleHolder={'Search menu name..'} searchData={this.toSearchMenu} inputChange={this.handleMenuChange}/>
      			
      			<div id='card-div2'>
				<Card.Group itemsPerRow={4}>
				{this.state.data.map(menu =>
					<Card id='card'>
						    <Card.Content>
						      <Card.Header>{menu.name}</Card.Header>
						    </Card.Content>
						    <Card.Content extra>
						    	<ShopButton handleView={this.toMenusPortfolio} data_id={menu.id}/>
						    </Card.Content>
					</Card>
				)}
				</Card.Group>
				</div>

				<Footer/>
			</div>
		);
	}

}

export default SearchMenu;