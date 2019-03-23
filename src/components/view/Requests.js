import React, { Component } from 'react';
import { Dropdown, Icon, Menu, Table } from 'semantic-ui-react'

import CustomerInfo from '../infoModal/CustomerInfo.js'
import InclusionInfo from '../infoModal/InclusionInfo.js'
import DeleteModal from '../delete/DeleteModal.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import EditRequest from '../edit/EditRequest.js'

import '../../styles/view.css';

class Requests extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			status: "All",
			request_id: ''
		}
	
		this.stateOptions = [ {value: 'All', text: 'All' }, {value: 'Pending', text: 'Pending' }, { value: 'Successful', text: 'Successful' }, {value: 'Unsuccessful', text: 'Unsuccessful' } ]
	}

	handleStatusChange = (e, { value }) => {
	    this.setState({ status: value},() => { 
	    	if(this.state.status === "All"){
	    		this.update();	
	    	}else{
	    		this.searchByStatus(); 
	    	}
	    })
	}

	handleIDChange = (e) => {
	    this.setState({ request_id: e.target.value},() => { 
	    	if(this.state.request_id === ""){
	    		/*this.update();*/
	    		this.searchByStatus();	
	    		/*this.handleStatusChange();*/
	    	}else{
	    		this.searchByID(); 
	    	}
	    })
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/requests', {
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

        const stat = JSON.stringify({status: this.state.status})

        fetch('http://localhost:3001/v1/requests-one/' + self.state.request_id, {
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
        fetch('http://localhost:3001/v1/requests', {
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

    searchByStatus = () => {
        let self = this;
        fetch('http://localhost:3001/v1/requests/status/' + self.state.status, {
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
				<HeaderBar headerTitle={'Requests'}/>
				<SearchBarTable titleHolder={'Search order ID..'} searchData={this.searchByID} inputChange={this.handleIDChange}/>

				<div class="ui fluid segment" id='upper-div3'> 
      				<label>
					  Request Status: {' '}
					  <Dropdown
					    inline
					    options={this.stateOptions} 
					    value={this.state.status} 
					    onChange={this.handleStatusChange}
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
				    {this.state.data.map(request =>
				      <Table.Row>
				        <Table.Cell>{request.id}</Table.Cell>
				        <Table.Cell>
					       <CustomerInfo customer_id={request.customer_id}/>
						</Table.Cell>
						<Table.Cell>
					       <InclusionInfo request_id={request.id}/>
						</Table.Cell>
				        <Table.Cell>{request.event_date}</Table.Cell>
				        <Table.Cell>{request.event_location}</Table.Cell>
				        <Table.Cell>{request.number_of_persons}</Table.Cell>
				        <Table.Cell>{request.request_timestamp}</Table.Cell>
				        <Table.Cell>{request.status}</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<EditRequest data={request} handleUpdate={this.update}/>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<DeleteModal data_id={request.id} table_name={'requests'} handleUpdate={this.update}/>
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

export default Requests;