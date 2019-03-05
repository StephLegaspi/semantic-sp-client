import React, { Component } from 'react';
import { Form, Button, TextArea } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditFAQ extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			data_result: [],
			question: "",
        	answer: ""
		}

		this.handleQuestionChange = this.handleQuestionChange.bind(this);
    	this.handleAnswerChange = this.handleAnswerChange.bind(this);
	}

	handleQuestionChange(e){ this.setState({question: e.target.value}); }
	handleAnswerChange(e){ this.setState({answer: e.target.value}); }

	onModal = () => {
		this.getData(this.props.faq_id);
		this.setState({activeModal: true});
	}

	cancel = () => {
		this.setState({activeModal: false});
	}

	getData = (id) => {

		fetch(`http://localhost:3001/v1/FAQs/`+ id,{
		      headers: { 'Content-Type': 'application/json' },
		      method: "GET"
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				this.setState({data_result: result.data[0]})
				this.setState({question: this.state.data_result.question})
				this.setState({answer: this.state.data_result.answer})
			})
			.catch((e) => {
				console.log(e)
			})
	}

	submitEdit = () => {

        const faq = JSON.stringify({question: this.state.question, answer: this.state.answer})
       
        fetch(`http://localhost:3001/v1/FAQs/` + this.props.faq_id,{
            headers: { 'Content-Type': 'application/json' },
            method: "PUT",
            body: faq
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status){
            this.props.handleUpdate()
            this.setState({activeModal: false})
          }
          this.getData(this.props.faq_id)
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
	                    <label>Question</label>
	                    <TextArea placeholder={this.state.data_result.question} style={{ minHeight: 100 }} onChange={this.handleQuestionChange}/>
	                  </Form.Field>
	                  <Form.Field>
	                    <label>Answer</label>
	                    <TextArea placeholder={this.state.data_result.answer} style={{ minHeight: 100 }} onChange={this.handleAnswerChange}/>
	                  </Form.Field>

				    <Button type='submit' onClick={this.submitEdit} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditFAQ;