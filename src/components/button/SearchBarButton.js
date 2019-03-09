import React, { Component } from 'react';

import '../../styles/search-bar.css';

class SearchBarButton extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	callSearch = () => {
		this.props.handleSearch();
	}

	render() {
		return (
			<div>
				
					    <label class="ui icon button" id='search-bar-button' onClick={this.callSearch}>
							<i class="large search icon" style={{paddingRight: '5px', width:'20px'}}></i>  
						</label>
			</div>
		);
	}

}

export default SearchBarButton;