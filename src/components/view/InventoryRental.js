import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import ProductInfo from '../infoModal/ProductInfo.js'
import ColorQuantity from '../infoModal/ColorQuantity.js'
import EditInventory from '../edit/EditInventory.js'

import '../../styles/view.css';

class InventoryTable extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			product_name: ""
		}
		this.stateOptions = [ { key: '1', value: '1', text: 'All' }, { key: '2', value: '2', text: 'Table' }, { key: '3', value: '3', text: 'Three' } ]
	}

	handleProductChange = (e) => {
	    this.setState({ product_name: e.target.value},() => { 
	    	if(this.state.product_name === ""){
	    		this.update();	
	    	}else{
	    		this.searchByName(); 
	    	}
	    })
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/inventories/rental', {
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
        fetch('http://localhost:3001/v1/inventories/rental', {
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

    searchByName = () => {
        let self = this;
        fetch('http://localhost:3001/v1/inventories-rental/search/' + self.state.product_name, {
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
				<HeaderBar headerTitle={'Rental'}/>
				<SearchBarTable titleHolder={'Search product name..'} searchData={this.searchByName} inputChange={this.handleProductChange}/>
  				

      			<div className='table-div'>

							<Table single line>
							    <Table.Header>
							      <Table.Row>
							      	<Table.HeaderCell style={{width: '5%'}}>Product Information</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '20%'}}>Product Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Total Quantity</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>No. of Remaining Items</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Variant/s</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '20%'}}>Date of Stock Renewal</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>

							    <Table.Body>
							    {this.state.data.map(inventory =>
							      <Table.Row>
							        <Table.Cell>
								       <ProductInfo prod_id={inventory.product_id}/>
									</Table.Cell>
									<Table.Cell>{inventory.name}</Table.Cell>
									<Table.Cell>{inventory.total_quantity}</Table.Cell>
									<Table.Cell>{inventory.remaining}</Table.Cell>
									<Table.Cell>
								       <ColorQuantity prod_id={inventory.product_id}/>
									</Table.Cell>
									<Table.Cell>{inventory.date_time}</Table.Cell>
							        <Table.Cell textAlign='center'>
							        	<EditInventory handleUpdate={this.update} data={inventory} table={'rental'}/>
							        </Table.Cell>
							      </Table.Row>
							    )}
							    </Table.Body>
							    
							</Table>
					</div>
			</div>
		);
	}

}

export default InventoryTable;