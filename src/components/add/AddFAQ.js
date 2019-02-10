import React, { Component } from 'react';
import { Button, Form, Segment, Input, TextArea } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import BackButton from '../button/BackButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

class AddFAQ extends Component {

  constructor() {
    super();

    this.GoBack = this.GoBack.bind(this);
  }

  GoBack(e) {
    this.props.history.push('/faqs');
  }

  render(){
    return(
     <div>
      <HeaderBar headerTitle={'Add Question'}/>
      <BackButton handleClick={this.GoBack}/>
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

export default AddFAQ;