import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'

import ModalButton2 from '../button/ModalButton2.js'
import '../../styles/modal.css';

class InclusionInfo extends Component {
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
				<ModalButton2 handleClickModal={this.onModal}/>
					        {this.state.modal && (<div className='custom-modal'>
								<div>
								<div className="open">
								<Table celled>
							    <Table.Header>
							      <Table.Row>
							        <Table.HeaderCell style={{width: '20%'}}>Package</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '20%'}}>Event Motif</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '20%'}}>Food Menu</Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>
							    <Table.Body>
							    	 <Table.Row>
								        <Table.Cell>Cell3</Table.Cell>
								        <Table.Cell>Cell3</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row> 
							    </Table.Body>
							    <Button color="red" className='close' onClick={this.onClose}> Close </Button>
							    </Table>
							    </div>
							    </div>
								</div>)}
			</div>
		);
	}

}

export default InclusionInfo;