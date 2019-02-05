import React, { Component } from 'react';
import { Dropdown, Tab, Input } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBar from '../searchBar/SearchBar.js'
import InventoryTable from './InventoryTable.js'

import '../../styles/view.css';

class Inventory extends Component {
	constructor(props){
		super(props);

		this.state = {}
		this.stateOptions = [ { key: '1', value: '1', text: 'All' }, { key: '2', value: '2', text: 'Table' }, { key: '3', value: '3', text: 'Three' } ]
		this.panes = [
			  {
			    menuItem: { key: 'purchase', icon: 'tasks', content: 'Products for purchase', color: 'orange' },
			    render: () => 
			    		<Tab.Pane> 
							<InventoryTable/>    
						</Tab.Pane>,
			  },
			  {
			    menuItem: { key: 'rental', icon: 'newspaper', content: 'Products for rent', color: 'orange' },
			    render: () => <Tab.Pane>  </Tab.Pane>,
			  }
			];
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Inventory'}/>
				<div id='search-bar3'>
					<Input style={{width: '40%'}} type='text' placeholder='search' action>
					    <input />
					    <label class="ui icon button" id='search-bar-button'>
							<i class="large search icon" style={{paddingRight: '5px', width:'20px'}}></i>  
						</label>
					</Input>
				</div>
  				

      			<div class="ui fluid segment" id='upper-div5'>  
					<label>
					  Product Category: {' '}
					  <Dropdown
					    inline
					    options={this.stateOptions}
					    defaultValue={this.stateOptions[0].value}
					  />
					</label>
      			</div>

				<Tab panes={this.panes} menu={{ fluid: true, pointing: true }} className='table-div'/>

			</div>
		);
	}

}

export default Inventory;