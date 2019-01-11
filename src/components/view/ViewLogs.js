import React, { Component } from 'react';
import { Icon, Menu, Table, Input, Select, Button } from 'semantic-ui-react'


import './index.css';

class ViewLogs extends Component {
	constructor(props){
		super(props);
		
		this.options = [
		  { key: 'user_ID', text: 'User ID', value: 'user_ID' },
		  { key: 'timestamp', text: 'Timestamp', value: 'timestamp' },
		]
	}


	render() {
		return (
			<div>
				<div style={{marginTop: '10%', textAlign: 'center'}}>
					<Input style={{width: '40%'}} type='text' placeholder='Search by: ' action>
					    <input />
					    <Select compact options={this.options} defaultValue='user_ID' />
					    <label class="ui icon button" style={{backgroundColor: 'red', color:'white'}}>
								  <i class="search icon" style={{paddingRight: '5px', width:'20px'}}></i>
								  Search
						</label>
					</Input>
				</div>
				<div className='table_div'>
					
					
				<Table celled>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell style={{width: '15%'}}>Log ID</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Action</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '15%'}}>User ID</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Timestamp</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				      <Table.Row>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<label class="ui icon button" style={{backgroundColor: 'red', color:'white'}}>
							  <i class="trash alternate icon" style={{paddingRight: '5px', width:'20px'}}></i>
							  Delete
							</label>
				        </Table.Cell>
				      </Table.Row>
				      <Table.Row>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<label class="ui icon button" style={{backgroundColor: 'red', color:'white'}}>
							  <i class="trash alternate icon" style={{paddingRight: '5px', width:'20px'}}></i>
							  Delete
							</label>
				        </Table.Cell>
				      </Table.Row>
				      <Table.Row>
				        <Table.Cell>1</Table.Cell>
				        <Table.Cell>2</Table.Cell>
				        <Table.Cell>3</Table.Cell>
				        <Table.Cell>4</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<label class="ui icon button" style={{backgroundColor: 'red', color:'white'}}>
							  <i class="trash alternate icon" style={{paddingRight: '5px', width:'20px'}}></i>
							  Delete
							</label>
				        </Table.Cell>
				      </Table.Row>
				      
				    </Table.Body>

				    <Table.Footer>
				      <Table.Row>
				        <Table.HeaderCell colSpan='5'>
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

export default ViewLogs;