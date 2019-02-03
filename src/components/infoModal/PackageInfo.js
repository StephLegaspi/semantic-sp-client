import React, { Component } from 'react';
import { Button, Table, List, Icon } from 'semantic-ui-react'

import '../../styles/modal.css';
import ViewButton from '../button/ViewButton.js'

class PackageInfo extends Component {
	constructor(props){
		super(props);
		this.state = {
			modal: false,
			data: []
		}
	}


	onModal = () => {
		this.setState({modal: true});
	}

	onClose = () => {
		this.setState({modal: false})
	}

	render() {
		return (
			<div>
				<ViewButton handleView={this.onModal}/>
					        {this.state.modal && (<div className='custom-modal'>
								<div>
									<div className="open-box">

										<h1 className='title-font'> Inclusions </h1>
										<List style={{marginLeft: '5%', color:'#16163a'}}>
										    <List.Item>
										      <List.Icon name='plus' size='large'/>
										      <List.Content>Appetizer</List.Content>
										    </List.Item>
										    <List.Item>
										      <List.Icon name='plus' size='large'/>
										      <List.Content>Appetizer</List.Content>
										    </List.Item>
										  </List>
								    	<Button  className='close' onClick={this.onClose}> Close </Button>
								   
								    </div>
							    </div>
								</div>)}
			</div>
		);
	}

}

export default PackageInfo;