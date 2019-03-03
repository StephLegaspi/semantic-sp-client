import React, { Component } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react'

import PackageInfo from '../infoModal/PackageInfo.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import DeleteModal from '../delete/DeleteModal.js'
import EditPackage from '../edit/EditPackage.js'
import AddPackage from '../add/AddPackage.js'

import '../../styles/view.css';

class PackagesTable extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			package_name: "",
			package_price: 0.0,
			package_inclusion: []
			
		}		

		this.stateOptions = [ { key: 'all', value: 'all', text: 'All' }, { key: 'pending', value: 'pending', text: 'Pending' }, { key: 'on-delivery', value: 'on-delivery', text: 'On-delivery' }, { key: 'delivered', value: 'delivered', text: 'Delivered' } ]
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/packages', {
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
        fetch('http://localhost:3001/v1/packages', {
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

    deletePackage = (id) => {
    	fetch(`http://localhost:3001/v1/packages/`+ id,{
		      method: "DELETE"
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				if(result.status){
					console.log("Successfully deleted package");
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
				<HeaderBar headerTitle={'Packages'}/>
				<SearchBarTable titleHolder={'Search package name..'}/>

				<AddPackage handleUpdate={this.update}/>

				<div className='table-div'>
				<Table celled>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell >ID</Table.HeaderCell>
				        <Table.HeaderCell >Package Name</Table.HeaderCell>
				        <Table.HeaderCell >Price</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '7%'}}>Inclusions</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				    {this.state.data.map(pkg =>
					      <Table.Row>
					        <Table.Cell>{pkg.id}</Table.Cell>
					        <Table.Cell>{pkg.name}</Table.Cell>
					        <Table.Cell>{pkg.price}</Table.Cell>
					        <Table.Cell>
					        	<PackageInfo pkg_id={pkg.id}/>
					        </Table.Cell>
					        <Table.Cell textAlign='center'>
					        	<EditPackage pkg_id={pkg.id} handleUpdate={this.update}/>
					        </Table.Cell>
					        <Table.Cell textAlign='center'>
					        	<DeleteModal pkg_id={pkg.id} deleteData={this.deletePackage}/>
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

export default PackagesTable;