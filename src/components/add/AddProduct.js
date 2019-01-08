import React, { Component } from 'react';
import { Button, Form, Grid,  Segment, Input, Radio, Checkbox } from 'semantic-ui-react'
import './index.css';

export default class SignUp extends Component {

  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render(){
    const { value } = this.state
    return(
      <div className='login-form'> 
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 500 }}>
            
            <Form size='large'>
              <Segment stacked>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Product Name</label>
                    <Input placeholder='Product Name'/>
                  </Form.Field>
                </Form.Group>

                <Form.Field>
                  <label>Price</label>
                  <Input placeholder='Price'/>
                </Form.Field>

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

