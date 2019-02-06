import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

import '../../styles/button.css';

class DropdownCategory extends Component{

	constructor(props){
		super(props);

		this.state = {}	
		this.stateOptions = [ { key: '1', value: '1', text: 'All' }, { key: '2', value: '2', text: 'Table' }, { key: '3', value: '3', text: 'Three' } ]

	}

	render(){
		return(
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
		);
	}
}


export default DropdownCategory;