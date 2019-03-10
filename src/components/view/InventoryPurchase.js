import React, { Component } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import ProductInfo from '../infoModal/ProductInfo.js'
import EditInventory from '../edit/EditInventory.js'

import '../../styles/view.css';

class InventoryTable extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: []
		}
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/inventories/purchase', {
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
        fetch('http://localhost:3001/v1/inventories/purchase', {
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
							      </Table.Row>
							    </Table.Header>

							    <Table.Body>
							    {this.state.data.map(inventory =>
							      <Table.Row>
							        <Table.Cell>{inventory.id}</Table.Cell>
							        <Table.Cell>
								       <ProductInfo prod_id={inventory.product_id}/>
									</Table.Cell>
									<Table.Cell>{inventory.name}</Table.Cell>
									<Table.Cell>{inventory.total_quantity}</Table.Cell>
									<Table.Cell>{inventory.remaining}</Table.Cell>
									<Table.Cell>{inventory.renewal_timestamp}</Table.Cell>
							        <Table.Cell textAlign='center'>
							        	<EditInventory handleUpdate={this.update} data={inventory}/>
							        </Table.Cell>
							      </Table.Row>
							    )}
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