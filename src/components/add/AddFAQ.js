import React, { Component } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react'

import AddButton from '../button/AddButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

class AddFAQ extends Component {

  constructor() {
      super();
      this.state = {
        activeModal: false,
        question: "",
        answer: ""
      }
      this.handleQuestionChange = this.handleQuestionChange.bind(this);
      this.handleAnswerChange = this.handleAnswerChange.bind(this);
  }

  handleQuestionChange(e){ this.setState({question: e.target.value}); }
  handleAnswerChange(e){ this.setState({answer: e.target.value}); }

  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});
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
                  <Form.Field>
                    <label>Question</label>
                    <TextArea placeholder='Question' style={{ minHeight: 100 }} onChange={this.handleQuestionChange}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Answer</label>
                    <TextArea placeholder='Answer' style={{ minHeight: 100 }} onChange={this.handleAnswerChange}/>
                  </Form.Field>

              <Button type='submit' onClick={this.handleSubmit} id='edit-button2'>Add</Button>
              <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
          </Form>
          </div>)}
        </div>
    );
  }
}

export default AddFAQ;