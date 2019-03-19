import React, { Component } from 'react';
import { Icon, Menu, Table, Dropdown } from 'semantic-ui-react'
import CustomerInfo from '../infoModal/CustomerInfo.js'
import OrderInfo from '../infoModal/OrderInfo.js'
import RentalInfo from '../infoModal/RentalInfo.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import DeleteModal from '../delete/DeleteModal.js'
import EditOrder from '../edit/EditOrder.js'

import '../../styles/view.css';

class OrderRental extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			order_id: ''
		}
		
		this.deliveryStatusOptions = [ { key: 'all', value: 'all', text: 'All' }, { key: 'pending', value: 'pending', text: 'Pending' }, { key: 'on-delivery', value: 'on-delivery', text: 'On-delivery' }, { key: 'delivered', value: 'delivered', text: 'Delivered' } ]
		this.rentalStatusOptions = [ { key: 'all', value: 'all', text: 'All' }, { key: 'on-rent', value: 'on-rent', text: 'On-rent' }, { key: 'returned', value: 'returned', text: 'Returned' }]

	}

	handleIDChange = (e) => {
	    this.setState({ order_id: e.target.value},() => { 
	    	if(this.state.order_id === ""){
	    		this.update();
	    		/*this.getByStatus();	*/
	    		/*this.handleStatusChange();*/
	    	}else{
	    		this.searchByID(); 
	    	}
	    })
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/orders/rental', {
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

    searchByID = () => {
        let self = this;

        const stat = JSON.stringify({status: 'All'})

        fetch('http://localhost:3001/v1/orders/rental/' + self.state.order_id, {
        	headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: stat
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
        fetch('http://localhost:3001/v1/orders/rental', {
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
				<HeaderBar headerTitle={'Rental Orders'}/>
				<SearchBarTable titleHolder={'Search order ID..'} searchData={this.searchByID} inputChange={this.handleIDChange}/>

				<div class="ui fluid segment" id='upper-div3'>
      				<label>
					  Delivery Status: {' '}
					  <Dropdown
					    inline
					    options={this.deliveryStatusOptions}
					    defaultValue='all'
					  />
					</label>
      			</div>

      			<div class="ui fluid segment" id='upper-div4'>  
					<label>
					  Rental Status: {' '}
					  <Dropdown
					    inline
					    options={this.rentalStatusOptions}
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
				        <Table.HeaderCell style={{width: '5%'}}>Rental Information</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Delivery Status</Table.HeaderCell>
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
				        <Table.Cell>
				        	<RentalInfo order_id={order.id} handleUpdate={this.update}/>
				        </Table.Cell>
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
				        <Table.HeaderCell colSpan='13'>
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

export default OrderRental;