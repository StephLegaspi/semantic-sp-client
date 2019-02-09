import React, { Component } from 'react';
import { Button, Form, Segment, Input } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'

import '../../styles/add.css';
import '../../styles/button.css';

export default class AddAdmin extends Component {

  constructor() {
    super();

  }

  render(){
    return(
      <div>
      <HeaderBar headerTitle={'Add Admin'}/>
      <div className='form-style-smaller'>
            
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

