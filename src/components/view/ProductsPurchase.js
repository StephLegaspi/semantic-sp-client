import React, { Component } from 'react';
import { Icon, Menu, Table, Header, Image } from 'semantic-ui-react'

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

		this.state = {
			data: []
		}
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/products/purchase', {
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
        fetch('http://localhost:3001/v1/products/purchase', {
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
				<HeaderBar headerTitle={'Purchase Products'}/>
				<SearchBarTable titleHolder={'Search product name..'}/>

				<AddProduct handleUpdate={this.update} category={'purchase'}/>
			

      			<div className='table-div'>
					<Table celled>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell style={{width: '5%'}}>ID</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Product Image</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Name</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Description</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Price</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Available for display</Table.HeaderCell>
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
			                  <Image src={img_tree} rounded size='massive' />
			                </Header>
			            </Table.Cell>
			            <Table.Cell>{product.name}</Table.Cell>
			            <Table.Cell>{product.description}</Table.Cell>
			            <Table.Cell>{product.price}</Table.Cell>
			            <Table.Cell>{product.display_product ? "Yes" : "No"}</Table.Cell>
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