import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

import EditButton from '../button/EditButton.js'

import '../../styles/edit.css';
import '../../styles/button.css';

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
			others_arr: []
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

	submitEdit = () => {
        const menu = JSON.stringify({name: this.state.name, main_course: this.state.main_course, appetizer: this.state.appetizer, dessert: this.state.dessert, soup: this.state.soup, beverage: this.state.beverage, others: this.state.others})

       
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
					<Form.Field>
	                  <label>Food Menu Name</label>
	                  <Input placeholder='Food Menu Name' defaultValue={this.props.data.name} onChange={this.handleNameChange}/>
	                </Form.Field>

	                <Form.Group widths='equal'>
	                  <Form.Field>
	                    <label>Main Course</label>
	                    <Input defaultValue={this.state.main_course} onChange={this.handleMainCourseChange}/>
	                  </Form.Field>
	                  <Form.Field>
	                    <label>Appetizer</label>
	                    <Input defaultValue={this.state.appetizer} onChange={this.handleAppetizerChange}/>
	                  </Form.Field>
	                </Form.Group>

	                <Form.Group widths='equal'>
	                  <Form.Field>
	                    <label>Dessert</label>
	                    <Input defaultValue={this.state.dessert} onChange={this.handleDessertChange}/>
	                  </Form.Field>
	                  <Form.Field>
	                    <label>Soup</label>
	                    <Input defaultValue={this.state.soup} onChange={this.handleSoupChange}/>
	                  </Form.Field>
	                </Form.Group>

	                <Form.Group widths='equal'>
	                  <Form.Field>
	                    <label>Beverage</label>
	                    <Input defaultValue={this.state.beverage} onChange={this.handleBeverageChange}/>
	                  </Form.Field>
	                  <Form.Field>
	                    <label>Others</label>
	                    <Input defaultValue={this.state.others} onChange={this.handleOthersChange}/>
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
				    <Button type='submit' onClick={this.submitEdit} id='edit-button2'>Edit</Button>
				    <Button type='submit' onClick={this.cancel} id='cancel-button'>Cancel</Button>
				</Form>
	      	</div>)}
      	</div>
		);
	}
}

export default EditMenu;