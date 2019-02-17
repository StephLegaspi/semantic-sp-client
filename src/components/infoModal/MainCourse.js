import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react'

import '../../styles/modal.css';
import ModalButton from '../button/ModalButton.js'

class MainCourse extends Component {
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
								
									<div className="open-box">

										<h1 className='title-font'> Main Course/s </h1>
										<List style={{marginLeft: '10%', color:'#16163a'}}>
										    <List.Item >
										      <List.Icon name='food' size='large'/>
										      <List.Content >Main Courser</List.Content>
										    </List.Item>
										    <List.Item>
										      <List.Icon name='food' size='large'/>
										      <List.Content>Main Course</List.Content>
										    </List.Item>
										</List>
								    	<Button  className='close' onClick={this.onClose}> Close </Button>
								   
								    </div>
							    
								</div>)}
			</div>
		);
	}

}

export default MainCourse;