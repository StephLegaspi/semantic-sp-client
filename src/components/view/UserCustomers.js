import React, { Component } from 'react';
import { Image, Card } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import CustomerProfile from '../infoModal/CustomerProfile.js'

import '../../styles/view.css';
import img_tree from '../../images/tree.jpg'

class UserCustomers extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			first_name: ""
		}
	}

	handleFirstNameChange = (e) => {
	    this.setState({ first_name: e.target.value},() => { 
	    	if(this.state.first_name === ""){
	    		this.update();	
	    	}else{
	    		this.searchByName(); 
	    	}
	    })
	}

	searchByName = () => {
        let self = this;
        fetch('http://localhost:3001/v1/customers/search/' + self.state.first_name, {
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

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/customers', {
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
        fetch('http://localhost:3001/v1/customers', {
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
				<HeaderBar headerTitle={'Customers'}/>
				<SearchBarTable titleHolder={'Search customer name..'} searchData={this.searchByName} inputChange={this.handleFirstNameChange}/>

      			<div id='card-div'>
				<Card.Group itemsPerRow={4}>

				{this.state.data.map(customer =>
				<Card id='card'>
				    <Image src={img_tree} rounded size='small' />
				    <Card.Content>
				      <Card.Header>{customer.first_name + " " + customer.middle_name + " " + customer.last_name} </Card.Header>
				      <Card.Meta>ID: {customer.id}</Card.Meta>
				      <Card.Description>Email: {customer.email_address}</Card.Description>
				      <Card.Description>Contact Number: {customer.contact_number}</Card.Description>
				    </Card.Content>
				    <Card.Content extra>
				      <CustomerProfile customer_id={customer.id}/>
				    </Card.Content>
				</Card>
				)}
			
				</Card.Group>
				</div>
			</div>
		);
	}

}

export default UserCustomers;