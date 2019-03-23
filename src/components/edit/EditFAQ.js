import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

class EditFAQ extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			question: "",
        	answer: "",

        	question_error: false,
        	answer_error: false,

        	form_complete: '',
	        prompt_message: '',
	        prompt_header: ''
		}

		this.handleQuestionChange = this.handleQuestionChange.bind(this);
    	this.handleAnswerChange = this.handleAnswerChange.bind(this);
	}

	handleQuestionChange(e){ this.setState({question: e.target.value}); }
	handleAnswerChange(e){ this.setState({answer: e.target.value}); }

	onModal = () => {
		this.getData();
		this.setState({activeModal: true});
	}

	cancel = () => {
		this.setState({activeModal: false});

		this.setState({question_error: ''});
		this.setState({answer_error: ''});

		this.setState({form_complete: ''});
	    this.setState({prompt_header: ''});
    	this.setState({prompt_message: ''});
	}

	getData = () => {
		this.setState({question: this.props.data.question})
		this.setState({answer: this.props.data.answer})
	}

	checkForm = () => {
	    var error = false;

	    if(this.state.question === ''){
	      this.setState({question_error: true});
	      error=true;
	    }
	    if(this.state.answer === ''){
	      this.setState({answer_error: true});
	      error=true;
	    }

	    if(error){
	      this.setState({form_complete: false});
	      this.setState({prompt_header: 'Incomplete Information'}); 
	      this.setState({prompt_message: 'Please fill up all the fields.'});  
	    }else{
	      this.setState({form_complete: true});
	      this.submitEdit();
	      this.setState({question: ''});
	      this.setState({answer: ''});

	      this.setState({question_error: ''});
	   	  this.setState({answer_error: ''});
	    }

	}

	submitEdit = () => {

        const faq = JSON.stringify({question: this.state.question, answer: this.state.answer})
       
        fetch(`http://localhost:3001/v1/FAQs/` + this.props.data.id,{
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
					<Form.TextArea label='Question' placeholder={this.props.data.question} style={{ minHeight: 100 }} onChange={this.handleQuestionChange} error={this.state.question_error}/>

	                 <Form.TextArea label='Answer' placeholder={this.props.data.answer} style={{ minHeight: 100 }} onChange={this.handleAnswerChange} error={this.state.answer_error}/>

				    <Button type='submit' onClick={this.checkForm} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditFAQ;