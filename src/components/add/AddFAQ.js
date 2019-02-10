import React, { Component } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react'

import AddButton from '../button/AddButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

class AddFAQ extends Component {

  constructor() {
      super();
      this.state = {
        activeModal: false,
      }
  }

  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});
  }

  render(){
    return(
      <div>
      <AddButton handleAdd={this.onModal}/>
        {this.state.activeModal && (
          <div className='add-modal'>
            <Form className='form-style-smaller'>
                  <Form.Field>
                    <label>Question</label>
                    <TextArea placeholder='Question' style={{ minHeight: 100 }} />
                  </Form.Field>
                  <Form.Field>
                    <label>Answer</label>
                    <TextArea placeholder='Answer' style={{ minHeight: 100 }} />
                  </Form.Field>

              <Button type='submit' onClick={this.editDone} id='edit-button2'>Add</Button>
              <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
          </Form>
          </div>)}
        </div>
    );
  }
}

export default AddFAQ;