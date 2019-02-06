import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

import '../../styles/search-bar.css';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				<div id='search-bar3'>
					<Input style={{width: '40%'}} type='text' placeholder={this.props.titleHolder} action>
					    <input />
					    <label class="ui icon button" id='search-bar-button'>
							<i class="large search icon" style={{paddingRight: '5px', width:'20px'}}></i>  
						</label>
					</Input>
				</div>
			</div>
		);
	}

}

export default SearchBar;