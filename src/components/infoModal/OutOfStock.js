import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'

import '../../styles/dashboard.css';
import '../../styles/modal.css';
import '../../styles/font.css';

class OutOfStock extends Component {
	constructor(props){
		super(props);
		this.state = {
			modal: false,
			count: 0,
			data: []
		}
	}


	onModal = () => {
		this.getOutOfStock();
		this.setState({modal: true});
	}

	onClose = () => {
		this.setState({modal: false})
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/inventories/' + this.props.category +'/out-of-stock-count', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({count: result.data[0].count});
        }).catch(err => {
        	console.log(err);
        })
    }

    getOutOfStock = () => {
        let self = this;
        fetch('http://localhost:3001/v1/inventories/' + this.props.category +'/out-of-stock', {
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
				<Button animated circular id='circle-dashboard'  onClick={this.onModal}>
                    <Button.Content visible>
                    	<label className='circle-font'> {this.state.count } </label>
                    </Button.Content>
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
							    {this.state.data.map(product =>
							    	 <Table.Row>
								        <Table.Cell>{product.id}</Table.Cell>
								        <Table.Cell>{product.name}</Table.Cell>
								        <Table.Cell>{product.total_quantity}</Table.Cell>
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

export default OutOfStock;