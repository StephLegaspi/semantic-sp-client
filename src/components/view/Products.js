import React, { Component } from 'react';
import { Dropdown, Tab } from 'semantic-ui-react'

import ProductsTable from './ProductsTable.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'
import AddButton from '../button/AddButton.js'

import '../../styles/view.css';

class ViewProducts extends Component {
	constructor(props){
		super(props);

		this.state = {}
		
		this.stateOptions = [ { key: '1', value: '1', text: 'All' }, { key: '2', value: '2', text: 'Table' }, { key: '3', value: '3', text: 'Three' } ]
		this.panes = [
			  {
			    menuItem: { key: 'purchase', icon: 'tasks', content: 'Products for purchase', color: 'orange' },
			    render: () => 
			    		<Tab.Pane> 
							<ProductsTable/>    
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
				<HeaderBar headerTitle={'Products'}/>
				<SearchBarTable titleHolder={'Search product name..'}/>

				<AddButton/>
				
				
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

export default ViewProducts;