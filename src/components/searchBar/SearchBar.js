import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

import SearchBarButton from '../button/SearchBarButton.js'

import '../../styles/search-bar.css';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				<div id='search-bar'>
					<Input style={{width: '40%'}} type='text' placeholder={this.props.titleHolder} action>
					    <input onChange={this.props.inputChange}/>
					    <SearchBarButton handleSearch={this.props.searchData}/> 
					</Input>
				</div>
			</div>
		);
	}

}

export default SearchBar;