import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

import '../../styles/search-bar.css';

class SearchBarShop extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				
				<div id='search-bar2'>
					<Input style={{width: '500px'}} type='text' placeholder='Search product name.. ' action>
						   <input />
						   <label class="ui icon button" style={{backgroundColor: '#f89d28', color:'white'}}>
							<i class="large search icon" style={{paddingRight: '5px', width:'20px'}}></i>  
						</label>
					</Input>
				</div>
				
				
			</div>
		);
	}

}

export default SearchBarShop;