import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

import AddButton from '../button/AddButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

export default class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      activeModal: false,
      name: "",
      price: "",
      total_quantity: "",
      description: "",
      display_product: 0,
      color_list: "",

      name_error: '',
      price_error: '',
      total_quantity_error: '',
      description_error: '',
      display_product_error: '',
      color_list_error: '',

      form_complete: '',
      prompt_message: '',
      prompt_header: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTotalQuantityChange = this.handleTotalQuantityChange.bind(this);
    this.handleDisplayChange = this.handleDisplayChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleNameChange(e) { this.setState({name: e.target.value, name_error: false}); }
  handlePriceChange(e) { this.setState({price: e.target.value, price_error: false}); }
  handleTotalQuantityChange(e) { this.setState({total_quantity: e.target.value, total_quantity_error: false}); }
  handleDescriptionChange(e) { this.setState({description: e.target.value, description_error: false}); }
  handleDisplayChange(e) { this.setState({display_product: 1, display_product_error: false}); }
  handleColorChange(e) { this.setState({color_list: e.target.value, color_list_error: false}); }

  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});
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
    if(this.state.total_quantity === ''){
      this.setState({total_quantity_error: true});
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
    if(this.state.color_list === ''){
      this.setState({color_list_error: true});
      error=true;
    }


    if(error){
      this.setState({form_complete: false});
      this.setState({prompt_header: 'Incomplete Information'}); 
      this.setState({prompt_message: 'Please fill up all the required fields.'});  
    }else{
      this.setState({form_complete: true});
      this.handleSubmit();
      this.setState({name: ''});
      this.setState({price: ''});
      this.setState({total_quantity: ''});
      this.setState({description: ''});
      this.setState({display_product: 0});
      this.setState({color_list: ''});
    }

  }

  handleSubmit = () => {
        const prod = JSON.stringify({name: this.state.name, price: this.state.price, total_quantity: this.state.total_quantity, description: this.state.description,display_product: this.state.display_product, product_color: this.state.color_list})
       
        fetch(`http://localhost:3001/v1/products/` + this.props.category ,{
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: prod
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status){
            this.setState({activeModal: false})
            this.props.handleUpdate()
          }
        })
        .catch((e) => {
          console.log(e)
        })
  }

  render(){
    return(
    <div>
    <AddButton handleAdd={this.onModal}/>
        {this.state.activeModal && (
          <div className='add-modal'>
            <Form className='form-style-smaller'>
                  
                  <Form.Input required label='Product Name' placeholder='Product Name'onChange={this.handleNameChange} error={this.state.name_error}/>
                  
                  <Form.Group widths='equal'>
                      <Form.Input required label='Price' placeholder='Price' onChange={this.handlePriceChange} error={this.state.price_error}/>
                      <Form.Input required label='Quantity' placeholder='Total Quantity' onChange={this.handleTotalQuantityChange} error={this.state.total_quantity_error}/>
                  </Form.Group>

                  <Form.Input required label='Description' placeholder='Description' onChange={this.handleDescriptionChange} error={this.state.description_error}/>

                  <Form.Input required label='Color/s' placeholder='e.g. Color1, Color2, Color3'  onChange={this.handleColorChange} error={this.state.color_list_error}/>

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
                    <Form.Checkbox required slider onChange={this.handleDisplayChange} error={this.state.display_product_error}/>
                  </Form.Group>

            {(this.state.form_complete===false) ?
                  <Message
                    header={this.state.prompt_header}
                    content={this.state.prompt_message}
                  />
                : ''}

            <Button type='submit' onClick={this.checkForm} id='edit-button2'>Add</Button>
            <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
        </Form>
          </div>)}
        </div>
    );
  }
  
}

