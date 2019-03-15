import React, { Component } from 'react';
import { Button, Form, Input, Checkbox } from 'semantic-ui-react'

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
      color_list: ""
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTotalQuantityChange = this.handleTotalQuantityChange.bind(this);
    this.handleDisplayChange = this.handleDisplayChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleNameChange(e) { this.setState({name: e.target.value}); }
  handlePriceChange(e) { this.setState({price: e.target.value}); }
  handleTotalQuantityChange(e) { this.setState({total_quantity: e.target.value}); }
  handleDescriptionChange(e) { this.setState({description: e.target.value}); }
  handleDisplayChange(e) { this.setState({display_product: 1}); }
  handleColorChange(e) { this.setState({color_list: e.target.value}); }

  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});
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
          <Form.Field>
                    <label>Product Name</label>
                    <Input placeholder='Product Name'onChange={this.handleNameChange}/>
                  </Form.Field>

                  <Form.Group widths='equal'>
                    <Form.Field>
                      <label>Price</label>
                      <Input placeholder='Price' onChange={this.handlePriceChange}/>
                    </Form.Field>
                    <Form.Field>
                      <label>Total Quantity</label>
                      <Input placeholder='Total Quantity' onChange={this.handleTotalQuantityChange}/>
                    </Form.Field>
                  </Form.Group>

                  <Form.Field>
                      <label>Description</label>
                      <Input placeholder='Description' onChange={this.handleDescriptionChange}/>
                  </Form.Field>

                  <Form.Field>
                    <label>Color/s</label>
                    <Input placeholder='e.g. Color1, Color2, Color3'  onChange={this.handleColorChange}/>
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
                      <Checkbox slider onChange={this.handleDisplayChange}/>
                    </Form.Field>
                  </Form.Group>

            <Button type='submit' onClick={this.handleSubmit} id='edit-button2'>Add</Button>
            <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
        </Form>
          </div>)}
        </div>
    );
  }
  
}

