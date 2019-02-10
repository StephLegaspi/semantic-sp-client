import React, { Component } from 'react';
import { Button, Form, Segment, Input, TextArea } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'

import '../../styles/add.css';
import '../../styles/button.css';

export default class AddFAQ extends Component {

  constructor() {
    super();

  }

  render(){
    return(
     <div>
      <HeaderBar headerTitle={'Add Question'}/>
      <div className='form-style-smaller'>
            
            <Form size='large'>
              <Segment stacked>
                  <Form.Field>
                    <label>Question</label>
                    <TextArea placeholder='Question' style={{ minHeight: 100 }} />
                  </Form.Field>
                  <Form.Field>
                    <label>Answer</label>
                    <TextArea placeholder='Answer' style={{ minHeight: 100 }} />
                  </Form.Field>

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

