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

	componentDidMount(){
		fetch(`http://localhost:3001/v1/customers/`+ this.props.customer_id,{
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

	updateCustomer = () => {
		fetch(`http://localhost:3001/v1/customers/`+ this.props.customer_id,{
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
		this.updateCustomer();
	}

	onClose = () => {
		this.setState({modal: false})
	}

	render() {
		return (
			<div>
				<ViewButton handleView={this.onModal}/>
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
							    {this.state.data.map(customer =>
							    	 <Table.Row>
								        <Table.Cell>{customer.address}</Table.Cell>
								        <Table.Cell>{customer.zip_code}</Table.Cell>
								      </Table.Row>
								)}
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