import React, { Component } from 'react';
import { Icon, Menu, Table, Dropdown } from 'semantic-ui-react'
import CustomerInfo from '../infoModal/CustomerInfo.js'
import OrderInfo from '../infoModal/OrderInfo.js'
import RentalInfo from '../infoModal/RentalInfo.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import DeleteButton from '../button/DeleteButton.js'
import EditButton from '../button/EditButton.js'


import '../../styles/view.css';

class ViewOrderRental extends Component {
	constructor(props){
		super(props);

		this.state = {}
		
		this.deliveryStatusOptions = [ { key: 'all', value: 'all', text: 'All' }, { key: 'pending', value: 'pending', text: 'Pending' }, { key: 'on-delivery', value: 'on-delivery', text: 'On-delivery' }, { key: 'delivered', value: 'delivered', text: 'Delivered' } ]
		this.rentalStatusOptions = [ { key: 'all', value: 'all', text: 'All' }, { key: 'on-rent', value: 'on-rent', text: 'On-rent' }, { key: 'returned', value: 'returned', text: 'Returned' }]

	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Rental Orders'}/>
				<SearchBarTable titleHolder={'Search customer name..'}/>

				<div class="ui fluid segment" id='upper-div6'>
      				<label>
					  Delivery Status: {' '}
					  <Dropdown
					    inline
					    options={this.deliveryStatusOptions}
					    defaultValue='all'
					  />
					</label>
      			</div>

      			<div class="ui fluid segment" id='upper-div7'>  
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
				        <Table.HeaderCell style={{width: '10%'}}>Order Timestamp</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Total Items</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Total Bill</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Delivery Address</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Zip Code</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Delivery Status</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Rental Information</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>

				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				      <Table.Row>
				        <Table.Cell>cellll</Table.Cell>
				        <Table.Cell>
					       <CustomerInfo/>
						</Table.Cell>
						<Table.Cell>
					       <OrderInfo/>
						</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>
				        	Pending
				        </Table.Cell>
				        <Table.Cell>
				        	<RentalInfo/>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<EditButton/>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<DeleteButton/>
				        </Table.Cell>
				      </Table.Row>   
				    </Table.Body>

				    <Table.Footer>
				      <Table.Row>
				        <Table.HeaderCell colSpan='12'>
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

export default ViewOrderRental;