import React, { Component } from 'react';
import { Button, Form, Grid,  Segment, Input } from 'semantic-ui-react'
import '../../styles/add.css';
import '../../styles/button.css';
import HeaderBar from '../headerBar/HeaderBar.js'
import Footer from '../footer/Footer.js'

export default class SignUp extends Component {

  constructor() {
    super();

  }

  render(){
    return(
      <div> 
        <HeaderBar headerTitle={'Sign Up'}/>
        <div className='form-style'>
        <Grid>
          <Grid.Column>
            
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
                </Form.Group >

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

                <Form.Group>
                  <Form.Field width={15}>
                      <label>Address</label>
                      <Input placeholder='Address'/>
                  </Form.Field>
                  <Form.Field width={3}>
                      <label>Zip Code</label>
                      <Input placeholder='Zip Code'/>
                  </Form.Field>
                </Form.Group>

                <Button id='signup-button'>
                  Sign Up
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
        </div>

        <Footer/>
      </div>
    );
  }
}

