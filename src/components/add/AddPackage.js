import React, { Component } from 'react';
import { Button, Form, Input, TextArea } from 'semantic-ui-react'

import AddButton from '../button/AddButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

export default class AddPackage extends Component {

   constructor() {
      super();
      this.state = {
        activeModal: false,
        name: "",
        price: "",
        inclusion: ""
      }
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handlePriceChange = this.handlePriceChange.bind(this);
      this.handleInclusionChange = this.handleInclusionChange.bind(this);
  }

  handleNameChange(e) { this.setState({name: e.target.value}); }
  handlePriceChange(e) { this.setState({price: e.target.value}); }
  handleInclusionChange(e) { this.setState({inclusion: e.target.value}); }


  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});
  }

  handleSubmit = () => {
        const pkg = JSON.stringify({name: this.state.name, price: this.state.price, inclusion: this.state.inclusion})
       
        fetch(`http://localhost:3001/v1/packages`,{
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: pkg
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
              <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Package Name</label>
                    <Input placeholder='Package Name' onChange={this.handleNameChange}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Price</label>
                    <Input placeholder='Price' onChange={this.handlePriceChange}/>
                  </Form.Field>
                </Form.Group>

               <Form.Field>
                  <label>Inclusions</label>
                  <TextArea placeholder='e.g. Inclusion1, Inclusion2, Inclusion3' style={{ minHeight: 100 }}  onChange={this.handleInclusionChange}/>
              </Form.Field>

              <Button type='submit' id='edit-button2' onClick={this.handleSubmit} method="POST">Add</Button>
              <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
          </Form>
          </div>)}
        </div>
    );
  }
}

