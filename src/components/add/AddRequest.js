import React, { Component } from 'react';
import { Button, Form, Grid,  Segment, Input, Radio, Checkbox, Icon, Label, Dropdown} from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';
import './index.css';

export default class AddRequest extends Component {

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
          <Grid.Column style={{ maxWidth: 1000 }}>
            
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

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Event Type</label>
                    <Dropdown placeholder='Event Type' search selection options={this.stateOptions} />
                  </Form.Field>
                  <Form.Field>
                    <label>Event Date</label>
                    <DateInput
                      name="date"
                      placeholder="Event Date"
                      value={this.state.date}
                      iconPosition="left"
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>No. of Persons</label>
                    <Input placeholder='No. of Persons'/>
                  </Form.Field>
                </Form.Group>

                <Form.Field>
                  <label>Venue Address</label>
                  <Input placeholder='Venue Address'/>
                </Form.Field>

                 
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Catering Package</label>
                    <Dropdown placeholder='Catering Package' search selection options={this.stateOptions} />
                  </Form.Field>
                  <Form.Field>
                    <label>Event Motif</label>
                    <Dropdown placeholder='Event Motif' search selection options={this.stateOptions} />
                  </Form.Field>
                  <Form.Field>
                    <label>Food Menu</label>
                    <Dropdown placeholder='Food Menu' search selection options={this.stateOptions} />
                  </Form.Field>
                </Form.Group>

                <Button color='teal'>
                  Send Request
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

