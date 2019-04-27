import React, { Component } from 'react';
import { Form, Button, Checkbox, Message } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

import local_storage from 'localStorage';

class EditProduct extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			name: "",
    		price: "",
    		total_quantity: "",
    		description: "",
    		display_product: "",
    		color_arr: [],
    		quantity_arr: [],
    		colors: "",

    		name_error: false,
    		price_error: false,
    		total_quantity_error: false,
    		description_error: false,
    		display_product_error: false,
    		colors_error: false,

	        form_complete: '',
	        form_error_field: '',
	        prompt_message: '',
	        prompt_header: ''
		}
		this.handleNameChange = this.handleNameChange.bind(this);
	    this.handlePriceChange = this.handlePriceChange.bind(this);
	    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
	    this.handleDisplayChange = this.handleDisplayChange.bind(this);
	    this.handleColorChange = this.handleColorChange.bind(this);
	    this.handleTotalQuantityChange = this.handleTotalQuantityChange.bind(this);
	}

	handleNameChange(e) { this.setState({name: e.target.value}); }
	handleTotalQuantityChange(e) { this.setState({total_quantity: e.target.value}); }
  	handlePriceChange(e) { this.setState({price: e.target.value}); }
  	handleDescriptionChange(e) { this.setState({description: e.target.value}); }
  	handleColorChange(e) {this.setState({colors: e.target.value}); }
  	handleDisplayChange(e) { 
  		if(this.state.display_product){
  			this.setState({display_product: 0}); 
  		}else{
  			this.setState({display_product: 1});
  		}
  	}

	onModal = () => {
		this.getData(this.props.data.id);
		this.setState({activeModal: true});
	}

	cancel = () => {
		this.setState({activeModal: false});

    	this.setState({name_error: ''});
    	this.setState({price_error: ''});
    	this.setState({description_error: ''});
    	this.setState({display_product_error: ''});
    	this.setState({colors_error: ''});

    	this.setState({form_complete: ''});
    	this.setState({form_error_field: ''});
	    this.setState({prompt_header: ''});
    	this.setState({prompt_message: ''});
	}

	getData = (id) => {

		this.setState({name: this.props.data.name})
		this.setState({price: this.props.data.price})
		this.setState({description: this.props.data.description})
		this.setState({display_product: this.props.data.display_product})
		this.getColors(id);
	}

	concatColors = (id) => {
		
		var stringInclusion = this.state.color_arr[0].product_color + "-" + this.state.color_arr[0].product_quantity;
		var i;

		for(i=1; i<(this.state.color_arr.length); i++){
			stringInclusion = stringInclusion + ", " + this.state.color_arr[i].product_color + "-" + this.state.color_arr[i].product_quantity;
		}
		this.setState({colors: stringInclusion});
	}	

	getColors = (id) => {
		fetch(`http://localhost:3001/v1/products/colors/`+ id,{
		      headers: { 'Content-Type': 'application/json' },
		      method: "GET"
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				this.setState({color_arr: result.data})
				this.concatColors(id);
			})
			.catch((e) => {
				console.log(e)
			})		
	}

	checkForm = () => {
	    let error = false;
	    const re = /^-?\d*(\.\d+)?$/;

	    if(this.state.name === ''){
	      this.setState({name_error: true});
	      error=true;
	    }
	    if(this.state.price === ''){
	      this.setState({price_error: true});
	      error=true;
	    }
	    if(this.state.description === ''){
	      this.setState({description_error: true});
	      error=true;
	    }
	    if(this.state.display_product === ''){
	      this.setState({display_product_error: true});
	      error=true;
	    }
	    if(this.state.colors === ''){
	      this.setState({colors_error: true});
	      error=true;
	    }
	    if(this.state.total_quantity === ''){
	      this.setState({total_quantity_error: true});
	      error=true;
	    }

	    if(error){
	      this.setState({form_complete: false});
	      this.setState({prompt_header: 'Incomplete Information'}); 
	      this.setState({prompt_message: 'Please fill up all the fields.'});  
	    }else{
	      this.setState({form_complete: true});
	      if(re.test(this.state.price)){
	     	this.submitEdit();
		    this.setState({name: ''});
		    this.setState({price: ''});
		    this.setState({description: ''});
		    this.setState({display_product: ''});
		    this.setState({colors: ''});
		    this.cancel();
	      }else{
	        this.setState({form_error_field: true});
	        this.setState({price_error: true});
	        this.setState({prompt_header: 'Incorrect value for price'}); 
	        this.setState({prompt_message: 'Please enter a correct value for package price.'});
	      }
	      
	    }

	}

	submitEdit = () => {
		const id_session = JSON.parse(local_storage.getItem("user_data")).id;
        const prod = JSON.stringify({name: this.state.name, price: this.state.price, description: this.state.description, display_product: this.state.display_product, product_color: this.state.colors, session_id: id_session, total_quantity: this.state.total_quantity})
       
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
          this.getData(this.props.data.id)
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
		                <Form.Input label='Product Name' placeholder='Product Name' defaultValue={this.props.data.name} onChange={this.handleNameChange} error={this.state.name_error}/>
		                <Form.Input label='Price' placeholder='Price' defaultValue={this.props.data.price} onChange={this.handlePriceChange} error={this.state.price_error}/>
	                </Form.Group>

	                <Form.Input label='Description' placeholder='Description' defaultValue={this.props.data.description} onChange={this.handleDescriptionChange} error={this.state.description_error}/>

	                <Form.Group widths='equal'>
	               		<Form.Input label='Color/s or Variant/s' defaultValue={this.state.colors} onChange={this.handleColorChange} error={this.state.colors_error}/> 
	                	<Form.Input required type='number' min={1} defaultValue={this.state.total_quantity} label='Total Quantity' placeholder='Total Quantity' onChange={this.handleTotalQuantityChange} error={this.state.total_quantity_error}/>
	               	</Form.Group> 

	                <Form.Group inline>
	                  <label>Display Product: </label>
	                  <Form.Field>
	                    <Checkbox slider defaultChecked={this.props.data.display_product} onChange={this.handleDisplayChange}/>
	                  </Form.Field>
	                </Form.Group>

	                {(this.state.form_complete===false || this.state.form_error_field===true) ?
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

export default EditProduct;