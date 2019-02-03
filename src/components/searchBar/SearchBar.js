import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

import '../../styles/search-bar.css';

class HeaderBar extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				<div id='search-bar'>
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

export default HeaderBar;