import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

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
			package_name: ""
		}		

		this.stateOptions = [ { key: 'all', value: 'all', text: 'All' }, { key: 'pending', value: 'pending', text: 'Pending' }, { key: 'on-delivery', value: 'on-delivery', text: 'On-delivery' }, { key: 'delivered', value: 'delivered', text: 'Delivered' } ]

		
	}

	handlePackageChange = (e) => {
	    this.setState({ package_name: e.target.value},() => { 
	    	if(this.state.package_name === ""){
	    		this.update();	
	    	}else{
	    		this.searchByName(); 
	    	}
	    })
	}

	searchByName = () => {
        let self = this;
        fetch('http://localhost:3001/v1/packages/search/' + self.state.package_name, {
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


	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Packages'}/>
				<SearchBarTable titleHolder={'Search package name..'} searchData={this.searchByName} inputChange={this.handlePackageChange}/>

				<AddPackage handleUpdate={this.update}/>

				<div className='table-div'>
				<Table>
				    <Table.Header>
				      <Table.Row>
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
					        <Table.Cell>{pkg.name}</Table.Cell>
					        <Table.Cell>{pkg.price}</Table.Cell>
					        <Table.Cell>
					        	<PackageInfo pkg_id={pkg.id}/>
					        </Table.Cell>
					        <Table.Cell textAlign='center'>
					        	<EditPackage data={pkg} handleUpdate={this.update}/>
					        </Table.Cell>
					        <Table.Cell textAlign='center'>
					        	<DeleteModal data_id={pkg.id} table_name={'packages'} handleUpdate={this.update}/>
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

export default PackagesTable;