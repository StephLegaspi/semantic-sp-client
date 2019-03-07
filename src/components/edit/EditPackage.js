import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditPackage extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			data_result: [],
			inclusion_arr: [],
			inclusion_string: "",
			name: "",
	        price: "",
	        inclusion: ""
		}

		this.handleNameChange = this.handleNameChange.bind(this);
      	this.handlePriceChange = this.handlePriceChange.bind(this);
      	this.handleInclusionChange = this.handleInclusionChange.bind(this);
	}

	handleNameChange(e) {this.setState({name: e.target.value}); }
  	handlePriceChange(e) {this.setState({price: e.target.value}); }
  	handleInclusionChange(e) {this.setState({inclusion: e.target.value}); }

	onModal = () => {
		this.getData(this.props.pkg_id);
		this.getInclusion(this.props.pkg_id);
		this.setState({activeModal: true});
	}

	cancel = () => {
		this.setState({activeModal: false});
	}

	getData = (id) => {

		fetch(`http://localhost:3001/v1/packages/`+ id,{
		      headers: { 'Content-Type': 'application/json' },
		      method: "GET"
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				this.setState({data_result: result.data[0]})
				this.setState({name: this.state.data_result.name})
				this.setState({price: this.state.data_result.price})
				this.getInclusion(id)
				this.setState({inclusion: this.state.inclusion_string})
			})
			.catch((e) => {
				console.log(e)
			})
		
	}

	concatInclusion = () => {
		var stringInclusion = this.state.inclusion_arr[0].inclusion;
		var i;

		for(i=1; i<(this.state.inclusion_arr.length); i++){
			stringInclusion = stringInclusion + ", " + this.state.inclusion_arr[i].inclusion;
		}
		this.setState({inclusion_string: stringInclusion})
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


	submitEdit = () => {

        const pkg = JSON.stringify({name: this.state.name, price: this.state.price, inclusion: this.state.inclusion})
       
        fetch(`http://localhost:3001/v1/packages/` + this.props.pkg_id,{
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
          this.getData(this.props.pkg_id)
          this.getInclusion(this.props.pkg_id)
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
	                    <label>Package Name</label>
	                    <Input placeholder='name' defaultValue={this.state.data_result.name} onChange={this.handleNameChange}/>
	                  </Form.Field>
	                  <Form.Field>
	                    <label>Price</label>
	                    <Input defaultValue={this.state.data_result.price} onChange={this.handlePriceChange}/>
	                  </Form.Field>
	                </Form.Group>

	               <Form.Field>
	                  <label>Inclusions</label>
	                  <Input defaultValue={this.state.inclusion_string} onChange={this.handleInclusionChange}/>
	                </Form.Field>
	                
				    <Button type='submit' onClick={this.submitEdit} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditPackage;