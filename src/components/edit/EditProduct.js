import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditProduct extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			name: "",
    		price: "",
    		description: "",
    		display_product: ""
		}
		this.handleNameChange = this.handleNameChange.bind(this);
	    this.handlePriceChange = this.handlePriceChange.bind(this);
	    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
	    this.handleDisplayChange = this.handleDisplayChange.bind(this);
	}

	handleNameChange(e) { this.setState({name: e.target.value}); }
  	handlePriceChange(e) { this.setState({price: e.target.value}); }
  	handleDescriptionChange(e) { this.setState({description: e.target.value}); }
  	handleDisplayChange(e) { 
  		if(this.state.display_product){
  			this.setState({display_product: 0}); 
  		}else{
  			this.setState({display_product: 1});
  		}
  	}

	onModal = () => {
		this.getData();
		this.setState({activeModal: true});
	}

	cancel = () => {
		this.setState({activeModal: false});
	}

	getData = () => {

		this.setState({name: this.props.data.name})
		this.setState({price: this.props.data.price})
		this.setState({description: this.props.data.description})
		this.setState({display_product: this.props.data.display_product})
		
	}

	submitEdit = () => {

        const prod = JSON.stringify({name: this.state.name, price: this.state.price, description: this.state.description, display_product: this.state.display_product})
       
        fetch(`http://localhost:3001/v1/products/` + this.props.data.id,{
            headers: { 'Content-Type': 'application/json' },
            method: "PUT",
            body: prod
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
					
	                <Form.Group widths='equal'>
	                	<Form.Field>
		                  <label>Product Name</label>
		                  <Input placeholder='Product Name' defaultValue={this.props.data.name} onChange={this.handleNameChange}/>
		                </Form.Field>
	                	<Form.Field>
		                    <label>Price</label>
		                    <Input placeholder='Price' defaultValue={this.props.data.price} onChange={this.handlePriceChange}/>
	                	</Form.Field>
	                </Form.Group>

	                <Form.Field>
	                    <label>Description</label>
	                    <Input placeholder='Description' defaultValue={this.props.data.description} onChange={this.handleDescriptionChange}/>
	                 </Form.Field>

	                <Form.Group inline>
	                  <label>Product Image: </label>
	                  <Form.Field className="relative">
	                      <input type="file" class="inputfile" id="embedpollfileinput" className="absolute"/>
	                      <div className="absolute2"> 
	                          <label for="embedpollfileinput" class="ui button" style={{ height: '37px', width:'104px', paddingTop: '10px', paddingRight: '17px'}}> 
	                            <i class="ui upload icon"></i>   
	                             Upload
	                          </label>
	                      </div>
	                  </Form.Field>
	                </Form.Group>   

	                <Form.Group inline>
	                  <label>Display Product: </label>
	                  <Form.Field>
	                    <Checkbox slider defaultChecked={this.props.data.display_product} onChange={this.handleDisplayChange}/>
	                  </Form.Field>
	                </Form.Group>

				    <Button type='submit' onClick={this.submitEdit} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditProduct;