import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'

import '../../styles/button.css';
import '../../styles/modal.css';

class OutOfStockRental extends Component {
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
				<Button animated circular id='circle-dashboard' onClick={this.onModal}>
                    <Button.Content visible id='circle-visible'>10</Button.Content>
                    <Button.Content hidden className='label-font2'>
                      View
                    </Button.Content>
                  </Button>
					        {this.state.modal && (<div className='custom-modal'>
								<div>
								<div className="open">
								<Table celled>
							    <Table.Header>
							      <Table.Row>
							        <Table.HeaderCell style={{width: '20%'}}>Product ID</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '20%'}}>Product Name</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Total Quantity</Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>
							    <Table.Body>
							    	 <Table.Row>
								        <Table.Cell>cell</Table.Cell>
								        <Table.Cell>YAAAAh</Table.Cell>
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

export default OutOfStockRental;