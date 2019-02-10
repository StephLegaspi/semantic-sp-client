import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import EditContact from '../edit/EditContact.js'

import '../../styles/view.css';

class ContactDetails extends Component {
	constructor(props){
		super(props);

		this.state = {}		
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
				      <Table.Row>
				        <Table.Cell>cellll</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<EditContact/>
				        </Table.Cell>
				      </Table.Row>
				    </Table.Body>

				</Table>
				</div>	
			</div>
		);
	}

}

export default ContactDetails;