import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'

import '../../styles/modal.css';
import ModalButton from '../button/ModalButton.js'

class CustomerInfo extends Component {
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
								<div className="open">
								<Table celled>
							    <Table.Header>
							      <Table.Row>
							        <Table.HeaderCell style={{width: '10%'}}>ID</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>First Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Middle Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Last Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Email Address</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Contact Number</Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>
							    <Table.Body>
							    	 <Table.Row>
								        <Table.Cell>cell</Table.Cell>
								        <Table.Cell>YAAAAh</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row> 
							    </Table.Body>
							    <Button className='close' onClick={this.onClose}> Close </Button>
							    </Table>
							    </div>
							    </div>
								</div>)}
			</div>
		);
	}

}

export default CustomerInfo;