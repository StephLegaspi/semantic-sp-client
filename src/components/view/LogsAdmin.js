import React, { Component } from 'react';
import { Icon, Menu, Table} from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import DeleteModal from '../delete/DeleteModal.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'

import '../../styles/view.css';

class Logs extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			data: [],
			log_id: ''
		}

		this.options = [
		  { key: 'user_ID', text: 'User ID', value: 'user_ID' },
		  { key: 'timestamp', text: 'Timestamp', value: 'timestamp' },
		]
	}

	handleIDChange = (e) => {
	    this.setState({ log_id: e.target.value},() => { 
	    	if(this.state.log_id === ""){
	    		this.update();	
	    	}else{
	    		this.searchByID(); 
	    	}
	    })
	}

	searchByID = () => {
        let self = this;
        fetch('http://localhost:3001/v1/logs/admin/' + self.state.log_id, {
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

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/logs/admin', {
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

    update = () => {
        let self = this;
        fetch('http://localhost:3001/v1/logs/admin', {
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
				<HeaderBar headerTitle={'Admin Logs'}/>
				<SearchBarTable titleHolder={'Search admin ID..'} searchData={this.searchByID} inputChange={this.handleIDChange}/>

				<div className='table-div'>
				<Table celled>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell style={{width: '7%'}}>Log ID</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '7%'}}>Admin ID</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Action</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '20%'}}>Timestamp</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				    {this.state.data.map(log =>
				      <Table.Row>
				        <Table.Cell>{log.id}</Table.Cell>
				        <Table.Cell>{log.user_id}</Table.Cell>
				        <Table.Cell>{log.action}</Table.Cell>
				        <Table.Cell>{log.log_timestamp}</Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<DeleteModal data_id={log.id} table_name={'logs'} handleUpdate={this.update}/>
				        </Table.Cell>
				      </Table.Row>
				    )}
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

export default Logs;