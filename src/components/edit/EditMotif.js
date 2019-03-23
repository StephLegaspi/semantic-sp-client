import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditMotif extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			name: "",
	        description: "",

	        name_error: false,
    		description_error: false,

	        form_complete: '',
	        prompt_message: '',
	        prompt_header: ''
		}
		this.handleNameChange = this.handleNameChange.bind(this);
      	this.handleDescChange = this.handleDescChange.bind(this);
	}

	handleNameChange(e) {this.setState({name: e.target.value}); }
  	handleDescChange(e) {this.setState({description: e.target.value}); }

	onModal = () => {
		this.getData();
		this.setState({activeModal: true});
	}

	cancel = () => {
		this.setState({activeModal: false});
		this.setState({name_error: ''});
	    this.setState({description_error: ''});
	    this.setState({form_complete: ''});
	    this.setState({prompt_header: ''});
    	this.setState({prompt_message: ''});
	}

	getData = () => {
		this.setState({name: this.props.data.name})
		this.setState({description: this.props.data.description})
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
	      this.setState({prompt_message: 'Please fill up all the fields.'});  
	    }else{
	      this.setState({form_complete: true});
	      this.submitEdit();
	      this.setState({name: ''});
	      this.setState({description: ''});

	      this.setState({name_error: ''});
	   	  this.setState({description_error: ''});
	    }

	}

	submitEdit = () => {
        const motif = JSON.stringify({name: this.state.name, description: this.state.description})
       
        fetch(`http://localhost:3001/v1/event_motifs/` + this.props.data.id,{
            headers: { 'Content-Type': 'application/json' },
            method: "PUT",
            body: motif
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
	                <Form.Input label='Event Motif' placeholder='Event Motif Name' defaultValue={this.props.data.name} onChange={this.handleNameChange} error={this.state.name_error}/>

	                <Form.TextArea label='Description' placeholder={this.props.data.description} onChange={this.handleDescChange} style={{ minHeight: 100 }} error={this.state.description_error}/>

	                {(this.state.form_complete===false) ?
	                  <Message
	                    header={this.state.prompt_header}
	                    content={this.state.prompt_message}
	                  />
	                : ''}

				    <Button type='submit' onClick={this.checkForm} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditMotif;