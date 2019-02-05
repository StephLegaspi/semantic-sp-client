import React, { Component } from 'react';
import { Button, Form, Grid,  Segment, Input } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';

import '../../styles/add.css';

export default class AddOrder extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      date: ''

    };

    this.stateOptions = [ { key: '1', value: '1', text: 'One' }, { key: '2', value: '2', text: 'Two' }, { key: '3', value: '3', text: 'Three' } ]
  }
 
  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
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
                    <label>First Name</label>
                    <Input placeholder='First Name'/>
                  </Form.Field>
                  <Form.Field>
                    <label>Middle Name</label>
                    <Input placeholder='Middle Name'/>
                  </Form.Field>
                  <Form.Field>
                    <label>Last Name</label>
                    <Input placeholder='Last Name'/>
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

                <Form.Group>
                  
                  <Form.Field width={15}>
                    <label>Delivery Address</label>
                    <Input placeholder='Delivery Address'/>
                  </Form.Field>
                  <Form.Field width={3}>
                    <label>Zip Code</label>
                    <Input placeholder='Zip Code'/>
                  </Form.Field>
                </Form.Group>

                <Button color='teal'>
                  Send
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

