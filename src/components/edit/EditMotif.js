import React, { Component } from 'react';
import { Form, Input, Button, TextArea } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditMotif extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			data_result: [],
			name: "",
	        description: ""
		}
		this.handleNameChange = this.handleNameChange.bind(this);
      	this.handleDescChange = this.handleDescChange.bind(this);
	}

	handleNameChange = (e) =>  this.setState({name: e.target.value});
  	handleDescChange = (e) =>  this.setState({description: e.target.value});

	onModal = () => {
		this.getData(this.props.motif_id);
		this.setState({activeModal: true});
	}

	cancel = () => {
		this.setState({activeModal: false});
	}

	getData = (id) => {

		fetch(`http://localhost:3001/v1/event_motifs/`+ id,{
		      headers: { 'Content-Type': 'application/json' },
		      method: "GET"
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				this.setState({data_result: result.data[0]})
				this.setState({name: this.state.data_result.name})
				this.setState({description: this.state.data_result.description})
			})
			.catch((e) => {
				console.log(e)
			})
	}

	submitEdit = () => {

        const motif = JSON.stringify({name: this.state.name, description: this.state.description})
       
        fetch(`http://localhost:3001/v1/event_motifs/` + this.props.motif_id,{
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
          this.getData(this.props.motif_id)
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
					<Form.Field>
	                  <label>Event Motif Name</label>
	                  <Input placeholder='Event Motif Name' defaultValue={this.state.data_result.name} onChange={this.handleNameChange}/>
	                </Form.Field>

	                <Form.Field>
	                  <label>Description</label>
	                  <TextArea placeholder={this.state.data_result.description} onChange={this.handleDescChange} style={{ minHeight: 100 }} />
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
				    <Button type='submit' onClick={this.submitEdit} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditMotif;