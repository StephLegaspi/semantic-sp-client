import React, { Component } from 'react';
import { Button, Form, Segment, Input, Radio, Checkbox } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'

import '../../styles/add.css';
import '../../styles/button.css';

export default class AddProduct extends Component {

  state = {}
  handleChange = (e, { value }) => this.setState({ value });

  render(){
    const { value } = this.state
    return(
      <div>
      <HeaderBar headerTitle={'Add Product'}/>
      <div className='form-style-smaller'>
            <Form size='large'>
              <Segment stacked>

                <Form.Field>
                  <label>Product Name</label>
                  <Input placeholder='Product Name'/>
                </Form.Field>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Price</label>
                    <Input placeholder='Price'/>
                  </Form.Field>
                  <Form.Field>
                    <label>Total Quantity</label>
                    <Input placeholder='Total Quantity'/>
                  </Form.Field>
                </Form.Group>

                <Form.Field>
                    <label>Description</label>
                    <Input placeholder='Description'/>
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
                  <label>Available for: </label>
                  <Form.Field
                    control={Radio}
                    label='Sale'
                    value='sale'
                    checked={value === 'sale'}
                    onChange={this.handleChange}
                  />
                  <Form.Field
                    control={Radio}
                    label='Rent'
                    value='rent'
                    checked={value === 'rent'}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group inline>
                  <label>Display Product: </label>
                  <Form.Field>
                    <Checkbox toggle />
                  </Form.Field>
                </Form.Group>


                <Button id='signup-button'>
                  Add
                </Button>
              </Segment>
            </Form>
      </div>
      </div>
    );
  }
}

