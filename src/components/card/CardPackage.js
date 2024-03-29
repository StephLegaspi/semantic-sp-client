import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Button, Icon, Header } from 'semantic-ui-react'

import '../../styles/card.css';
import '../../styles/button.css';
import '../../styles/font.css';


class CardPackage extends Component {
	constructor(props){
		super(props);

		this.state = {}
		this.toPackages = this.toPackages.bind(this);
	}

	toPackages(e) {
	    window.location.href='/packages';
	}

	render() {
		return (
				
 			<div id='card-request'>
				 	<div id='icon-holder'>
				 		<Icon name='gift' size='massive'/>
				 	</div>
					<Header id='card-header'>Browse through our catering packages and see what fits your needs and budget.</Header>
					<Button  size='small' id='card-button' onClick={this.toPackages}> 
				    	<Icon name='gift' size='large'/>
				    	View Packages 
					</Button>
				
			</div>
			
		);
	}

}

export default withRouter(CardPackage);