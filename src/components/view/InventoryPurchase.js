import React, { Component } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import ProductInfo from '../infoModal/ProductInfo.js'
import DeleteModal from '../delete/DeleteModal.js'
import EditInventory from '../edit/EditInventory.js'

import '../../styles/view.css';

class InventoryTable extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Purchase'}/>
				<SearchBarTable titleHolder={'Search product name..'}/>


      			<div className='table-div'>

							<Table single line>
							    <Table.Header>
							      <Table.Row>
							        <Table.HeaderCell style={{width: '5%'}}>ID</Table.HeaderCell>
							      	<Table.HeaderCell style={{width: '5%'}}>Product Information</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '20%'}}>Product Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Total Quantity</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>No. of Remaining Items</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '20%'}}>Date of Stock Renewal</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
							        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>

							    <Table.Body>
							      <Table.Row>
							        <Table.Cell>cellll</Table.Cell>
							        <Table.Cell>
								       <ProductInfo/>
									</Table.Cell>
									<Table.Cell>cellll</Table.Cell>
									<Table.Cell>cellll</Table.Cell>
									<Table.Cell>cellll</Table.Cell>
									<Table.Cell>cellll</Table.Cell>
							        <Table.Cell textAlign='center'>
							        	<EditInventory />
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

export default InventoryTable;