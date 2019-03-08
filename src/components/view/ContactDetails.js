import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import EditContact from '../edit/EditContact.js'

import '../../styles/view.css';

class ContactDetails extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: []
		}		
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/contact_details', {
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
        fetch('http://localhost:3001/v1/contact_details', {
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
				<HeaderBar headerTitle={'Contact Details'}/>

				<div className='table-div'>
				<Table celled>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell >Telephone Number</Table.HeaderCell>
				        <Table.HeaderCell >Mobile Number</Table.HeaderCell>
				        <Table.HeaderCell >Email Address</Table.HeaderCell>
				        <Table.HeaderCell >Business Address</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				    {this.state.data.map(contact =>
				      <Table.Row>
				        <Table.Cell>{contact.telephone_number}</Table.Cell>
				        <Table.Cell>{contact.mobile_number}</Table.Cell>
				        <Table.Cell>{contact.email_address}</Table.Cell>
				        <Table.Cell>{contact.business_address}</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<EditContact data={contact} handleUpdate={this.update}/>
				        </Table.Cell>
				      </Table.Row>
				    )}
				    </Table.Body>

				</Table>
				</div>	
			</div>
		);
	}

}

export default ContactDetails;