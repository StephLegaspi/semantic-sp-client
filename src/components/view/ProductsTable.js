import React, { Component } from 'react';
import { Icon, Menu, Table, Header, Image } from 'semantic-ui-react'

import DeleteButton from '../button/DeleteButton.js'
import EditProduct from '../edit/EditProduct.js'

import '../../styles/view.css';
import img_tree from '../../images/tree.jpg'

class ProductsTable extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>

					<Table celled>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell style={{width: '5%'}}>ID</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Product Image</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Name</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Description</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Price</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Display Product</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
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
						<Table.Cell>cellll</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<EditProduct/>
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
		);
	}

}

export default ProductsTable;