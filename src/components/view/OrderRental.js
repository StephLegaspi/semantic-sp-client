import React, { Component } from 'react';
import { Table, Dropdown } from 'semantic-ui-react'

import CustomerInfo from '../infoModal/CustomerInfo.js'
import OrderInfo from '../infoModal/OrderInfo.js'
import RentalInfo from '../infoModal/RentalInfo.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import EditOrder from '../edit/EditOrder.js'

import '../../styles/view.css';

class OrderRental extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			order_id: '',
			rental_status: 'On-rent'
		}

		this.rentalStatusOptions = [ { value: 'On-rent', text: 'On-rent' }, { value: 'Returned', text: 'Returned' } ]
	}

	handleStatusChange = (e, { value }) => {
	    this.setState({ rental_status: value},() => { 
	    	this.getByStatus();
	    })
	}

	handleIDChange = (e) => {
	    this.setState({ order_id: e.target.value},() => { 
	    	if(this.state.order_id === ""){
	    		this.getByStatus();	
	    	}else{
	    		this.searchByID(); 
	    	}
	    })
	}

	componentDidMount() {
        this.getByStatus();
    }

    searchByID = () => {
        let self = this;

        const stat = JSON.stringify({status: this.state.rental_status})

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

    getByStatus = () => {
        let self = this;
        fetch('http://localhost:3001/v1/orders/rental-status/' + this.state.rental_status, {
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
					  Rental Status: {' '}
					  <Dropdown
					    inline
					    options={this.rentalStatusOptions}
					    defaultValue={this.state.rental_status}
					    onChange={this.handleStatusChange}
					  />
					</label>
      			</div>

				<div className='table-div-longer'>
				<Table>
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
				        <Table.HeaderCell style={{width: '10%'}}>Update Timestamp</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Delivery Status</Table.HeaderCell>

				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				    {this.state.data.map(order =>
				      <Table.Row>
				        <Table.Cell>{order.id}</Table.Cell>
				        <Table.Cell>
					       <CustomerInfo data={order}/>
						</Table.Cell>
						<Table.Cell>
					       <OrderInfo cart_id={order.shopping_cart_id}/>
						</Table.Cell>
				        <Table.Cell>{order.delivery_address}</Table.Cell>
				        <Table.Cell>{order.zip_code}</Table.Cell>
				        <Table.Cell>{order.order_timestamp2}</Table.Cell>
				        <Table.Cell>{order.total_items}</Table.Cell>
				        <Table.Cell>{order.total_bill}</Table.Cell>
				        <Table.Cell>{order.status}</Table.Cell>
				        <Table.Cell>
				        	<RentalInfo order_id={order.id} orderStatus={order.status} handleUpdate={this.getByStatus}/>
				        </Table.Cell>
				        <Table.Cell>{order.update_timestamp2}</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<EditOrder status_delivery={order.status} order_id={order.id} handleUpdate={this.getByStatus} statusButton={order.status==='Delivered' ? true:false}/>
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

export default OrderRental;