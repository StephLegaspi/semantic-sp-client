import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

import AddButton from '../button/AddButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

export default class AddMotif extends Component {

 constructor() {
      super();
      this.state = {
        activeModal: false,
        name: "",
        description: "",
        image_files: '',

        name_error: '',
        description_error: '',

        form_complete: '',
        prompt_message: '',
        prompt_header: ''
      }

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleDescChange = this.handleDescChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleNameChange(e) { this.setState({name: e.target.value, name_error: false}); }
  handleDescChange(e) { this.setState({description: e.target.value,description_error: false}); }
  handleImageChange(e) {
    this.setState({image_files: e.target.files});
  }

  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});
  }

  checkForm = () => {
    var error = false;

    if(this.state.name === ''){
      this.setState({name_error: true});
      error=true;
    }
    if(this.state.description === ''){
      this.setState({description_error: true});
      error=true;
    }


    if(error){
      this.setState({form_complete: false});
      this.setState({prompt_header: 'Incomplete Information'}); 
      this.setState({prompt_message: 'Please fill up all the required fields.'});  
    }else{
      this.setState({form_complete: true});
      this.handleSubmit();
      this.setState({name: ''});
      this.setState({description: ''});
    }
  }

  handleSubmit = () => {

        let formData = new FormData();
        formData.set('enctype','multipart/form-data') 

        formData.append('name', this.state.name);
        formData.append('description', this.state.description);

        for (var file of this.state.image_files) {
          formData.append('images', file)
        }
       
        fetch(`http://localhost:3001/v1/event_motifs`,{
            method: "POST",
            body: formData
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
                
                <Form.Input required label='Event Motif' placeholder='Event Motif Name' onChange={this.handleNameChange} error={this.state.name_error}/>

                <Form.TextArea required label='Description' placeholder='Description' style={{ minHeight: 100 }} onChange={this.handleDescChange} error={this.state.description_error}/>

                <Form.Group inline>
                  <label>Display Image: </label>
                  <Form.Field className="relative">
                      <input required multiple name='images' type="file" id="embedpollfileinput" className="absolute" onChange={this.handleImageChange}/>
                      <div className="absolute2"> 
                          <label for="embedpollfileinput" class="ui button" style={{height: '37px', width:'104px', paddingTop: '10px', paddingRight: '17px'}}> 
                            <i class="ui upload icon"></i>   
                             Upload
                          </label>
                      </div>
                  </Form.Field>
              </Form.Group> 

              {(this.state.form_complete===false) ?
                  <Message
                    header={this.state.prompt_header}
                    content={this.state.prompt_message}
                  />
                : ''}

              <Button type='submit' onClick={this.checkForm} id='edit-button2'>Add</Button>
              <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
          </Form>
          </div>)}
        </div>
    );
  }
}

