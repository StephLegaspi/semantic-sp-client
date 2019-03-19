import React, { Component } from 'react';
import { Form, Input, Button, Dropdown } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditCartProductPurchase extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			colors_arr: [],
			color_options: [],
			product_color: "",

	        quantity: ""
		}

		
      	this.handleQuantityChange = this.handleQuantityChange.bind(this);
      	this.handleColorChange = this.handleColorChange.bind(this);
	}

	handleQuantityChange(e) {this.setState({quantity: e.target.value}); }
	handleColorChange = (e, { value }) => {
  	    this.setState({product_color: value});
  	}

	onModal = () => {
		this.getData();
		this.getProductColors();
		this.setState({activeModal: true});
	}

	cancel = () => {
		this.setState({activeModal: false});
	}

	getData = () => {
		this.setState({quantity: this.props.data.product_quantity});
		this.setState({product_color: this.props.data.product_color_name});
	}


	getProductColors = () => {
        let self = this;
        fetch('http://localhost:3001/v1/products/colors/' + self.props.data.id ,{
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({colors_arr: result.data});
            self.setColorOptions();
        }).catch(err => {
        	console.log(err);
        })
        
    }

    setColorOptions = () => {
      var col_options=[];
      var option_obj = {value: '', text: ''};
      var i;
      for(i=0; i<this.state.colors_arr.length; i++){
        option_obj['value'] = this.state.colors_arr[i].id;
        option_obj['text'] = this.state.colors_arr[i].product_color;
        col_options.push(option_obj);
        option_obj = {value: '', text: ''}
      }
      this.setState({color_options: col_options});
  	}

	submitEdit = () => {
       const prod = JSON.stringify({product_quantity: this.state.quantity, product_color_id: this.state.product_color})
       
        fetch(`http://localhost:3001/v1/shopping_cart/products/` + this.props.data.sc_id,{
            headers: { 'Content-Type': 'application/json' },
            method: "PUT",
            body: prod
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status){
            this.props.handleUpdate();
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
	                    
						<label > Product Color: </label>
						<Dropdown search selection placeholder={this.state.product_color} options={this.state.color_options} onChange={this.handleColorChange}/>
					
	                  </Form.Field>
	                  <Form.Field>
	                    <label> Quantity: </label>
						<Input type='number' min={1} defaultValue={this.state.quantity} onChange={this.handleQuantityChange}/>
	                  </Form.Field>
	                </Form.Group>
	                <br/> <br/> <br/>
				    <Button type='submit' onClick={this.submitEdit} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditCartProductPurchase;