import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

import AddButton from '../button/AddButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

class AddFAQ extends Component {

  constructor() {
      super();
      this.state = {
        activeModal: false,
        question: "",
        answer: "",

        question_error: '',
        answer_error: '',

        form_complete: '',
        prompt_message: '',
        prompt_header: ''
      }
      this.handleQuestionChange = this.handleQuestionChange.bind(this);
      this.handleAnswerChange = this.handleAnswerChange.bind(this);
  }

  handleQuestionChange(e){ this.setState({question: e.target.value, question_error: false}); }
  handleAnswerChange(e){ this.setState({answer: e.target.value, answer_error: false}); }

  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});

    this.setState({question: ''});
    this.setState({answer: ''});

    this.setState({question_error: ''});
    this.setState({answer_error: ''});

    this.setState({prompt_header: ''});
    this.setState({prompt_message: ''});
    this.setState({form_complete: ''});
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
      this.setState({prompt_message: 'Please fill up all the required fields.'});  
    }else{
      this.setState({form_complete: true});
      this.handleSubmit();
      this.setState({question: ''});
      this.setState({answer: ''});
    }

  }

  handleSubmit = () => {
        const faq = JSON.stringify({question: this.state.question, answer: this.state.answer})
       
        fetch(`http://localhost:3001/v1/FAQs`,{
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: faq
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
                 
              <Form.TextArea required label='Question' placeholder='Question' style={{ minHeight: 100 }} onChange={this.handleQuestionChange} error={this.state.question_error}/>
                  
              <Form.TextArea required label='Answer' placeholder='Answer' style={{ minHeight: 100 }} onChange={this.handleAnswerChange} error={this.state.answer_error}/>
              
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

export default AddFAQ;