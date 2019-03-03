import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react'

import '../../styles/modal.css';
import ModalButton from '../button/ModalButton.js'

class PackageInfo extends Component {
	constructor(props){
		super(props);
		this.state = {
			modal: false,
			data: []
		}
	}

	componentDidMount(){
	
		fetch(`http://localhost:3001/v1/packages/inclusions/`+ this.props.pkg_id,{
		      headers: { 'Content-Type': 'application/json' },
		      method: "GET"
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				this.setState({data: result.data})
			})
			.catch((e) => {
				console.log(e)
			})
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

										<h1 className='title-font'> Inclusions </h1>

										{this.state.data.map(pkg =>
										<List style={{marginLeft: '5%', color:'#16163a'}}>
										    <List.Item>
										      <List.Icon name='plus' size='large'/>
										      <List.Content>{pkg.inclusion}</List.Content>
										    </List.Item>
										</List>
										)}
								    	<Button  className='close' onClick={this.onClose}> Close </Button>
								   
								    </div>
							    </div>
								</div>)}
			</div>
		);
	}

}

export default PackageInfo;