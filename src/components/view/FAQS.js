import React, { Component } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import EditFAQ from '../edit/EditFAQ.js'
import DeleteModal from '../delete/DeleteModal.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import AddFAQ from '../add/AddFAQ.js'

import '../../styles/view.css';

class FAQS extends Component {
	constructor(props){
		super(props);

		this.state = {}	
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'FAQS'}/>
				<SearchBarTable titleHolder={'Search question..'}/>

				<AddFAQ/>

				<div className='table-div'>
				<Table celled>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell >ID</Table.HeaderCell>
				        <Table.HeaderCell >Question</Table.HeaderCell>
				        <Table.HeaderCell >Answer</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				      <Table.Row>
				        <Table.Cell>cellll</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<EditFAQ/>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<DeleteModal/>
				        </Table.Cell>
				      </Table.Row>
				    </Table.Body>

				    <Table.Footer>
				      <Table.Row>
				        <Table.HeaderCell colSpan='11'>
				          <Menu floated='right' pagination>
				            <Menu.Item as='a' icon>
				              <Icon name='chevron left' />
				            </Menu.Item>
				            <Menu.Item as='a'>1</Menu.Item>
				            <Menu.Item as='a'>2</Menu.Item>
				            <Menu.Item as='a'>3</Menu.Item>
				            <Menu.Item as='a'>4</Menu.Item>
				            <Menu.Item as='a' icon>
				              <Icon name='chevron right' />
				            </Menu.Item>
				          </Menu>
				        </Table.HeaderCell>
				      </Table.Row>
				    </Table.Footer>

				</Table>
				</div>	
			</div>
		);
	}

}

export default FAQS;