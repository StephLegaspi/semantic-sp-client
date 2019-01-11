import React, { Component } from 'react';
import { Icon, Menu, Table, Input, Select, Button, Modal, Image, Header } from 'semantic-ui-react'


import './index.css';

class ViewOrders extends Component {
	constructor(props){
		super(props);

		this.state = {
			modal1: false,
			modal2: false,
			modal3: false,
			modal4: false,
			modal5: false,
			modal6: false
		}
		
		this.options = [
		  { key: 'customer_name', text: 'Customer Name', value: 'customer_name' },
		  { key: 'cart_id', text: 'Cart ID', value: 'cart_id' },
		  { key: 'status', text: 'Status', value: 'status' }
		]


	}

	onModal = () => {
		this.setState({modal: true});
	}
	onModal2 = () => {
		this.setState({modal2: true});
	}
	onModal3 = () => {
		this.setState({modal3: true});
	}
	onModal4 = () => {
		this.setState({modal4: true});
	}
	onModal5 = () => {
		this.setState({modal5: true});
	}
	onModal6 = () => {
		this.setState({modal6: true});
	}


	onClose = () => {
		this.setState({modal: false})
	}
	onClose2 = () => {
		this.setState({modal2: false})
	}
	onClose3 = () => {
		this.setState({modal3: false})
	}
	onClose4 = () => {
		this.setState({modal4: false})
	}
	onClose5 = () => {
		this.setState({modal5: false})
	}
	onClose6 = () => {
		this.setState({modal6: false})
	}

	render() {
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
				        <Table.HeaderCell style={{width: '5%'}}>Customer Information</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Orders</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Delivery Address</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Zip Code</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Order Timestamp</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Total Items</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Total Bill</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Status</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				      <Table.Row>
				        <Table.Cell>cellll</Table.Cell>
				        <Table.Cell>
					       <Button id= 'modal_button' onClick={this.onModal}> View</Button>
					        {this.state.modal && (<div className='searchModal'>
								<div>
								<div className="multivalued">
								<Table celled>
							    <Table.Header>
							      <Table.Row>
							        <Table.HeaderCell style={{width: '10%'}}>ID</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>First Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Middle Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Last Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Email Address</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Contact Number</Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>
							    <Table.Body>
							    	 <Table.Row>
								        <Table.Cell>WAAAAh</Table.Cell>
								        <Table.Cell>YAAAAh</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row> 
							    </Table.Body>
							    <Button color="red" className='close' onClick={this.onClose}> Close </Button>
							    </Table>
							    </div>
							    </div>
								</div>)}
						</Table.Cell>
						<Table.Cell>
					       <Button id= 'modal_button_order' onClick={this.onModal4}> View</Button>
					        {this.state.modal4 && (<div className='searchModal'>
								<div>
								<div className="multivalued">
								<Table celled>
							    <Table.Header>
							      <Table.Row>
							        <Table.HeaderCell style={{width: '20%'}}>Product Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '15%'}}>Product Color</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Quantity</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '15%'}}>Total Price</Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>
							    <Table.Body>
							    	 <Table.Row>
								        <Table.Cell>Cell1</Table.Cell>
								        <Table.Cell>Cell1</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row> 
							    </Table.Body>
							    <Button color="red" className='close' onClick={this.onClose4}> Close </Button>
							    </Table>
							    </div>
							    </div>
								</div>)}
						</Table.Cell>
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
				      </Table.Row>

				      <Table.Row>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>
					        <Button id= 'modal_button' onClick={this.onModal2}> View</Button>
					        {this.state.modal2 && (<div className='searchModal'>
								<div>
								<div className="multivalued">
								<Table celled>
							    <Table.Header>
							      <Table.Row>
							        <Table.HeaderCell style={{width: '10%'}}>ID</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>First Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Middle Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Last Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Email Address</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Contact Number</Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>
							    <Table.Body>
							    	 <Table.Row>
								        <Table.Cell>WHAAAT</Table.Cell>
								        <Table.Cell>YUPPPPP</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row> 
							    </Table.Body>
							    <Button color="red" className='close' onClick={this.onClose2}> Close </Button>
							    </Table>
							    </div>
							    </div>
								</div>)}
						</Table.Cell>
						<Table.Cell>
					       <Button id= 'modal_button_order' onClick={this.onModal5}> View</Button>
					        {this.state.modal5 && (<div className='searchModal'>
								<div>
								<div className="multivalued">
								<Table celled>
							    <Table.Header>
							      <Table.Row>
							        <Table.HeaderCell style={{width: '20%'}}>Product Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '15%'}}>Product Color</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Quantity</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '15%'}}>Total Price</Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>
							    <Table.Body>
							    	 <Table.Row>
								        <Table.Cell>Cell2</Table.Cell>
								        <Table.Cell>Cell2</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row> 
							    </Table.Body>
							    <Button color="red" className='close' onClick={this.onClose5}> Close </Button>
							    </Table>
							    </div>
							    </div>
								</div>)}
						</Table.Cell>
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
				      </Table.Row>

				      <Table.Row>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>
					        <Button id= 'modal_button' onClick={this.onModal3}> View</Button>
					        {this.state.modal3 && (<div className='searchModal'>
								<div>
								<div className="multivalued">
								<Table celled>
							    <Table.Header>
							      <Table.Row>
							        <Table.HeaderCell style={{width: '10%'}}>ID</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>First Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Middle Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Last Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Email Address</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Contact Number</Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>
							    <Table.Body>
							    	 <Table.Row>
								        <Table.Cell>THIRD</Table.Cell>
								        <Table.Cell>YAS</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row> 
							    </Table.Body>
							    <Button color="red" className='close' onClick={this.onClose3}> Close </Button>
							    </Table>
							    </div>
							    </div>
								</div>)}
						</Table.Cell>
				        <Table.Cell>
					        <Button id= 'modal_button_order' onClick={this.onModal6}> View</Button>
					        {this.state.modal6 && (<div className='searchModal'>
								<div>
								<div className="multivalued">
								<Table celled>
							    <Table.Header>
							      <Table.Row>
							        <Table.HeaderCell style={{width: '20%'}}>Product Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '15%'}}>Product Color</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Quantity</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '15%'}}>Total Price</Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>
							    <Table.Body>
							    	 <Table.Row>
								        <Table.Cell>Cell3</Table.Cell>
								        <Table.Cell>Cell3</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row> 
							    </Table.Body>
							    <Button color="red" className='close' onClick={this.onClose6}> Close </Button>
							    </Table>
							    </div>
							    </div>
								</div>)}
						</Table.Cell>
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