import React, { Component } from 'react';
import { Form, Input, Button} from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditAdmin extends Component {
  constructor(props){
    super(props);
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
    <EditButton handleEdit={this.onModal}/>
        {this.state.activeModal && (
          <div className='edit-modal'>
            <Form className='forms'>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>First name</label>
                    <Input placeholder='First name'/>
                  </Form.Field>

                  <Form.Field>
                    <label>Middle name</label>
                    <Input placeholder='Middle name'/>
                  </Form.Field>

                  <Form.Field>
                   <label>Last name</label>
                    <Input placeholder='Last name'/>
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
                <Button type='submit' onClick={this.editDone} id='edit-button2'>Edit</Button>
                <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
            </Form>
          </div>)}
        </div>
    );
  }
}

export default EditAdmin;