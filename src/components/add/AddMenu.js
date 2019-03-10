import React, { Component } from 'react';
import { Button, Form, Input, TextArea } from 'semantic-ui-react'

import AddButton from '../button/AddButton.js'

import '../../styles/add.css';
import '../../styles/button.css';

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
        others: ""
      }
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleMainCourseChange = this.handleMainCourseChange.bind(this);
      this.handleAppetizerChange = this.handleAppetizerChange.bind(this);
      this.handleDessertChange = this.handleDessertChange.bind(this);
      this.handleSoupChange = this.handleSoupChange.bind(this);
      this.handleBeverageChange = this.handleBeverageChange.bind(this);
      this.handleOthersChange = this.handleOthersChange.bind(this);
  }

  handleNameChange(e) { this.setState({name: e.target.value}); }
  handleMainCourseChange(e) { this.setState({main_course: e.target.value}); }
  handleAppetizerChange(e) { this.setState({appetizer: e.target.value}); }
  handleDessertChange(e) { this.setState({dessert: e.target.value}); }
  handleSoupChange(e) { this.setState({soup: e.target.value}); }
  handleBeverageChange(e) { this.setState({beverage: e.target.value}); }
  handleOthersChange(e) { this.setState({others: e.target.value}); }

  onModal = () => {
    this.setState({activeModal: true});
  }

  cancel = () => {
    this.setState({activeModal: false});
  }

  handleSubmit = () => {
        const menu = JSON.stringify({name: this.state.name, main_course: this.state.main_course, appetizer: this.state.appetizer, dessert: this.state.dessert, soup: this.state.soup, beverage: this.state.beverage, others: this.state.others})
       
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
              <Form.Field>
                  <label>Food Menu Name</label>
                  <Input placeholder='Food Menu Name' onChange={this.handleNameChange}/>
                </Form.Field>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Main Course</label>
                    <TextArea placeholder='e.g. Course1, Course2, Course3' style={{ minHeight: 100 }} onChange={this.handleMainCourseChange}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Appetizer</label>
                    <TextArea placeholder='e.g. Appetizer1, Appetizer2, Appetizer3' style={{ minHeight: 100 }} onChange={this.handleAppetizerChange}/>
                  </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Dessert</label>
                    <TextArea placeholder='e.g. Dessert1, Dessert2, Dessert3' style={{ minHeight: 100 }} onChange={this.handleDessertChange}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Soup</label>
                    <TextArea placeholder='e.g. Soup1, Soup2, Soup3' style={{ minHeight: 100 }} onChange={this.handleSoupChange}/>
                  </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Beverage</label>
                    <TextArea placeholder='e.g. Beverage1, Beverage2, Beverage3' style={{ minHeight: 100 }} onChange={this.handleBeverageChange}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Others</label>
                    <TextArea placeholder='e.g. Others1, Others2, Others3' style={{ minHeight: 100 }} onChange={this.handleOthersChange}/>
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

              <Button type='submit' onClick={this.handleSubmit} id='edit-button2'>Add</Button>
              <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
          </Form>
          </div>)}
        </div>
    );
  }
}

