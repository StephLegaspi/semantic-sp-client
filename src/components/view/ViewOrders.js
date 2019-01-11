import React, { Component } from 'react';
import { Icon, Menu, Table, Input, Select, Button, Modal, Image, Header } from 'semantic-ui-react'


import './index.css';

class ViewOrders extends Component {
	constructor(props){
		super(props);
		
		this.options = [
		  { key: 'customer_name', text: 'Customer Name', value: 'customer_name' },
		  { key: 'cart_id', text: 'Cart ID', value: 'cart_id' },
		  { key: 'status', text: 'Status', value: 'status' }
		]


	}

	state = { open: false }

  	show = dimmer => () => this.setState({ dimmer, open: true })
  	close = () => this.setState({ open: false })


	render() {
		const { open, dimmer } = this.state
		return (
			<div>
				<div style={{marginTop: '10%', textAlign: 'center'}}>
					<Input style={{width: '40%'}} type='text' placeholder='Search by: ' action>
					    <input />
					    <Select compact options={this.options} defaultValue='customer_name' />
					    <label class="ui icon button" style={{backgroundColor: 'red', color:'white'}}>
								  <i class="search icon" style={{paddingRight: '5px', width:'20px'}}></i>
								  Search
						</label>
					</Input>
				</div>
				<div className='table_div_order'>
					
					
				<Table celled>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell style={{width: '5%'}}>ID</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Customer ID</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}> Email </Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Contact Number</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Delivery Address</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Zip Code</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Shopping Cart ID</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Status</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Order Timestamp</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				      <Table.Row>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<Button id='delete_button'>
							  <i class="trash large alternate icon"></i>
							</Button>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<Button id='edit_button'>
							  <i class="large edit icon"></i>
							</Button>
				        </Table.Cell>
				      </Table.Row>
				      <Table.Row>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<Button id='delete_button'>
							  <i class="trash large alternate icon"></i>
							</Button>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<Button id='edit_button'>
							  <i class="large edit icon"></i>
							</Button>
				        </Table.Cell>
				      </Table.Row>
				      <Table.Row>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<Button id='delete_button'>
							  <i class="trash large alternate icon"></i>
							</Button>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<Button id='edit_button'>
							  <i class="large edit icon"></i>
							</Button>
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

export default ViewOrders;