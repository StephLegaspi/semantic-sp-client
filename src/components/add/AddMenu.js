import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

import AddButton from '../button/AddButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

import local_storage from 'localStorage';

export default class AddPackage extends Component {

   constructor() {
      super();
      this.state = {
        activeModal: false,
        name: "",
        main_course: "",
        appetizer: "",
        dessert: "",
        soup: "",
        beverage: "",
        others: "",

        name_error: '',
        main_course_error: '',
        appetizer_error: '',
        dessert_error: '',
        soup_error: '',
        beverage_error: '',
        others_error: '',

        form_complete: '',
        prompt_message: '',
        prompt_header: ''
      }
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleMainCourseChange = this.handleMainCourseChange.bind(this);
      this.handleAppetizerChange = this.handleAppetizerChange.bind(this);
      this.handleDessertChange = this.handleDessertChange.bind(this);
      this.handleSoupChange = this.handleSoupChange.bind(this);
      this.handleBeverageChange = this.handleBeverageChange.bind(this);
      this.handleOthersChange = this.handleOthersChange.bind(this);
  }

  handleNameChange(e) { this.setState({name: e.target.value, name_error: false}); }
  handleMainCourseChange(e) { this.setState({main_course: e.target.value, main_course_error: false}); }
  handleAppetizerChange(e) { this.setState({appetizer: e.target.value, appetizer_error: false}); }
  handleDessertChange(e) { this.setState({dessert: e.target.value, dessert_error: false}); }
  handleSoupChange(e) { this.setState({soup: e.target.value, soup_error: false}); }
  handleBeverageChange(e) { this.setState({beverage: e.target.value, beverage_error: false}); }
  handleOthersChange(e) { this.setState({others: e.target.value, others_error: false}); }

  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});

    this.setState({name: ''});
    this.setState({main_course: ''});
    this.setState({appetizer: ''});
    this.setState({dessert: ''});
    this.setState({soup: ''});
    this.setState({beverage: ''});
    this.setState({others: ''});

    this.setState({name_error: ''});
    this.setState({main_course_error: ''});
    this.setState({appetizer_error: ''});
    this.setState({dessert_error: ''});
    this.setState({soup_error: ''});
    this.setState({beverage_error: ''});
    this.setState({others_error: ''});

    this.setState({prompt_header: ''});
    this.setState({prompt_message: ''});
    this.setState({form_complete: ''});
  }

  checkForm = () => {
    var error = false;

    if(this.state.name === ''){
      this.setState({name_error: true});
      error=true;
    }

    if(error){
      this.setState({form_complete: false});
      this.setState({prompt_header: 'Incomplete Information'}); 
      this.setState({prompt_message: 'Please fill up all the required fields.'});  
    }else{
      this.setState({form_complete: true});
      this.handleSubmit();
      this.setState({name: ''});
      this.setState({main_course: ''});
      this.setState({appetizer: ''});
      this.setState({dessert: ''});
      this.setState({soup: ''});
      this.setState({beverage: ''});
      this.setState({others: ''});
    }

  }

  handleSubmit = () => {
        const id_session = JSON.parse(local_storage.getItem("user_data")).id;
        const menu = JSON.stringify({name: this.state.name, main_course: this.state.main_course, appetizer: this.state.appetizer, dessert: this.state.dessert, soup: this.state.soup, beverage: this.state.beverage, others: this.state.others, session_id: id_session})
       
        fetch(`http://localhost:3001/v1/food_menus`,{
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: menu
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
            <Form className='form-style-longer'>
                
                <Form.Input required label='Food Menu Name' placeholder='Food Menu Name' onChange={this.handleNameChange} error={this.state.name_error}/>

                <Form.Group widths='equal'>
                  <Form.TextArea label='Main Course' placeholder='e.g. Course1, Course2, Course3' style={{ minHeight: 100 }} onChange={this.handleMainCourseChange} error={this.state.main_course_error}/>
                  <Form.TextArea label='Appetizer' placeholder='e.g. Appetizer1, Appetizer2, Appetizer3' style={{ minHeight: 100 }} onChange={this.handleAppetizerChange} error={this.state.appetizer_error}/>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.TextArea label='Dessert' placeholder='e.g. Dessert1, Dessert2, Dessert3' style={{ minHeight: 100 }} onChange={this.handleDessertChange} error={this.state.dessert_error}/>
                  <Form.TextArea label='Pasta/Noodle' placeholder='e.g. Soup1, Soup2, Soup3' style={{ minHeight: 100 }} onChange={this.handleSoupChange} error={this.state.soup_error}/>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.TextArea label='Beverage' placeholder='e.g. Beverage1, Beverage2, Beverage3' style={{ minHeight: 100 }} onChange={this.handleBeverageChange} error={this.state.beverage_error}/>
                  <Form.TextArea label='Others' placeholder='e.g. Others1, Others2, Others3' style={{ minHeight: 100 }} onChange={this.handleOthersChange} error={this.state.others_error}/>
                </Form.Group> 

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

