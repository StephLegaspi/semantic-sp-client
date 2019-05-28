import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

import local_storage from 'localStorage';

class EditMenu extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeModal: false,
			name: "",

			main_course: "",
			main_course_arr: [],

			appetizer: "",
			appetizer_arr: [],

			dessert: "",
			dessert_arr: [],

			soup: "",
			soup_arr: [],

			beverage: "",
			beverage_arr: [],

			others: "",
			others_arr: [],

			name_error: false,
			main_course_error: false,
			appetizer_error: false,
			dessert_error: false,
			soup_error: false,
			beverage_error: false,
			others_error: false,

			form_complete: '',
			form_error_field: '',
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

	handleNameChange(e) {this.setState({name: e.target.value}); }
	handleMainCourseChange(e) {this.setState({main_course: e.target.value}); }
	handleAppetizerChange(e) {this.setState({appetizer: e.target.value}); }
	handleDessertChange(e) {this.setState({dessert: e.target.value}); }
	handleSoupChange(e) {this.setState({soup: e.target.value}); }
	handleBeverageChange(e) {this.setState({beverage: e.target.value}); }
	handleOthersChange(e) {this.setState({others: e.target.value}); }

	onModal = () => {
		this.getData(this.props.data.id);
		this.setState({activeModal: true});
	}

	cancel = () => {
		this.setState({activeModal: false});

		this.setState({name_error: ''});
	    this.setState({main_course_error: ''});
	    this.setState({appetizer_error: ''});
	    this.setState({dessert_error: ''});
	    this.setState({soup_error: ''});
	    this.setState({beverage_error: ''});
	    this.setState({others_error: ''});

	    this.setState({form_complete: ''});
	    this.setState({prompt_header: ''});
    	this.setState({prompt_message: ''});
	}

	getData = (id) => {
		this.setState({name: this.props.data.name});
		this.getMainCourse(id);
		this.getAppetizer(id);
		this.getDessert(id);
		this.getSoup(id);
		this.getBeverage(id);
		this.getOthers(id);
	}

	concatMainCourse = () => {
		var stringInclusion = this.state.main_course_arr[0].inclusion;
		var i;

		for(i=1; i<(this.state.main_course_arr.length); i++){
			stringInclusion = stringInclusion + ", " + this.state.main_course_arr[i].inclusion;
		}
		this.setState({main_course: stringInclusion})
	}

	concatAppetizer = () => {
		var stringInclusion = this.state.appetizer_arr[0].inclusion;
		var i;

		for(i=1; i<(this.state.appetizer_arr.length); i++){
			stringInclusion = stringInclusion + ", " + this.state.appetizer_arr[i].inclusion;
		}
		this.setState({appetizer: stringInclusion})
	}

	concatDessert = () => {
		var stringInclusion = this.state.dessert_arr[0].inclusion;
		var i;

		for(i=1; i<(this.state.dessert_arr.length); i++){
			stringInclusion = stringInclusion + ", " + this.state.dessert_arr[i].inclusion;
		}
		this.setState({dessert: stringInclusion})
	}	

	concatSoup = () => {
		var stringInclusion = this.state.soup_arr[0].inclusion;
		var i;

		for(i=1; i<(this.state.soup_arr.length); i++){
			stringInclusion = stringInclusion + ", " + this.state.soup_arr[i].inclusion;
		}
		this.setState({soup: stringInclusion})
	}

	concatBeverage = () => {
		var stringInclusion = this.state.beverage_arr[0].inclusion;
		var i;

		for(i=1; i<(this.state.beverage_arr.length); i++){
			stringInclusion = stringInclusion + ", " + this.state.beverage_arr[i].inclusion;
		}
		this.setState({beverage: stringInclusion})
	}

	concatOthers = () => {
		var stringInclusion = this.state.others_arr[0].inclusion;
		var i;

		for(i=1; i<(this.state.others_arr.length); i++){
			stringInclusion = stringInclusion + ", " + this.state.others_arr[i].inclusion;
		}
		this.setState({others: stringInclusion})
	}


	getMainCourse = (id) => {
		fetch(`http://localhost:3001/v1/food_menus/main_course/`+ id,{
		      headers: { 'Content-Type': 'application/json' },
		      method: "GET"
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				this.setState({main_course_arr: result.data})
				
				this.concatMainCourse();
			})
			.catch((e) => {
				console.log(e)
			})		
	}



	getAppetizer = (id) => {
		fetch(`http://localhost:3001/v1/food_menus/appetizer/`+ id,{
		      headers: { 'Content-Type': 'application/json' },
		      method: "GET"
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				this.setState({appetizer_arr: result.data})
				this.concatAppetizer();
			})
			.catch((e) => {
				console.log(e)
			})		
	}

	getDessert = (id) => {
		fetch(`http://localhost:3001/v1/food_menus/dessert/`+ id,{
		      headers: { 'Content-Type': 'application/json' },
		      method: "GET"
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				this.setState({dessert_arr: result.data})
				this.concatDessert();
			})
			.catch((e) => {
				console.log(e)
			})		
	}


	getSoup = (id) => {
		fetch(`http://localhost:3001/v1/food_menus/soup/`+ id,{
		      headers: { 'Content-Type': 'application/json' },
		      method: "GET"
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				this.setState({soup_arr: result.data})
				this.concatSoup();
			})
			.catch((e) => {
				console.log(e)
			})		
	}

	getBeverage = (id) => {
		fetch(`http://localhost:3001/v1/food_menus/beverage/`+ id,{
		      headers: { 'Content-Type': 'application/json' },
		      method: "GET"
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				this.setState({beverage_arr: result.data})
				this.concatBeverage();
			})
			.catch((e) => {
				console.log(e)
			})		
	}
	
	getOthers = (id) => {
		fetch(`http://localhost:3001/v1/food_menus/others/`+ id,{
		      headers: { 'Content-Type': 'application/json' },
		      method: "GET"
		    })
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				this.setState({others_arr: result.data})
				this.concatOthers();
			})
			.catch((e) => {
				console.log(e)
			})		
	}

	checkForm = () => {
	    var error = false;
	    let regex_inclusion = /^(([^,']+\s*,\s*)*([^,']+)\s*)*$/;

	    if(this.state.name === ''){
	      this.setState({name_error: true});
	      error=true;
	    }

	    if(error){
	      this.setState({form_complete: false});
	      this.setState({prompt_header: 'Incomplete Information'}); 
	      this.setState({prompt_message: 'Please fill up all the fields.'});  
	    }else{
	    	if(regex_inclusion.test(this.state.main_course) && regex_inclusion.test(this.state.appetizer) && regex_inclusion.test(this.state.dessert) && regex_inclusion.test(this.state.soup) && regex_inclusion.test(this.state.beverage) && regex_inclusion.test(this.state.others)){
		      this.setState({form_complete: true});
		      this.submitEdit();
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
		    }else{
		    	this.setState({form_error_field: true});
          		this.setState({prompt_header: 'Incorrect value for menu inclusion/s'}); 
          		this.setState({prompt_message: 'Please follow the format Menu1, Menu2, Menu3.'});
		    }
	    }

	}

	submitEdit = () => {
		const id_session = JSON.parse(local_storage.getItem("user_data")).id;
        const menu = JSON.stringify({name: this.state.name, main_course: this.state.main_course, appetizer: this.state.appetizer, dessert: this.state.dessert, soup: this.state.soup, beverage: this.state.beverage, others: this.state.others, session_id: id_session})

       
        fetch(`http://localhost:3001/v1/food_menus/` + this.props.data.id,{
            headers: { 'Content-Type': 'application/json' },
            method: "PUT",
            body: menu
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
	                <Form.Input label='Food Menu' placeholder='Food Menu Name' defaultValue={this.props.data.name} onChange={this.handleNameChange} error={this.state.name_error}/>

	                <Form.Group widths='equal'>
	                    <Form.Input label='Main Course' defaultValue={this.state.main_course} onChange={this.handleMainCourseChange} error={this.state.main_course_error}/>
	                    <Form.Input label='Appetizer' defaultValue={this.state.appetizer} onChange={this.handleAppetizerChange} error={this.state.appetizer_error}/>
	                </Form.Group>

	                <Form.Group widths='equal'>
	                    <Form.Input label='Dessert' defaultValue={this.state.dessert} onChange={this.handleDessertChange} error={this.state.dessert_error}/>
	                    <Form.Input label='Pasta/Noodle' defaultValue={this.state.soup} onChange={this.handleSoupChange} error={this.state.soup_error}/>
	                </Form.Group>

	                <Form.Group widths='equal'>
	                	<Form.Input label='Beverage' defaultValue={this.state.beverage} onChange={this.handleBeverageChange} error={this.state.beverage_error}/>
	                    <Form.Input label='Others' defaultValue={this.state.others} onChange={this.handleOthersChange} error={this.state.others_error}/>
	                </Form.Group>

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

export default EditMenu;