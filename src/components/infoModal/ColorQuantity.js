import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'

import '../../styles/modal.css';
import ModalButton from '../button/ModalButton.js'

import EditInventory from '../edit/EditInventory.js'

class ColorQuantity extends Component {
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

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/products/colors/' + self.props.prod_id, {
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

    update = () => {
        let self = this;
        fetch('http://localhost:3001/v1/products/colors/' + self.props.prod_id, {
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
							        <Table.HeaderCell style={{width: '10%'}}>Product Color</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '10%'}}>Product Quantity</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '5%'}}></Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>

							    <Table.Body>
							    {this.state.data.map(prod =>
							    	 <Table.Row>
								        <Table.Cell>{prod.product_color}</Table.Cell>
								        <Table.Cell>{prod.product_quantity}</Table.Cell>
								        <Table.Cell textAlign='center'>
								        	<EditInventory handleUpdate={this.update} data={prod} table={'purchase'} updateInventory={this.props.updateInventory}/>
								        </Table.Cell>
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

export default ColorQuantity;