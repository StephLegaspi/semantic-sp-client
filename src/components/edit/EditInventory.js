import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditInventory extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			total_quantity: '',

			total_quantity_error: false,
	        form_complete: '',
	        prompt_message: '',
	        prompt_header: ''
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

	checkForm = () => {
	    var error = false;

	    if(this.state.total_quantity === ''){
	      this.setState({total_quantity_error: true});
	      error=true;
	    }

	    if(error){
	      this.setState({form_complete: false});
	      this.setState({prompt_header: 'Incomplete Information'}); 
	      this.setState({prompt_message: 'Please fill up all the required fields.'});  
	    }else{
	      this.setState({form_complete: true});
	      this.submitEdit();
	      this.setState({total_quantity: ''});
	      this.setState({total_quantity_error: ''});
	    }

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
	                <Form.Input width={8} required control='input' type='number' min={1} label='Total Quantity' placeholder='Total Quantity'defaultValue={this.props.data.total_quantity} onChange={this.handleQuantityChange}/>
	                
	                {(this.state.form_complete===false) ?
	                  <Message
	                    header={this.state.prompt_header}
	                    content={this.state.prompt_message}
	                  />
	                : ''}

				    <Button type='submit' onClick={this.checkForm} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditInventory;