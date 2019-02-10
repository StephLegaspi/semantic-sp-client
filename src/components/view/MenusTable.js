import React, { Component } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react'

import MainCourse from '../infoModal/MainCourse.js'
import Appetizer from '../infoModal/Appetizer.js'
import Dessert from '../infoModal/Dessert.js'
import Soup from '../infoModal/Soup.js'
import Beverage from '../infoModal/Beverage.js'
import OtherMenu from '../infoModal/OtherMenu.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import DeleteModal from '../delete/DeleteModal.js'
import EditMenu from '../edit/EditMenu.js'
import AddMenu from '../add/AddMenu.js'

import '../../styles/view.css';

class MenusTable extends Component {
	constructor(props){
		super(props);

		this.state = {}		

		this.stateOptions = [ { key: 'all', value: 'all', text: 'All' }, { key: 'pending', value: 'pending', text: 'Pending' }, { key: 'on-delivery', value: 'on-delivery', text: 'On-delivery' }, { key: 'delivered', value: 'delivered', text: 'Delivered' } ]
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Menus'}/>
				<SearchBarTable titleHolder={'Search menu name..'}/>

				<AddMenu/>

				<div className='table-div'>
				<Table single line>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell >ID</Table.HeaderCell>
				        <Table.HeaderCell >Menu Name</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Main Course</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Appetizer</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Dessert</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Soup</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Beverage</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Others</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				      <Table.Row>
				        <Table.Cell>cellll</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>
				        	<MainCourse />
				        </Table.Cell>
				        <Table.Cell>
				        	<Appetizer />
				        </Table.Cell>
				        <Table.Cell>
				        	<Dessert />
				        </Table.Cell>
				        <Table.Cell>
				        	<Soup />
				        </Table.Cell>
				        <Table.Cell>
				        	<Beverage />
				        </Table.Cell>
				        <Table.Cell>
				        	<OtherMenu />
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<EditMenu/>
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

export default MenusTable;