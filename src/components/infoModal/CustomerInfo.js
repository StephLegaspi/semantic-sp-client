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

	componentDidMount(){
	
		fetch(`http://localhost:3001/v1/customers/modal/`+ this.props.customer_id,{
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
							    {this.state.data.map(customer =>
							    	 <Table.Row>
								        <Table.Cell>{customer.id}</Table.Cell>
								        <Table.Cell>{customer.first_name}</Table.Cell>
								        <Table.Cell>{customer.middle_name}</Table.Cell>
								        <Table.Cell>{customer.last_name}</Table.Cell>
								        <Table.Cell>{customer.email_address}</Table.Cell>
								        <Table.Cell>{customer.contact_number}</Table.Cell>
								      </Table.Row>
							    )}
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