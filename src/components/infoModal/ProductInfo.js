import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'

import ModalButton from '../button/ModalButton.js'
import '../../styles/modal.css';

class ProductInfo extends Component {
	constructor(props){
		super(props);
		this.state = {
			modal: false,
			data: []
		}
	}


	onModal = () => {
		this.updateProducts();
		this.setState({modal: true});
	}

	onClose = () => {
		this.setState({modal: false})
	}

	componentDidMount(){
	
		fetch(`http://localhost:3001/v1/products/`+ this.props.prod_id,{
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

	updateProducts = () => {
		fetch(`http://localhost:3001/v1/products/`+ this.props.prod_id,{
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
							        <Table.HeaderCell style={{width: '20%'}}>ID</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '30%'}}>Description</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '30%'}}>Price</Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>

							    <Table.Body>
							    {this.state.data.map(product =>
							    	 <Table.Row>
								        <Table.Cell>{product.id}</Table.Cell>
								        <Table.Cell>{product.description}</Table.Cell>
								        <Table.Cell>{product.price}</Table.Cell>
								      </Table.Row>
							    )}
							    </Table.Body>

							    <Button className='close2' onClick={this.onClose}> Close </Button>
							    </Table>
							    </div>
							    </div>
								</div>)}
			</div>
		);
	}

}

export default ProductInfo;