import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'

import './assets/index.css';

class ProductInfo extends Component {
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
				<Button id= 'modal-button' onClick={this.onModal}> View</Button>
					        {this.state.modal && (<div className='custom-modal'>
								<div>
								<div className="open">
								<Table celled>
							    <Table.Header>
							      <Table.Row>
							        <Table.HeaderCell style={{width: '20%'}}>ID</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '30%'}}>Description</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '30%'}}>Price</Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>
							    <Table.Body>
							    	 <Table.Row>
								        <Table.Cell>cell</Table.Cell>
								        <Table.Cell>YAAAAh</Table.Cell>
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

export default ProductInfo;