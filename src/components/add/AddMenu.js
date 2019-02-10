import React, { Component } from 'react';
import { Button, Form, Segment, Input, TextArea } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import BackButton from '../button/BackButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

export default class AddMenu extends Component {

  constructor() {
    super();
    this.GoBack = this.GoBack.bind(this);
  }

  GoBack(e) {
    this.props.history.push('/menus-table');
  }

  render(){
    return(
     <div>
      <HeaderBar headerTitle={'Add Menu'}/>
      <BackButton handleClick={this.GoBack}/>
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
                    <TextArea placeholder='e.g. Course1, Course2, Course3' style={{ minHeight: 100 }} />
                  </Form.Field>
                  <Form.Field>
                    <label>Appetizer</label>
                    <TextArea placeholder='e.g. Appetizer1, Appetizer2, Appetizer3' style={{ minHeight: 100 }} />
                  </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Dessert</label>
                    <TextArea placeholder='e.g. Dessert1, Dessert2, Dessert3' style={{ minHeight: 100 }} />
                  </Form.Field>
                  <Form.Field>
                    <label>Soup</label>
                    <TextArea placeholder='e.g. Soup1, Soup2, Soup3' style={{ minHeight: 100 }} />
                  </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Beverage</label>
                    <TextArea placeholder='e.g. Beverage1, Beverage2, Beverage3' style={{ minHeight: 100 }} />
                  </Form.Field>
                  <Form.Field>
                    <label>Others</label>
                    <TextArea placeholder='e.g. Others1, Others2, Others3' style={{ minHeight: 100 }} />
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

