import React, { Component } from 'react';
import { Button, Form, Segment, Input, TextArea } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'

import '../../styles/add.css';
import '../../styles/button.css';

export default class AddMenu extends Component {

  constructor() {
    super();

  }

  render(){
    return(
     <div>
      <HeaderBar headerTitle={'Add Menu'}/>
      <div className='form-style-smaller'>
            
            <Form size='large'>
              <Segment stacked>

                <Form.Field>
                  <label>Food Menu Name</label>
                  <Input placeholder='Food Menu Name'/>
                </Form.Field>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Main Course</label>
                    <TextArea placeholder='Main Course' style={{ minHeight: 100 }} />
                  </Form.Field>
                  <Form.Field>
                    <label>Appetizer</label>
                    <TextArea placeholder='Appetizer' style={{ minHeight: 100 }} />
                  </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Dessert</label>
                    <TextArea placeholder='Dessert' style={{ minHeight: 100 }} />
                  </Form.Field>
                  <Form.Field>
                    <label>Soup</label>
                    <TextArea placeholder='Soup' style={{ minHeight: 100 }} />
                  </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Beverage</label>
                    <TextArea placeholder='Beverage' style={{ minHeight: 100 }} />
                  </Form.Field>
                  <Form.Field>
                    <label>Others</label>
                    <TextArea placeholder='Others' style={{ minHeight: 100 }} />
                  </Form.Field>
                </Form.Group>

                <Form.Group inline>
                  <label>Display Image: </label>
                  <Form.Field className="relative">
                      <input type="file" class="inputfile" id="embedpollfileinput" className="absolute"/>
                      <div className="absolute2"> 
                          <label for="embedpollfileinput" class="ui button" style={{height: '37px', width:'104px', paddingTop: '10px', paddingRight: '17px'}}> 
                            <i class="ui upload icon"></i>   
                             Upload
                          </label>
                      </div>
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

