import React, { Component } from 'react';
import { Button, Form, Input, TextArea } from 'semantic-ui-react'

import AddButton from '../button/AddButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

export default class AddMotif extends Component {

 constructor() {
      super();
      this.state = {
        activeModal: false,
        name: "",
        description: ""
      }

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleDescChange = this.handleDescChange.bind(this);
  }

  handleNameChange(e) { this.setState({name: e.target.value}); }
  handleDescChange(e) { this.setState({description: e.target.value}); }

  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});
  }

  handleSubmit = () => {
        const motif = JSON.stringify({name: this.state.name, description: this.state.description})
       
        fetch(`http://localhost:3001/v1/event_motifs`,{
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: motif
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status){
            this.setState({activeModal: false})
            this.props.handleUpdate()
          }
        })
        .catch((e) => {
          console.log(e)
        })
  }

  render(){
    return(
      <div>
      <AddButton handleAdd={this.onModal}/>
        {this.state.activeModal && (
          <div className='add-modal'>

            <Form className='form-style-smaller'>
              <Form.Field>
                  <label>Event Motif Name</label>
                  <Input placeholder='Event Motif Name' onChange={this.handleNameChange}/>
                </Form.Field>

                <Form.Field>
                  <label>Description</label>
                  <TextArea placeholder='Description' style={{ minHeight: 100 }} onChange={this.handleDescChange}/>
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

              <Button type='submit' onClick={this.handleSubmit} id='edit-button2'>Add</Button>
              <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
          </Form>
          </div>)}
        </div>
    );
  }
}

