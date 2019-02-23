import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'

import '../../styles/modal.css';
import ViewButton from '../button/ViewButton.js'

class CustomerProfile extends Component {
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
				<ViewButton handleClickModal={this.onModal}/>
					        {this.state.modal && (<div className='custom-modal'>
								<div>
								<div className="open-profile">
								<Table celled>
							    <Table.Header>
							      <Table.Row>
							        <Table.HeaderCell>Address</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '20%'}}>Zip Code</Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>
							    <Table.Body>
							    	 <Table.Row>
								        <Table.Cell>cell</Table.Cell>
								        <Table.Cell>YAAAAh</Table.Cell>
								      </Table.Row>
								      
							    </Table.Body>
							    <Button className='close-profile' onClick={this.onClose}> Close </Button>
							    </Table>
							    </div>
							    </div>
								</div>)}
			</div>
		);
	}


}

export default CustomerProfile;