import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react'

import '../../styles/modal.css';
import ModalButton from '../button/ModalButton.js'

class Dessert extends Component {
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
				<ModalButton handleClickModal={this.onModal}/>
					        {this.state.modal && (<div className='custom-modal'>
								<div>
									<div className="open-box">
										<h1 className='title-font'> Dessert/s </h1>
										<List style={{marginLeft: '5%', color:'#16163a'}}>
										    <List.Item>
										      <List.Icon name='food' size='large'/>
										      <List.Content>Dessert</List.Content>
										    </List.Item>
										    <List.Item>
										      <List.Icon name='food' size='large'/>
										      <List.Content>Dessert</List.Content>
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

export default Dessert;