import React, { Component } from 'react';
import { Form, Input, Button} from 'semantic-ui-react';

import '../../styles/edit.css';
import '../../styles/button.css';

class EditPassword extends Component {
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
    <Button id='generic-button' onClick={this.onModal}> Change Password </Button>
        {this.state.activeModal && (
          <div className='edit-modal'>
            <Form className='forms'>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Email Address</label>
                    <Input placeholder='Email Address'/>
                  </Form.Field>
                  <Form.Field>
                    <label>Old Password</label>
                    <Input placeholder='Old Password'/>
                  </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>New Password</label>
                    <Input placeholder='New Password'/>
                  </Form.Field>
                  <Form.Field>
                    <label>Confirm Password</label>
                    <Input placeholder='Confirm Password'/>
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

export default EditPassword;