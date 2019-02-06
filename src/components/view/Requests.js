import React, { Component } from 'react';
import { Dropdown, Tab } from 'semantic-ui-react'

import RequestsTable from './RequestsTable.js'
import HeaderBar from '../headerBar/HeaderBar.js'
import SearchBarTable from '../searchBar/SearchBarTable.js'

import '../../styles/view.css';

class ViewRequests extends Component {
	constructor(props){
		super(props);

		this.state = {
			
		}
		

		this.stateOptions = [ { key: 'all', value: 'all', text: 'All' }, { key: 'pending', value: 'pending', text: 'Pending' }, { key: 'success', value: 'success', text: 'Successful' }, { key: 'unsuccessful', value: 'unsuccessful', text: 'Unsuccessful' } ]
		this.panes = [
			  {
			    menuItem: { key: 'purchase', icon: 'tasks', content: 'Products for purchase', color: 'orange' },
			    render: () => 
			    		<Tab.Pane> 
							<RequestsTable/>    
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
				<HeaderBar headerTitle={'Requests'}/>
				<SearchBarTable titleHolder={'Search customer name..'}/>

				<div class="ui fluid segment" id='upper-div5'> 
      				<label>
					  Request Status: {' '}
					  <Dropdown
					    inline
					    options={this.stateOptions}
					    defaultValue='all'
					  />
					</label>
      			</div>

      			<Tab panes={this.panes} menu={{ fluid: true, pointing: true }} className='table-div'/>
				
			</div>
		);
	}

}

export default ViewRequests;