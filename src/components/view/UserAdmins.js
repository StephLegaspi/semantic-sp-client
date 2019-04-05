import React, { Component } from 'react';
import { Image, Card } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import AddAdmin from '../add/AddAdmin.js'
import DeactivateModal from '../edit/DeactivateModal.js'
import ActivateModal from '../edit/ActivateModal.js'

import SearchBarTable from '../searchBar/SearchBarTable.js'

import '../../styles/view.css';
import '../../styles/search-bar.css';

class UserAdmins extends Component {
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
        fetch('http://localhost:3001/v1/administrators/search/' + self.state.first_name, {
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

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Admins'}/>
				<SearchBarTable titleHolder={'Search admin name..'} searchData={this.searchByName} inputChange={this.handleFirstNameChange}/>

				<AddAdmin handleUpdate={this.update}/>

				<div>
      				<div id='card-div'>
					<Card.Group itemsPerRow={4}>
						{this.state.data.map(admin =>
						<Card id='card'>
						    <Image id='img-center' src={`http://localhost:3001/${admin.image}`} size='large'/>
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
			</div>
		);
	}

}

export default UserAdmins;