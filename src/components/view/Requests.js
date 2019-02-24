import React, { Component } from 'react';
import { Dropdown, Icon, Menu, Table } from 'semantic-ui-react'

import CustomerInfo from '../infoModal/CustomerInfo.js'
import InclusionInfo from '../infoModal/InclusionInfo.js'
import DeleteModal from '../delete/DeleteModal.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import EditRequest from '../edit/EditRequest.js'

import '../../styles/view.css';

class ViewRequests extends Component {
	constructor(props){
		super(props);

		this.state = {
			
		}
	
		this.stateOptions = [ { key: 'all', value: 'all', text: 'All' }, { key: 'pending', value: 'pending', text: 'Pending' }, { key: 'success', value: 'success', text: 'Successful' }, { key: 'unsuccessful', value: 'unsuccessful', text: 'Unsuccessful' } ]
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Requests'}/>
				<SearchBarTable titleHolder={'Search customer name..'}/>

				<div class="ui fluid segment" id='upper-div3'> 
      				<label>
					  Request Status: {' '}
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
				        <Table.HeaderCell style={{width: '10%'}}>Inclusions</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '15%'}}>Event Date</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Event Location</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>No. of Persons</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Request Timestamp</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Request Status</Table.HeaderCell>
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
					       <InclusionInfo/>
						</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>Cell</Table.Cell>
				        <Table.Cell>
				        	Pending
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<EditRequest/>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<DeleteModal/>
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

export default ViewRequests;