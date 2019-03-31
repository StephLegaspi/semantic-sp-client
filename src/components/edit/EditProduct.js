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
    		description: "",
    		display_product: "",
    		color_arr: [],
    		colors: "",

    		name_error: false,
    		price_error: false,
    		description_error: false,
    		display_product_error: false,
    		colors_error: false,

	        form_complete: '',
	        prompt_message: '',
	        prompt_header: ''
		}
		this.handleNameChange = this.handleNameChange.bind(this);
	    this.handlePriceChange = this.handlePriceChange.bind(this);
	    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
	    this.handleDisplayChange = this.handleDisplayChange.bind(this);
	    this.handleColorChange = this.handleColorChange.bind(this);
	}

	handleNameChange(e) { this.setState({name: e.target.value}); }
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

	concatColors = () => {
		var stringInclusion = this.state.color_arr[0].product_color;
		var i;

		for(i=1; i<(this.state.color_arr.length); i++){
			stringInclusion = stringInclusion + ", " + this.state.color_arr[i].product_color;
		}
		this.setState({colors: stringInclusion})
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
				this.concatColors();
			})
			.catch((e) => {
				console.log(e)
			})		
	}

	checkForm = () => {
	    var error = false;

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

	    if(error){
	      this.setState({form_complete: false});
	      this.setState({prompt_header: 'Incomplete Information'}); 
	      this.setState({prompt_message: 'Please fill up all the fields.'});  
	    }else{
	      this.setState({form_complete: true});
	      this.submitEdit();
	      this.setState({name: ''});
	      this.setState({price: ''});
	      this.setState({description: ''});
	      this.setState({display_product: ''});
	      this.setState({colors: ''});

	      this.setState({name_error: ''});
	      this.setState({price_error: ''});
	      this.setState({description_error: ''});
	      this.setState({display_product_error: ''});
	      this.setState({colors_error: ''});
	    }

	}

	submitEdit = () => {
		const id_session = JSON.parse(local_storage.getItem("user_data")).id;
        const prod = JSON.stringify({name: this.state.name, price: this.state.price, description: this.state.description, display_product: this.state.display_product, product_color: this.state.colors, session_id: id_session})
       
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

	               <Form.Input label='Color/s' defaultValue={this.state.colors} onChange={this.handleColorChange} error={this.state.colors_error}/>  

	                <Form.Group inline>
	                  <label>Display Product: </label>
	                  <Form.Field>
	                    <Checkbox slider defaultChecked={this.props.data.display_product} onChange={this.handleDisplayChange}/>
	                  </Form.Field>
	                </Form.Group>

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

export default EditProduct;