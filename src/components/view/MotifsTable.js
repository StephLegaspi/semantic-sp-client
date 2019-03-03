import React, { Component } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react'

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
			data: []
		}		

		this.stateOptions = [ { key: 'all', value: 'all', text: 'All' }, { key: 'pending', value: 'pending', text: 'Pending' }, { key: 'on-delivery', value: 'on-delivery', text: 'On-delivery' }, { key: 'delivered', value: 'delivered', text: 'Delivered' } ]
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

    deleteMotif = (id) => {
    	fetch(`http://localhost:3001/v1/event_motifs/`+ id,{
		      method: "DELETE"
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				if(result.status){
					console.log("Successfully deleted motif");
				}
				this.update();
			})
			.catch((e) => {
				console.log(e)
			})
    }

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Motifs'}/>
				<SearchBarTable titleHolder={'Search motif name..'}/>

				<AddMotif handleUpdate={this.update}/>

				<div className='table-div'>
				<Table celled>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell >ID</Table.HeaderCell>
				        <Table.HeaderCell >Motif Name</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '50%'}}>Description</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				    {this.state.data.map(motif =>
					    <Table.Row>
					        <Table.Cell>{motif.id}</Table.Cell>
					        <Table.Cell>{motif.name}</Table.Cell>
					        <Table.Cell>{motif.description}</Table.Cell>
					        <Table.Cell textAlign='center'>
					        	<EditMotif motif_id={motif.id} handleUpdate={this.update}/>
					        </Table.Cell>
					        <Table.Cell textAlign='center'>
					        	<DeleteModal data_id={motif.id} deleteData={this.deleteMotif}/>
					        </Table.Cell>
					    </Table.Row>  
					)} 
				    </Table.Body>

				    <Table.Footer>
				      <Table.Row>
				        <Table.HeaderCell colSpan='11'>
				          <Menu floated='right' pagination >
				            <Menu.Item as='a' icon>
				              <Icon name='chevron left' />
				            </Menu.Item>
				            <Menu.Item as='a'>1</Menu.Item>
				            <Menu.Item as='a'>2</Menu.Item>
				            <Menu.Item as='a'>3</Menu.Item>
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

export default MotifsTable;