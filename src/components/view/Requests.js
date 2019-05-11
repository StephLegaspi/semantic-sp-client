import React, { Component } from 'react';
import { Dropdown, Table } from 'semantic-ui-react'

import CustomerInfo2 from '../infoModal/CustomerInfo2.js'
import InclusionInfo from '../infoModal/InclusionInfo.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import EditRequest from '../edit/EditRequest.js'

import '../../styles/view.css';

class Requests extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			status: "Pending",
			request_id: ''
		}
	
		this.stateOptions = [{value: 'Pending', text: 'Pending' }, { value: 'Successful', text: 'Successful' }, {value: 'Unsuccessful', text: 'Unsuccessful' } ]
	}

	handleStatusChange = (e, { value }) => {
	    this.setState({ status: value},() => { 
	    	this.searchByStatus(); 	    	
	    })
	}

	handleIDChange = (e) => {
	    this.setState({ request_id: e.target.value},() => { 
	    	if(this.state.request_id === ""){
	    		this.searchByStatus();
	    	}else{
	    		this.searchByID(); 
	    	}
	    })
	}

	componentDidMount() {
        this.searchByStatus();
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
				<SearchBarTable titleHolder={'Search request ID..'} searchData={this.searchByID} inputChange={this.handleIDChange}/>

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
      			<Table>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell style={{width: '5%'}}>ID</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Customer Information</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Inclusions</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '15%'}}>Event Date and Time</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Event Location</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>No. of Persons</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Additional Request</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Request Timestamp</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Request Status</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '10%'}}>Update Timestamp</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				    {this.state.data.map(request =>
				      <Table.Row>
				        <Table.Cell>{request.id}</Table.Cell>
				        <Table.Cell>
					       <CustomerInfo2 data={request}/>
						</Table.Cell>
						<Table.Cell>
					       <InclusionInfo request_id={request.id}/>
						</Table.Cell>
				        <Table.Cell>{request.date_time}</Table.Cell>
				        <Table.Cell>{request.event_location}</Table.Cell>
				        <Table.Cell>{request.number_of_persons}</Table.Cell>
				        <Table.Cell>{request.additional_request}</Table.Cell>
				        <Table.Cell>{request.request_timestamp2}</Table.Cell>
				        <Table.Cell>{request.status}</Table.Cell>
				        <Table.Cell>{request.update_timestamp2}</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<EditRequest data={request} handleUpdate={this.searchByStatus} statusButton={request.status==='Successful' ? true:false}/>
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

export default Requests;