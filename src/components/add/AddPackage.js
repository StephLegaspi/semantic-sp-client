import React, { Component } from 'react';
import { Button, Form, Input, TextArea } from 'semantic-ui-react'

import AddButton from '../button/AddButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

export default class AddPackage extends Component {

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
              <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Package Name</label>
                    <Input placeholder='Package Name'/>
                  </Form.Field>
                  <Form.Field>
                    <label>Price</label>
                    <Input placeholder='Price'/>
                  </Form.Field>
                </Form.Group>

               <Form.Field>
                  <label>Inclusions</label>
                  <TextArea placeholder='e.g. Inclusion1, Inclusion2, Inclusion3' style={{ minHeight: 100 }} />
              </Form.Field>

              <Button type='submit' onClick={this.editDone} id='edit-button2'>Add</Button>
              <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
          </Form>
          </div>)}
        </div>
    );
  }
}

