import React, { Component } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react'

import PackageInfo from '../infoModal/PackageInfo.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import DeleteButton from '../button/DeleteButton.js'
import EditPackage from '../edit/EditPackage.js'
import AddPackage from '../add/AddPackage.js'

import '../../styles/view.css';

class PackagesTable extends Component {
	constructor(props){
		super(props);

		this.state = {}		

		this.stateOptions = [ { key: 'all', value: 'all', text: 'All' }, { key: 'pending', value: 'pending', text: 'Pending' }, { key: 'on-delivery', value: 'on-delivery', text: 'On-delivery' }, { key: 'delivered', value: 'delivered', text: 'Delivered' } ]
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Packages'}/>
				<SearchBarTable titleHolder={'Search package name..'}/>

				<AddPackage/>

				<div className='table-div'>
				<Table celled>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell >ID</Table.HeaderCell>
				        <Table.HeaderCell >Package Name</Table.HeaderCell>
				        <Table.HeaderCell >Price</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '7%'}}>Inclusions</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				      <Table.Row>
				        <Table.Cell>cellll</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>
				        	<PackageInfo/>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<EditPackage/>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<DeleteButton/>
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

export default PackagesTable;