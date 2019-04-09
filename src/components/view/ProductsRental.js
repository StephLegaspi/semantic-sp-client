import React, { Component } from 'react';
import { Icon, Menu, Table, Header, Image } from 'semantic-ui-react'

import DeleteModal from '../delete/DeleteModal.js'
import EditProduct from '../edit/EditProduct.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import AddProduct from '../add/AddProduct.js'
import ProductColor from '../infoModal/ProductColor.js'

import '../../styles/view.css';

class ProductsTable extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			product_name: ""
		}
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
        fetch('http://localhost:3001/v1/products/rental/table', {
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
        fetch('http://localhost:3001/v1/products/rental/table', {
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
        fetch('http://localhost:3001/v1/products-rental/search/' + self.state.product_name, {
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
				<HeaderBar headerTitle={'Rental Products'}/>
				<SearchBarTable titleHolder={'Search product name..'} searchData={this.searchByName} inputChange={this.handleProductChange}/>

				<AddProduct handleUpdate={this.update} category={'rental'}/>


      			<div className='table-div'>
					<Table>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell style={{width: '5%'}}>ID</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Product Image</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Name</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Description</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Price</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Available for display</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Product Color/s</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '2%'}}></Table.HeaderCell>
				        <Table.HeaderCell style={{width: '2%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				    {this.state.data.map(product =>
			          
			          <Table.Row>
			            <Table.Cell>{product.id}</Table.Cell>
			            <Table.Cell>
			            	<Header as='h4' image>
			                  <Image src={`http://localhost:3001/${product.image}`} size='massive' />
			                </Header>
			            </Table.Cell>
			            <Table.Cell>{product.name}</Table.Cell>
			            <Table.Cell>{product.description}</Table.Cell>
			            <Table.Cell>{product.price}</Table.Cell>
			            <Table.Cell>{product.display_product ? "Yes" : "No"}</Table.Cell>
			            <Table.Cell>
					        	<ProductColor prod_id={product.id}/>
					    </Table.Cell>
			            <Table.Cell>
			            	<EditProduct handleUpdate={this.update} data={product}/>
			            </Table.Cell>
			            <Table.Cell>
			            	<DeleteModal data_id={product.id} table_name={'products'} handleUpdate={this.update}/>
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

export default ProductsTable;