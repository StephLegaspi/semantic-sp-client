import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditProduct extends Component {
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
					<Form.Field>
	                  <label>Product Name</label>
	                  <Input placeholder='Product Name'/>
	                </Form.Field>

	                <Form.Group widths='equal'>
	                  <Form.Field>
	                    <label>Price</label>
	                    <Input placeholder='Price'/>
	                  </Form.Field>
	                  <Form.Field>
	                    <label>Total Quantity</label>
	                    <Input placeholder='Total Quantity'/>
	                  </Form.Field>
	                </Form.Group>

	                <Form.Field>
	                    <label>Description</label>
	                    <Input placeholder='Description'/>
	                  </Form.Field>

	                <Form.Group inline>
	                  <label>Product Image: </label>
	                  <Form.Field className="relative">
	                      <input type="file" class="inputfile" id="embedpollfileinput" className="absolute"/>
	                      <div className="absolute2"> 
	                          <label for="embedpollfileinput" class="ui button" style={{ height: '37px', width:'104px', paddingTop: '10px', paddingRight: '17px'}}> 
	                            <i class="ui upload icon"></i>   
	                             Upload
	                          </label>
	                      </div>
	                  </Form.Field>
	                </Form.Group>   

	                <Form.Group inline>
	                  <label>Display Product: </label>
	                  <Form.Field>
	                    <Checkbox toggle />
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

export default EditProduct;