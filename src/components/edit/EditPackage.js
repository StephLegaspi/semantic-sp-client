import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

import local_storage from 'localStorage';

class EditPackage extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			inclusion_arr: [],
			name: "",
	        price: "",
	        inclusion: "",

	        name_error: false,
    		price_error: false,
    		inclusion_error: false,

    		form_complete: '',
    		form_error_field: '',
	        prompt_message: '',
	        prompt_header: ''
		}

		this.handleNameChange = this.handleNameChange.bind(this);
      	this.handlePriceChange = this.handlePriceChange.bind(this);
      	this.handleInclusionChange = this.handleInclusionChange.bind(this);
	}

	handleNameChange(e) {this.setState({name: e.target.value}); }
  	handlePriceChange(e) {this.setState({price: e.target.value}); }
  	handleInclusionChange(e) {this.setState({inclusion: e.target.value}); }

	onModal = () => {
		this.getData(this.props.data.id);
		this.setState({activeModal: true});
	}

	cancel = () => {
		this.setState({activeModal: false});

		this.setState({name_error: ''});
	    this.setState({price_error: ''});
	    this.setState({inclusion_error: ''});

	    this.setState({form_complete: ''});
	    this.setState({form_error_field: ''});
	    this.setState({prompt_header: ''});
    	this.setState({prompt_message: ''});
	}

	getData = (id) => {

		this.setState({name: this.props.data.name});
		this.setState({price: this.props.data.price});
		this.getInclusion(id);

		
	}

	concatInclusion = () => {
		var stringInclusion = this.state.inclusion_arr[0].inclusion;
		var i;

		for(i=1; i<(this.state.inclusion_arr.length); i++){
			stringInclusion = stringInclusion + ", " + this.state.inclusion_arr[i].inclusion;
		}
		this.setState({inclusion: stringInclusion})
	}	

	getInclusion = (id) => {
		fetch(`http://localhost:3001/v1/packages/inclusions/`+ id,{
		      headers: { 'Content-Type': 'application/json' },
		      method: "GET"
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				this.setState({inclusion_arr: result.data})
				this.concatInclusion();
			})
			.catch((e) => {
				console.log(e)
			})		
	}

	checkForm = () => {
	    let error = false;
	    const re = /^-?\d*(\.\d+)?$/;

	    if(this.state.name === ''){
	      this.setState({name_error: true});
	      error=true;
	    }
	    if(this.state.price === ''){
	      this.setState({price_error: true});
	      error=true;
	    }
	    if(this.state.inclusion === ''){
	      this.setState({inclusion_error: true});
	      error=true;
	    }

	    if(error){
	      this.setState({form_complete: false});
	      this.setState({prompt_header: 'Incomplete Information'}); 
	      this.setState({prompt_message: 'Please fill up all the fields.'});  
	    }else{
	      this.setState({form_complete: true});
	      if(re.test(this.state.price)){
	     	this.submitEdit();
		    this.setState({name: ''});
	    	this.setState({price: ''});
	    	this.setState({inclusion: ''});
		    this.cancel();
	      }else{
	        this.setState({form_error_field: true});
	        this.setState({price_error: true});
	        this.setState({prompt_header: 'Incorrect value for price'}); 
	        this.setState({prompt_message: 'Please enter a correct value for package price.'});
	      }
	    }

	}

	submitEdit = () => {
		const id_session = JSON.parse(local_storage.getItem("user_data")).id;
        const pkg = JSON.stringify({name: this.state.name, price: this.state.price, inclusion: this.state.inclusion, session_id: id_session})
       
        fetch(`http://localhost:3001/v1/packages/` + this.props.data.id,{
            headers: { 'Content-Type': 'application/json' },
            method: "PUT",
            body: pkg
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status){
            this.props.handleUpdate()
            this.setState({activeModal: false})
          }
          this.getData(this.props.data.id)
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
	                    <Form.Input label='Package Name' placeholder='name' defaultValue={this.props.data.name} onChange={this.handleNameChange} error={this.state.name_error}/>
	                    <Form.Input label='Price' defaultValue={this.props.data.price} onChange={this.handlePriceChange} error={this.state.price_error}/>
	                </Form.Group>
	             
	                <Form.Input label='Inclusions' defaultValue={this.state.inclusion} onChange={this.handleInclusionChange} error={this.state.inclusion_error}/>
	                	
	                {(this.state.form_complete===false || this.state.form_error_field===true) ?
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

export default EditPackage;