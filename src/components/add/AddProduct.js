import React, { Component } from 'react';
import { Button, Form, Grid,  Segment, Input, Radio, Checkbox, Icon, Label } from 'semantic-ui-react'
import './index.css';

export default class AddProduct extends Component {

  state = {}

  handleChange = (e, { value }) => this.setState({ value });

 

  render(){
    const { value } = this.state
    return(
      <div className='login-form'> 
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 600 }}>
            
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
                          <label for="embedpollfileinput" class="ui button" style={{height: '45px', width:'104px'}}>    
                             Upload Image
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
                  <label>Display Product </label>
                  <Form.Field>
                    <Checkbox toggle />
                  </Form.Field>
                </Form.Group>
                
                 

            




                
                 
                
                  
                  
             
              


                <Button color='teal'>
                  Add
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

