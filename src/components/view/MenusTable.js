import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import DeleteModal from '../delete/DeleteModal.js'
import EditMenu from '../edit/EditMenu.js'
import AddMenu from '../add/AddMenu.js'

import ModalButton from '../button/ModalButton2.js'

import '../../styles/view.css';

class MenusTable extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			menu_name: ""
		}	

		this.toMenusPortfolio = this.toMenusPortfolio.bind(this);	
	}

	toMenusPortfolio(id) {
		this.props.history.push('/menu-inclusion/' + id);
	}

	handleMenuChange = (e) => {
	    this.setState({ menu_name: e.target.value},() => { 
	    	if(this.state.menu_name === ""){
	    		this.update();	
	    	}else{
	    		this.searchByName(); 
	    	}
	    })
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/food_menus', {
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
        fetch('http://localhost:3001/v1/food_menus', {
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
        fetch('http://localhost:3001/v1/food_menus/search/' + self.state.menu_name, {
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
				<HeaderBar headerTitle={'Menus'}/>
				<SearchBarTable titleHolder={'Search menu name..'} searchData={this.searchByName} inputChange={this.handleMenuChange}/>

				<AddMenu handleUpdate={this.update}/>

				<div className='table-div'>
				<Table single line>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell >ID</Table.HeaderCell>
				        <Table.HeaderCell >Menu Name</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}>Inclusions</Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				    {this.state.data.map(menu =>
				      <Table.Row>
				        <Table.Cell>{menu.id}</Table.Cell>
				        <Table.Cell>{menu.name}</Table.Cell>
				        <Table.Cell>
				        	<ModalButton  handleClickModal={this.toMenusPortfolio} data_id={menu.id}/>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<EditMenu data={menu} handleUpdate={this.update}/>
				        </Table.Cell>
				        <Table.Cell textAlign='center'>
				        	<DeleteModal data_id={menu.id} table_name={'food_menus'} handleUpdate={this.update}/>
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

export default MenusTable;