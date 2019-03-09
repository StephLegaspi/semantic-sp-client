import React, { Component } from 'react';
import { Image, Card,Input } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import AddAdmin from '../add/AddAdmin.js'
import DeactivateModal from '../edit/DeactivateModal.js'
import ActivateModal from '../edit/ActivateModal.js'

import SearchBarButton from '../button/SearchBarButton.js'

import '../../styles/view.css';
import '../../styles/search-bar.css';
import img_tree from '../../images/tree.jpg'

class UserAdmins extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			first_name: ""
		}
		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
	}

	handleFirstNameChange(e) { 
		this.setState({first_name: e.target.value}); 
		console.log(this.state.first_name);
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/administrators', {
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
        fetch('http://localhost:3001/v1/administrators', {
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

    searchName = () => {
        let self = this;
        fetch('http://localhost:3001/v1/administrators/search/' + this.state.first_name, {
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
				<HeaderBar headerTitle={'Admins'}/>
				<div id='search-bar3'>
					<Input style={{width: '40%'}} type='text' placeholder='Search administrator name' action>
					    <input onChange={this.handleFirstNameChange}/>
					    <SearchBarButton handleSearch={this.searchName}/>
					</Input>
				</div>

				<AddAdmin handleUpdate={this.update}/>

      			<div id='card-div'>
				<Card.Group itemsPerRow={4}>

				{this.state.data.map(admin =>
				<Card id='card'>
				    <Image src={img_tree} rounded size='small' />
				    <Card.Content>
				      <Card.Header>{admin.first_name + " " + admin.middle_name + " " + admin.last_name} </Card.Header>
				      <Card.Meta>ID: {admin.id}</Card.Meta>
				      <Card.Description>Email: {admin.email_address}</Card.Description>
				      <Card.Description>Contact Number: {admin.contact_number}</Card.Description>
				      <Card.Description>Status: {admin.active ? "Activated" : "Deactivated"}</Card.Description>
				    </Card.Content>
				    <Card.Content extra>
				      	<div style={{marginLeft: '55%'}}>		      	
				      		{admin.active ? <DeactivateModal data_id={admin.id} handleUpdate={this.update}/> : <ActivateModal data_id={admin.id} handleUpdate={this.update}/>}      
				      	</div>
				      	
				    </Card.Content>
				</Card>
				)}
				

				</Card.Group>
				</div>
			</div>
		);
	}

}

export default UserAdmins;