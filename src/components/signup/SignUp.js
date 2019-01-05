import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Input } from 'semantic-ui-react'
import './index.css';

export default class SignUp extends Component {

  constructor() {
    super();

  }

  render(){
    return(
      <div className='login-form'> 
        <Grid style={{ height: '100%' }} verticalAlign='middle'>
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
                    <label>Password</label>
                    <Input placeholder='Password'/>
                  </Form.Field>
                </Form.Group>
                <Form.Field>
                    <label>Address</label>
                    <Input placeholder='Address'/>
                </Form.Field>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Zip Code</label>
                    <Input placeholder='Zip Code'/>
                  </Form.Field>

                  <Form.Field>
                    <label>Contact Number</label>
                    <Input placeholder='Contact Number'/>
                  </Form.Field>
                </Form.Group>
                <Button style={{marginLeft: 300}} color='teal'>
                  Sign Up
                </Button>
              </Segment>
            </Form>
            
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

