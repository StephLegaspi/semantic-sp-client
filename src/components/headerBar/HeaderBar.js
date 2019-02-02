import React, { Component } from 'react';


import '../../styles/header-bar.css';

class HeaderBar extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				
				<div id='bar'>
					<h1 id='bar-title'> {this.props.headerTitle} </h1>
				</div>
			</div>
		);
	}

}

export default HeaderBar;