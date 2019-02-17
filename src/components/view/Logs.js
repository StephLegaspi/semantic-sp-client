import React, { Component } from 'react';
import { Icon, Menu, Table} from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import DeleteModal from '../delete/DeleteModal.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'

import '../../styles/view.css';

class Logs extends Component {
	constructor(props){
		super(props);
		
		this.options = [
		  { key: 'user_ID', text: 'User ID', value: 'user_ID' },
		  { key: 'timestamp', text: 'Timestamp', value: 'timestamp' },
		]
	}


	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Logs'}/>
				<SearchBarTable titleHolder={'Search question..'}/>

				<div className='table-div'>
				<Table celled>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell style={{width: '15%'}}>Log ID</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Action</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '15%'}}>User ID</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Timestamp</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				      <Table.Row>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<DeleteModal/>
				        </Table.Cell>
				      </Table.Row>
				    </Table.Body>

				    <Table.Footer>
				      <Table.Row>
				        <Table.HeaderCell colSpan='5'>
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

export default Logs;