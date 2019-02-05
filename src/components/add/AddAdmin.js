import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Input } from 'semantic-ui-react'

import '../../styles/add.css';

export default class AddAdmin extends Component {

  constructor() {
    super();

  }

  render(){
    return(
      <div className='login-form'> 
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 800 }}>
            
            <Form size='large'>
              <Segment stacked>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>First name</label>
                    <Input placeholder='First name'/>
                  </Form.Field>

                  <Form.Field>
                    <label>Middle name</label>
                    <Input placeholder='Middle name'/>
                  </Form.Field>

                  <Form.Field>
                   <label>Last name</label>
                    <Input placeholder='Last name'/>
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Email Address</label>
                    <Input placeholder='Email Address'/>
                  </Form.Field>

                  <Form.Field>
                    <label>Contact Number</label>
                    <Input placeholder='Contact Number'/>
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Password</label>
                    <Input placeholder='Password'/>
                  </Form.Field>

                  <Form.Field>
                    <label>Repeat Password</label>
                    <Input placeholder='Repeat Password'/>
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

