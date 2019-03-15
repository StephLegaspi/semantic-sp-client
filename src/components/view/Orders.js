import React, { Component } from 'react';
import { Icon, Menu, Table, Dropdown } from 'semantic-ui-react'

import CustomerInfo from '../infoModal/CustomerInfo.js'
import OrderInfo from '../infoModal/OrderInfo.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import DeleteModal from '../delete/DeleteModal.js'
import EditOrder from '../edit/EditOrder.js'

import '../../styles/view.css';

class Orders extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: []
		}		

		this.stateOptions = [ { key: 'all', value: 'all', text: 'All' }, { key: 'pending', value: 'pending', text: 'Pending' }, { key: 'on-delivery', value: 'on-delivery', text: 'On-delivery' }, { key: 'delivered', value: 'delivered', text: 'Delivered' } ]
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/orders/purchase', {
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
        fetch('http://localhost:3001/v1/orders/purchase', {
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
				<HeaderBar headerTitle={'Purchase Orders'}/>
				<SearchBarTable titleHolder={'Search customer name..'}/>


				<div class="ui fluid segment" id='upper-div3'>
      				<label>
					  Delivery Status: {' '}
					  <Dropdown
					    inline
					    options={this.stateOptions}
					    defaultValue='all'
					  />
					</label>
      			</div>

				<div className='table-div-longer'>
				<Table celled>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell style={{width: '5%'}}>ID</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Customer Information</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Orders</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Delivery Address</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Zip Code</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Order Timestamp</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Total Items</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Total Bill</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Delivery Status</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				    {this.state.data.map(order =>
				      <Table.Row>
				        <Table.Cell>{order.id}</Table.Cell>
				        <Table.Cell>
					       <CustomerInfo customer_id={order.customer_id}/>
						</Table.Cell>
						<Table.Cell>
					       <OrderInfo cart_id={order.shopping_cart_id}/>
						</Table.Cell>
				        <Table.Cell>{order.delivery_address}</Table.Cell>
				        <Table.Cell>{order.zip_code}</Table.Cell>
				        <Table.Cell>{order.order_timestamp}</Table.Cell>
				        <Table.Cell>{order.total_bill}</Table.Cell>
				        <Table.Cell>{order.total_items}</Table.Cell>
				        <Table.Cell>{order.status}</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<EditOrder status_delivery={order.status} order_id={order.id} handleUpdate={this.update}/>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<DeleteModal/>
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

export default Orders;