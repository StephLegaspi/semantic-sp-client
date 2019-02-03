import React, { Component } from 'react';
import { Icon, Menu, Table, Input, Button, Header, Dropdown } from 'semantic-ui-react'
import ProductInfo from '../infoModal/ProductInfo.js'

import '../../styles/view.css';

class ViewInventory extends Component {
	constructor(props){
		super(props);

		this.state = {}
		this.stateOptions = [ { key: '1', value: '1', text: 'All' }, { key: '2', value: '2', text: 'Table' }, { key: '3', value: '3', text: 'Three' } ]
	}

	render() {
		return (
			<div>
				<div id='search-bar'>
					<Input style={{width: '40%'}} type='text' placeholder='Search product name.. ' action>
					    <input />
					    <label class="ui icon button" style={{backgroundColor: 'red', color:'white'}}>
							<i class="large search icon" style={{paddingRight: '5px', width:'20px'}}></i>  
						</label>
					</Input>
				</div>
				
				
  				<div class="ui fluid segment" id='upper-div1'>
      				<label> Products available for: </label>
      				<Button id='upper-button'> Sale</Button>
      				<Button id='upper-button'> Rent</Button>
      			</div>

      			<div class="ui fluid segment" id='upper-div2'>  
					<label>
					  Product Category: {' '}
					  <Dropdown
					    inline
					    options={this.stateOptions}
					    defaultValue={this.stateOptions[0].value}
					  />
					</label>
      			</div>

				<div className='table-div'>
				<Table celled>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell style={{width: '5%'}}>ID</Table.HeaderCell>
				      	<Table.HeaderCell style={{width: '5%'}}>Product Information</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Product Name</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Total Quantity</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>No. of Remaining Items</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Date of Stock Renewal</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				      <Table.Row>
				        <Table.Cell>cellll</Table.Cell>
				        <Table.Cell>
					       <ProductInfo/>
						</Table.Cell>
						<Table.Cell>cellll</Table.Cell>
						<Table.Cell>cellll</Table.Cell>
						<Table.Cell>cellll</Table.Cell>
						<Table.Cell>cellll</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<Button id='delete-button'>
							  <i class="trash large alternate icon"></i>
							</Button>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<Button id='edit-button'>
							  <i class="large edit icon"></i>
							</Button>
				        </Table.Cell>
				      </Table.Row>

				      <Table.Row>
				        <Table.Cell>cellll</Table.Cell>
				        <Table.Cell>
					       <ProductInfo/>
						</Table.Cell>
						<Table.Cell>cellll</Table.Cell>
						<Table.Cell>cellll</Table.Cell>
						<Table.Cell>cellll</Table.Cell>
						<Table.Cell>cellll</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<Button id='delete-button'>
							  <i class="trash large alternate icon"></i>
							</Button>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<Button id='edit-button'>
							  <i class="large edit icon"></i>
							</Button>
				        </Table.Cell>
				      </Table.Row>

				      <Table.Row>
				        <Table.Cell>cellll</Table.Cell>
				        <Table.Cell>
					       <ProductInfo/>
						</Table.Cell>
						<Table.Cell>cellll</Table.Cell>
						<Table.Cell>cellll</Table.Cell>
						<Table.Cell>cellll</Table.Cell>
						<Table.Cell>cellll</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<Button id='delete-button'>
							  <i class="trash large alternate icon"></i>
							</Button>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<Button id='edit-button'>
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

export default ViewInventory;