import React, { Component } from 'react';
import { Icon, Menu, Table, Header, Image, Dropdown } from 'semantic-ui-react'

import DeleteModal from '../delete/DeleteModal.js'
import EditProduct from '../edit/EditProduct.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import AddProduct from '../add/AddProduct.js'

import '../../styles/view.css';
import img_tree from '../../images/tree.jpg'

class ProductsTable extends Component {
	constructor(props){
		super(props);

		this.state = {}
		this.stateOptions = [ { key: '1', value: '1', text: 'All' }, { key: '2', value: '2', text: 'Table' }, { key: '3', value: '3', text: 'Three' } ]
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Rental Products'}/>
				<SearchBarTable titleHolder={'Search product name..'}/>

				<AddProduct/>
				
				
      			<div class="ui fluid segment" id='upper-div2'>  
					<label>
					  Product Category: {' '}
					  <Dropdown
					    inline
					    options={this.stateOptions}
					    defaultValue={'1'}
					  />
					</label>
      			</div>

      			<div className='table-div'>
					<Table celled>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell style={{width: '5%'}}>ID</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Product Image</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Name</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Description</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Price</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '2%'}}></Table.HeaderCell>
				        <Table.HeaderCell style={{width: '2%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				      <Table.Row>
				        <Table.Cell>cellll</Table.Cell>
						<Table.Cell>
			                <Header as='h4' image>
			                  <Image src={img_tree} rounded size='massive' />
			                </Header>
			            </Table.Cell>
						<Table.Cell>cellll</Table.Cell>
						<Table.Cell>cellll</Table.Cell>
						<Table.Cell>cellll</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<EditProduct/>
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

export default ProductsTable;