import React, { Component } from 'react';
import { Button, Form, Grid,  Segment, Input, Radio, Checkbox, Icon, Label, TextArea } from 'semantic-ui-react'
import './index.css';

export default class AddMenu extends Component {

  constructor() {
    super();

  }

 

  render(){
    return(
      <div className='login-form'> 
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 600 }}>
            
            <Form size='large'>
              <Segment stacked>

                <Form.Field>
                  <label>Food Menu Name</label>
                  <Input placeholder='Food Menu Name'/>
                </Form.Field>

                <Form.Field>
                  <label>Description</label>
                  <TextArea placeholder='Description' style={{ minHeight: 100 }} />
                </Form.Field>

                <Form.Group inline>
                  <label>Image: </label>
                  <Form.Field className="relative">
                      <input type="file" class="inputfile" id="embedpollfileinput" className="absolute"/>
                      <div className="absolute2">
                          <label for="embedpollfileinput" class="ui button" style={{height: '37px', width:'104px', paddingTop: '5px'}}>    
                             Upload Image
                          </label>
                      </div>
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

