import React, { Component } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import DeleteModal from '../delete/DeleteModal.js'
import EditMotif from '../edit/EditMotif.js'
import AddMotif from '../add/AddMotif.js'

import '../../styles/view.css';

class MotifsTable extends Component {
	constructor(props){
		super(props);

		this.state = {}		

		this.stateOptions = [ { key: 'all', value: 'all', text: 'All' }, { key: 'pending', value: 'pending', text: 'Pending' }, { key: 'on-delivery', value: 'on-delivery', text: 'On-delivery' }, { key: 'delivered', value: 'delivered', text: 'Delivered' } ]
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Motifs'}/>
				<SearchBarTable titleHolder={'Search motif name..'}/>

				<AddMotif/>

				<div className='table-div'>
				<Table celled>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell >ID</Table.HeaderCell>
				        <Table.HeaderCell >Motif Name</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '50%'}}>Description</Table.HeaderCell>
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
				        	<EditMotif/>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<DeleteModal/>
				        </Table.Cell>
				      </Table.Row>  
				    </Table.Body>

				    <Table.Footer>
				      <Table.Row>
				        <Table.HeaderCell colSpan='11'>
				          <Menu floated='right' pagination >
				            <Menu.Item as='a' icon>
				              <Icon name='chevron left' />
				            </Menu.Item>
				            <Menu.Item as='a'>1</Menu.Item>
				            <Menu.Item as='a'>2</Menu.Item>
				            <Menu.Item as='a'>3</Menu.Item>
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

export default MotifsTable;