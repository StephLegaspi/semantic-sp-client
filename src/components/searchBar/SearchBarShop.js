import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

import SearchBarButton from '../button/SearchBarButton.js'

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
						   <input onChange={this.props.inputChange}/>
					    	<SearchBarButton handleSearch={this.props.searchData}/> 
						
					</Input>
				</div>
				
				
			</div>
		);
	}

}

export default SearchBarShop;