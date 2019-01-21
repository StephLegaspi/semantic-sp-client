import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'


import './assets/index.css';

class OrderInfo extends Component {
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
				<Button id= 'modal-button2' onClick={this.onModal}> View</Button>
					        {this.state.modal && (<div className='custom-modal'>
								<div>
								<div className="open">
								<Table celled>
							    <Table.Header>
							      <Table.Row>
							        <Table.HeaderCell style={{width: '20%'}}>Product Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '15%'}}>Product Color</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Quantity</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '15%'}}>Total Price</Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>
							    <Table.Body>
							    	 <Table.Row>
								        <Table.Cell>Cell3</Table.Cell>
								        <Table.Cell>Cell3</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								      </Table.Row>
								      <Table.Row>
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

export default OrderInfo;