import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditInventory extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			total_quantity: '',
			date: ''
		}
		this.handleQuantityChange = this.handleQuantityChange.bind(this);
	}

	handleQuantityChange(e) { this.setState({total_quantity: e.target.value}); }

	onModal = () => {
		this.getData();
		this.setState({activeModal: true});
	}

	cancel = () => {
		this.setState({activeModal: false});
	}

	getData = () => {
		this.setState({total_quantity: this.props.data.total_quantity})
	}

	submitEdit = () => {

        const inventory = JSON.stringify({total_quantity: this.state.total_quantity})
       
        fetch(`http://localhost:3001/v1/inventories/` + this.props.data.id,{
            headers: { 'Content-Type': 'application/json' },
            method: "PUT",
            body: inventory
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status){
            this.props.handleUpdate()
            this.setState({activeModal: false})
          }
          this.getData()
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
	                    <label>Total Quantity</label>
	                    <Input placeholder='Total Quantity'defaultValue={this.props.data.total_quantity} onChange={this.handleQuantityChange}/>
	                  </Form.Field>
	                
				    <Button type='submit' onClick={this.submitEdit} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditInventory;