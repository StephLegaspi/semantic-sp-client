import React, { Component } from 'react';
import { Button, Form, Segment, Input, TextArea } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import BackButton from '../button/BackButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

export default class AddMotif extends Component {

  constructor() {
    super();
    this.GoBack = this.GoBack.bind(this);
  }

  GoBack(e) {
    this.props.history.push('/motifs-table');
  }

  render(){
    return(
      <div>
      <HeaderBar headerTitle={'Add Motif'}/>
      <BackButton handleClick={this.GoBack}/>
      <div className='form-style-smaller'>
            <Form size='large'>
              <Segment stacked>

                <Form.Field>
                  <label>Event Motif Name</label>
                  <Input placeholder='Event Motif Name'/>
                </Form.Field>

                <Form.Field>
                  <label>Description</label>
                  <TextArea placeholder='Description' style={{ minHeight: 100 }} />
                </Form.Field>

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

