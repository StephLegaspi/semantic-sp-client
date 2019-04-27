import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

import AddButton from '../button/AddButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

import local_storage from 'localStorage';

export default class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      activeModal: false,
      name: "",
      price: "",
      total_quantity: 1,
      description: "",
      display_product: 0,
      color_list: "",
      image: '',

      name_error: '',
      price_error: '',
      total_quantity_error: '',
      description_error: '',
      display_product_error: '',
      color_list_error: '',
      image_error: '',

      form_complete: '',
      form_error_field: '',
      prompt_message: '',
      prompt_header: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTotalQuantityChange = this.handleTotalQuantityChange.bind(this);
    this.handleDisplayChange = this.handleDisplayChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleNameChange(e) { this.setState({name: e.target.value, name_error: false}); }
  handlePriceChange(e) { this.setState({price: e.target.value, price_error: false}); }
  handleTotalQuantityChange(e) { this.setState({total_quantity: e.target.value, total_quantity_error: false}); }
  handleDescriptionChange(e) { this.setState({description: e.target.value, description_error: false}); }
  handleColorChange(e) { this.setState({color_list: e.target.value, color_list_error: false}); }
   handleImageChange(e) {this.setState({image: e.target.files[0], image_error:false});}
  handleDisplayChange(e) { 
    if(this.state.display_product === 0){
      this.setState({display_product: 1, display_product_error: false}); 
    }else{
      this.setState({display_product: 0, display_product_error: false}); 
    }
  }

  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});

    this.setState({name: ''});
    this.setState({price: ''});
    this.setState({total_quantity: ''});
    this.setState({description: ''});
    this.setState({display_product: 0});
    this.setState({color_list: ''});
    this.setState({image: ''});

    this.setState({name_error: ''});
    this.setState({price_error: ''});
    this.setState({total_quantity_error: ''});
    this.setState({description_error: ''});
    this.setState({display_product_error: ''});
    this.setState({color_list_error: ''});
    this.setState({image_error: ''});

    this.setState({prompt_header: ''});
    this.setState({prompt_message: ''});
    this.setState({form_complete: ''});
    this.setState({form_error_field: ''});
  }

  checkForm = () => {
    let error = false;
    let re = /^-?\d*(\.\d+)?$/;
    let regex_color = /^((([A-Z]+[a-z]*|[a-z]+)\s*-\s*\d+\s*,\s*)*(([A-Z]+[a-z]*|[a-z]+)\s*-\s*\d+\s*))$/;

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
    if(this.state.image === ''){
      this.setState({image_error: true});
      error=true;
    }


    if(error){
      this.setState({form_complete: false});
      this.setState({prompt_header: 'Incomplete Information'}); 
      this.setState({prompt_message: 'Please fill up all the required fields.'});  
    }else{
      this.setState({form_complete: true});
      if(re.test(this.state.price)){
        if(regex_color.test(this.state.color_list)){
          this.handleSubmit();
          this.cancel(); 
        }else{
          this.setState({form_error_field: true});
          this.setState({color_list_error: true});
          this.setState({prompt_header: 'Incorrect value for color and quantity'}); 
          this.setState({prompt_message: 'Please follow the format Color-Quantity e.g. Blue-5.'});
        }
      }else{
        this.setState({form_error_field: true});
        this.setState({price_error: true});
        this.setState({prompt_header: 'Incorrect value for price'}); 
        this.setState({prompt_message: 'Please enter a correct value for package price.'});
      }
    }

  }

  handleSubmit = () => {
        const id_session = JSON.parse(local_storage.getItem("user_data")).id;
        let formData = new FormData();
        formData.set('enctype','multipart/form-data') 

        formData.append('name', this.state.name);
        formData.append('price', this.state.price);
        formData.append('total_quantity', this.state.total_quantity);
        formData.append('description', this.state.description);
        formData.append('display_product', this.state.display_product);
        formData.append('product_color', this.state.color_list);
        formData.append('image', this.state.image);
        formData.append('session_id', id_session);
       
        fetch(`http://localhost:3001/v1/products/` + this.props.category ,{
            method: "POST",
            body: formData
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status){
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
                  
                  <Form.Group widths='equal'>
                    <Form.Input required label='Product Name' placeholder='Product Name'onChange={this.handleNameChange} error={this.state.name_error}/>
                    <Form.Input required label='Price' placeholder='Price' onChange={this.handlePriceChange} error={this.state.price_error}/>
                  </Form.Group>
                  
                  <Form.Input required label='Description' placeholder='Description' onChange={this.handleDescriptionChange} error={this.state.description_error}/>

                  <Form.Group>
                      <Form.Input width={3} required type='number' min={1} defaultValue={this.state.total_quantity} label='Total Quantity' placeholder='Total Quantity' onChange={this.handleTotalQuantityChange} error={this.state.total_quantity_error}/>
                      <Form.Input width={13} required label='Color/s or Variant/s with Quantity e.g. Blue-5' placeholder='e.g. Color1-Quantity1, Color2-Quantity2, Color3-Quantity3'  onChange={this.handleColorChange} error={this.state.color_list_error}/>
                  </Form.Group>

                  <Form.Group widths='equal'>
                    <Form.Field width={3}>
                      
                    </Form.Field>
                    <Form.Field width={13}>
                      <label> If the product has no color/variant, indicate none-Quantity e.g. none-10</label>
                    </Form.Field>
                  </Form.Group>

                  <Form.Group inline>
                    <label>Product Image: </label>
                    <Form.Field className="relative" error={this.state.image_error}>
                        <input name='image' type="file" className="absolute" onChange={this.handleImageChange} id='embedpollfileinput'/>
                        <div className="absolute2"> 
                          <label for="embedpollfileinput" className="ui button" style={{height: '37px', width:'104px', paddingTop: '10px', paddingRight: '17px'}}> 
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

            {(this.state.form_complete===false || this.state.form_error_field===true) ?
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

