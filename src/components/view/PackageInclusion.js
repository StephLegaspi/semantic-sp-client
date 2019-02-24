import React, { Component } from 'react';
import { List } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import '../../styles/font.css';


class PackageInclusion extends Component {
	constructor(props){
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Package 1'}/>

				<div class="ui fluid segment" id='inclusion-holder'>
					<p className='title-header'> Package 1</p>
					<p className='body-font'>  P 1500 per person </p>
					<List style={{color: '#16163a'}}>
						<List.Item>
							<List.Icon name='plus' size='large'/>
							<List.Content>Appetizer</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name='plus' size='large'/>
							<List.Content>Appetizer</List.Content>
						</List.Item>
					</List>
				</div>
				
				<Footer/>
				
			</div>
		);
	}
}

export default PackageInclusion;