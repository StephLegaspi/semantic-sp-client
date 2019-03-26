import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'

import EditOrderRental from '../edit/EditOrderRental.js'
import ModalButton from '../button/ModalButton.js'


import '../../styles/modal.css';

class RentalInfo extends Component {
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
	
		fetch(`http://localhost:3001/v1/order_rentals/`+ this.props.order_id,{
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

	updateModal = () => {
        let self = this;
        fetch(`http://localhost:3001/v1/order_rentals/`+ this.props.order_id, {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({data: result.data});
        }).catch(err => {
        	console.log(err);
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
							        <Table.HeaderCell style={{width: '15%'}}>Rental Duration</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '20%'}}>Rental Due Date</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '20%'}}>Rental Status</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '20%'}}>Returned Timestamp</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>

							    <Table.Body>
							    {this.state.data.map(order =>
							    	 <Table.Row>
								        <Table.Cell>{order.rental_duration}</Table.Cell>
								        <Table.Cell>Cell</Table.Cell>
								        <Table.Cell>{order.rental_status}</Table.Cell>
								     	<Table.Cell>{order.returned_timestamp2}</Table.Cell>
								     	<Table.Cell>
								     		<EditOrderRental order_id={this.props.order_id} handleUpdateModal={this.updateModal} statusButton={(this.props.orderStatus==='Delivered' && order.rental_status!=='Returned') ? false : true} handleUpdate={this.props.handleUpdate}/>
								     	</Table.Cell>
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

export default RentalInfo;