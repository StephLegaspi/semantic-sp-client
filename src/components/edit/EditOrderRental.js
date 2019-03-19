import React, { Component } from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditOrder extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			status: '',
			data: []
		}

		this.handleStatusChange = this.handleStatusChange.bind(this);

		this.deliveryStatusOptions = [{ key: 'pending', value: 'Pending', text: 'Pending' }, { key: 'on-delivery', value: 'On-delivery', text: 'On-delivery' }, { key: 'delivered', value: 'Delivered', text: 'Delivered' } ]
		this.rentalStatusOptions = [{ value: 'Pending', text: 'Pending' }, { value: 'On-rent', text: 'On-rent' }, { value: 'Returned', text: 'Returned' } ]
	}

	handleStatusChange = (e, { value }) => {
	    this.setState({status: value});
	}

	onModal = () => {
		this.getData();
		this.setState({activeModal: true});
	}

	cancel = () => {
		this.setState({activeModal: false});
	}

	getData = () => {
        fetch(`http://localhost:3001/v1/order_rentals/limit/`+ this.props.order_id,{
		      headers: { 'Content-Type': 'application/json' },
		      method: "GET"
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				this.setState({status: result.data[0].rental_status})
				console.log(this.state.status)
			})
			.catch((e) => {
				console.log(e)
			})

	
    }

	submitEdit = () => {

        const order = JSON.stringify({rental_status: this.state.status})
       
        fetch(`http://localhost:3001/v1/orders/rental/` + this.props.order_id,{
            headers: { 'Content-Type': 'application/json' },
            method: "PUT",
            body: order
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status===200){
            this.props.handleUpdate()
            this.setState({activeModal: false})
          	this.getData()
          }
        })
        .catch((e) => {
          console.log(e)
        })
  	}

	render(){
		return(
		<div>
		<EditButton handleEdit={this.onModal}/>
      	{this.state.activeModal && (
	      	<div className='edit-modal'>
	      		<Form className='forms'>

					<Form.Field width={8}>
	                    <label>Rental Status</label>
	                     <Dropdown placeholder='Rental Status' defaultValue={this.state.status} search selection options={this.rentalStatusOptions} onChange={this.handleStatusChange}/>
	                  </Form.Field>
	                <br/>
	                <br/>
	                <br/>
	                <br/>
				    <Button type='submit' onClick={this.submitEdit} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditOrder;