import React, { Component } from 'react';
import { Form, Input, Button} from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

import local_storage from 'localStorage';

class EditAdmin extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeModal: false,
      first_name: "",
      middle_name: "",
      last_name: "",
      email_address: "",
      contact_number: "",
      image: ''
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleMiddleNameChange = this.handleMiddleNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleFirstNameChange(e) {this.setState({first_name: e.target.value}); }
  handleMiddleNameChange(e) {this.setState({middle_name: e.target.value}); }
  handleLastNameChange(e) {this.setState({last_name: e.target.value}); }
  handleEmailChange(e) {this.setState({email_address: e.target.value}); }
  handleContactChange(e) {this.setState({contact_number: e.target.value}); }
  handleImageChange(e) {this.setState({image: e.target.files[0]});}

  onModal = () => {
    this.getData();
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});
  }

  getData = () => {
    this.setState({first_name: this.props.data.first_name})
    this.setState({middle_name: this.props.data.middle_name})
    this.setState({last_name: this.props.data.last_name})
    this.setState({email_address: this.props.data.email_address})
    this.setState({contact_number: this.props.data.contact_number})
    this.setState({image: null})
  }

  submitEdit = () => {
      const id_session = JSON.parse(local_storage.getItem("user_data")).id;

        let formData = new FormData();
        formData.set('enctype','multipart/form-data'); 

        formData.append('first_name', this.state.first_name);
        formData.append('middle_name', this.state.middle_name);
        formData.append('last_name', this.state.last_name);
        formData.append('email_address', this.state.email_address);
        formData.append('contact_number', this.state.contact_number);
        formData.append('image', this.state.image);
        formData.append('session_id', id_session);
       
        if(this.state.image === null){
          formData.append('image_changed', false);
        }else{
          formData.append('image_changed', true);
        }
       
        fetch(`http://localhost:3001/v1/administrators/` + this.props.data.id,{
            method: "PUT",
            body: formData
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status){
            this.props.handleUpdate()
            this.setState({activeModal: false})
          }
          this.getData()
        })
        .catch((e) => {
          console.log(e)
        })
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
                    <Input placeholder='First name' defaultValue={this.props.data.first_name} onChange={this.handleFirstNameChange}/>
                  </Form.Field>

                  <Form.Field>
                    <label>Middle name</label>
                    <Input placeholder='Middle name' defaultValue={this.props.data.middle_name} onChange={this.handleMiddleNameChange}/>
                  </Form.Field>

                  <Form.Field>
                   <label>Last name</label>
                    <Input placeholder='Last name' defaultValue={this.props.data.last_name} onChange={this.handleLastNameChange}/>
                  </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Email Address</label>
                    <Input disabled placeholder='Email Address' defaultValue={this.props.data.email_address} onChange={this.handleEmailChange}/>
                  </Form.Field>

                  <Form.Field>
                    <label>Contact Number</label>
                    <Input placeholder='Contact Number' defaultValue={this.props.data.contact_number} onChange={this.handleContactChange}/>
                  </Form.Field>
                </Form.Group> 

                <Form.Group inline>
                    <label>Admin Image: </label>
                    <Form.Field className="relative">
                        <input name='image' type="file" className="absolute" onChange={this.handleImageChange} id='embedpollfileinput'/>
                        <div className="absolute2"> 
                          <label for="embedpollfileinput" className="ui button" style={{height: '37px', width:'104px', paddingTop: '10px', paddingRight: '17px'}}> 
                            <i class="ui upload icon"></i>   
                             Upload
                          </label>
                        </div>
                    </Form.Field>
                </Form.Group>  

                <Button type='submit' onClick={this.submitEdit} id='edit-button2'>Edit</Button>
                <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
            </Form>
          </div>)}
        </div>
    );
  }
}

export default EditAdmin;