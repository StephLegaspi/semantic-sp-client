import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'

import ModalButton2 from '../button/ModalButton2.js'
import '../../styles/modal.css';

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

	componentDidMount(){
	
		fetch(`http://localhost:3001/v1/shopping_cart/products/`+ this.props.cart_id,{
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
				<ModalButton2 handleClickModal={this.onModal}/>
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
							    {this.state.data.map(order =>
							    	 <Table.Row>
								        <Table.Cell>{order.name}</Table.Cell>
								        <Table.Cell>{order.product_color_name}</Table.Cell>
								        <Table.Cell>{order.product_quantity}</Table.Cell>
								        <Table.Cell>{order.product_total_price}</Table.Cell>
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

export default OrderInfo;