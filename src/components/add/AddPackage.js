import React, { Component } from 'react';
import { Button, Form, Segment, Input, TextArea } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import BackButton from '../button/BackButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

export default class AddPackage extends Component {

  constructor() {
    super();
    this.GoBack = this.GoBack.bind(this);
  }

  GoBack(e) {
    this.props.history.push('/packages-table');
  }

  render(){
    return(
     <div>
      <HeaderBar headerTitle={'Add Package'}/>
      <BackButton handleClick={this.GoBack}/>
      <div className='form-style-smaller'>
            <Form size='large'>
              <Segment stacked>
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

