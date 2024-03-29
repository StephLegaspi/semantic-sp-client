import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import DeleteModal from '../delete/DeleteModal.js'
import EditMotif from '../edit/EditMotif.js'
import AddMotif from '../add/AddMotif.js'

import '../../styles/view.css';

class MotifsTable extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			motif_name: ""
		}		

		this.stateOptions = [ { key: 'all', value: 'all', text: 'All' }, { key: 'pending', value: 'pending', text: 'Pending' }, { key: 'on-delivery', value: 'on-delivery', text: 'On-delivery' }, { key: 'delivered', value: 'delivered', text: 'Delivered' } ]
	}

	handleMotifChange = (e) => {
	    this.setState({ motif_name: e.target.value},() => { 
	    	if(this.state.motif_name === ""){
	    		this.update();	
	    	}else{
	    		this.searchByName(); 
	    	}
	    })
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/event_motifs', {
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
        fetch('http://localhost:3001/v1/event_motifs', {
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

    searchByName = () => {
        let self = this;
        fetch('http://localhost:3001/v1/event_motifs/search/' + self.state.motif_name, {
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
				<HeaderBar headerTitle={'Motifs'}/>
				<SearchBarTable titleHolder={'Search motif name..'} searchData={this.searchByName} inputChange={this.handleMotifChange}/>

				<AddMotif handleUpdate={this.update}/>

				<div className='table-div'>
				<Table>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell >Motif Name</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '50%'}}>Description</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				    {this.state.data.map(motif =>
					    <Table.Row>
					        <Table.Cell>{motif.name}</Table.Cell>
					        <Table.Cell>{motif.description}</Table.Cell>
					        <Table.Cell textAlign='center'>
					        	<EditMotif data={motif} handleUpdate={this.update}/>
					        </Table.Cell>
					        <Table.Cell textAlign='center'>
					        	<DeleteModal data_id={motif.id} table_name={'event_motifs'} handleUpdate={this.update}/>
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

export default MotifsTable;