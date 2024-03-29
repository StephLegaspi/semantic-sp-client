import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react'

import ModalButton2 from '../button/ModalButton.js'
import '../../styles/modal.css';

class InclusionInfo extends Component {
	constructor(props){
		super(props);
		this.state = {
			modal: false,
			data: [],
            inclusions: ''
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
        fetch('http://localhost:3001/v1/requests/' + this.props.request_id, {
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

        fetch('http://localhost:3001/v1/requests/inclusion/' + this.props.request_id, {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({inclusions: result.data[0]});
        }).catch(err => {
            console.log(err);
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
							        <Table.HeaderCell style={{width: '20%'}}>Package</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '20%'}}>Event Motif</Table.HeaderCell>
							        <Table.HeaderCell style={{width: '20%'}}>Food Menu</Table.HeaderCell>
							      </Table.Row>
							    </Table.Header>

							    <Table.Body>
							    {this.state.data.map(request =>
							    	 <Table.Row>
								        <Table.Cell>{request.package_id} - {this.state.inclusions.Package}</Table.Cell>
								        <Table.Cell>{request.motif_id} - {this.state.inclusions.EventMotif}</Table.Cell>
								        <Table.Cell>{request.menu_id} - {this.state.inclusions.FoodMenu}</Table.Cell>
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

export default InclusionInfo;