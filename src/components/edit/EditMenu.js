import React, { Component } from 'react';
import { Form, Input, Button, TextArea } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditMenu extends Component {
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
	      		<Form className='forms-long'>
					<Form.Field>
	                  <label>Food Menu Name</label>
	                  <Input placeholder='Food Menu Name'/>
	                </Form.Field>

	                <Form.Group widths='equal'>
	                  <Form.Field>
	                    <label>Main Course</label>
	                    <TextArea placeholder='e.g. Course1, Course2, Course3' style={{ minHeight: 100 }} />
	                  </Form.Field>
	                  <Form.Field>
	                    <label>Appetizer</label>
	                    <TextArea placeholder='e.g. Appetizer1, Appetizer2, Appetizer3' style={{ minHeight: 100 }} />
	                  </Form.Field>
	                </Form.Group>

	                <Form.Group widths='equal'>
	                  <Form.Field>
	                    <label>Dessert</label>
	                    <TextArea placeholder='e.g. Dessert1, Dessert2, Dessert3' style={{ minHeight: 100 }} />
	                  </Form.Field>
	                  <Form.Field>
	                    <label>Soup</label>
	                    <TextArea placeholder='e.g. Soup1, Soup2, Soup3' style={{ minHeight: 100 }} />
	                  </Form.Field>
	                </Form.Group>

	                <Form.Group widths='equal'>
	                  <Form.Field>
	                    <label>Beverage</label>
	                    <TextArea placeholder='e.g. Beverage1, Beverage2, Beverage3' style={{ minHeight: 100 }} />
	                  </Form.Field>
	                  <Form.Field>
	                    <label>Others</label>
	                    <TextArea placeholder='e.g. Others1, Others2, Others3' style={{ minHeight: 100 }} />
	                  </Form.Field>
	                </Form.Group>

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
				    <Button type='submit' onClick={this.editDone} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditMenu;