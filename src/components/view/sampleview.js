import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'


import './index.css';

class sampleview extends Component {
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
				<Button color="red"  id='modal_button' onClick={this.onModal}> Legal History</Button>
				{this.state.modal && (<div className='searchModal'>
					<div>
					<div className="multivalued">
					<Table celled>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell>Legal History</Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>
				    <Table.Body>

				    
				    </Table.Body>
				    </Table>
				    </div>
				    <Button color="red" className='close' onClick={this.onClose}> Close </Button>
				    </div>
					</div>)}
			</div>
		);
	}

}

export default sampleview;