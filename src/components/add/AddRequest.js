import React, { Component } from 'react';
import { Form, Input, Dropdown} from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';

import HeaderBar from '../headerBar/HeaderBar.js'
import SendButton from '../button/SendButton.js'
import Footer from '../footer/Footer.js'

import '../../styles/add.css';

export default class AddRequest extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      date: '',
      package_options: [],
      package_options2: [],

      motif_options: [],
      motif_options2: [],

      menu_options: [],
      menu_options2: []

    };

  }
 
  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/packages/names', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({package_options: result.data});
            self.setPackageOptions();
        }).catch(err => {
          console.log(err);
        })

        fetch('http://localhost:3001/v1/event_motifs/names', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({motif_options: result.data});
            self.setMotifOptions();
        }).catch(err => {
          console.log(err);
        })

        fetch('http://localhost:3001/v1/food_menus/names', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({menu_options: result.data});
            self.setMenuOptions();
        }).catch(err => {
          console.log(err);
        })
  }

  setPackageOptions = () => {
      var pkg_options=[];
      var option_obj = {value: '', text: ''};
      var i;
      for(i=0; i<this.state.package_options.length; i++){
        option_obj['value'] = this.state.package_options[i].name;
        option_obj['text'] = this.state.package_options[i].name;
        pkg_options.push(option_obj);
        option_obj = {value: '', text: ''}
      }
      this.setState({package_options2: pkg_options});
  }

  setMotifOptions = () => {
      var motif_options=[];
      var option_obj = {value: '', text: ''};
      var i;
      for(i=0; i<this.state.motif_options.length; i++){
        option_obj['value'] = this.state.motif_options[i].name;
        option_obj['text'] = this.state.motif_options[i].name;
        motif_options.push(option_obj);
        option_obj = {value: '', text: ''}
      }
      this.setState({motif_options2: motif_options});
  }

  setMenuOptions = () => {
      var menu_options=[];
      var option_obj = {value: '', text: ''};
      var i;
      for(i=0; i<this.state.menu_options.length; i++){
        option_obj['value'] = this.state.menu_options[i].name;
        option_obj['text'] = this.state.menu_options[i].name;
        menu_options.push(option_obj);
        option_obj = {value: '', text: ''}
      }
      this.setState({menu_options2: menu_options});
  }

  render(){
    return(
      <div>
        <HeaderBar headerTitle={'Request Package'}/>
        <div className='form-style'>
        
            
            <Form>
              

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>First Name</label>
                    <Input placeholder='First Name'/>
                  </Form.Field>
                  <Form.Field>
                    <label>Middle Name</label>
                    <Input placeholder='Middle Name'/>
                  </Form.Field>
                  <Form.Field>
                    <label>Last Name</label>
                    <Input placeholder='Last Name'/>
                  </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Email Address</label>
                    <Input placeholder='Email Address'/>
                  </Form.Field>
                  <Form.Field>
                    <label>Contact Number</label>
                    <Input placeholder='Contact Number'/>
                  </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Event Type</label>
                    <Dropdown placeholder='Event Type' search selection options={this.stateOptions} />
                  </Form.Field>
                  <Form.Field>
                    <label>Event Date</label>
                    <DateInput
                      name="date"
                      placeholder="Event Date"
                      value={this.state.date}
                      iconPosition="left"
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>No. of Persons</label>
                    <Input placeholder='No. of Persons'/>
                  </Form.Field>
                </Form.Group>

                <Form.Field>
                  <label>Venue Address</label>
                  <Input placeholder='Venue Address'/>
                </Form.Field>

                 
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Catering Package</label>
                    <Dropdown placeholder='Catering Package' search selection options={this.state.package_options2} />
                  </Form.Field>
                  <Form.Field>
                    <label>Event Motif</label>
                    <Dropdown placeholder='Event Motif' search selection options={this.state.motif_options2} />
                  </Form.Field>
                  <Form.Field>
                    <label>Food Menu</label>
                    <Dropdown placeholder='Food Menu' search selection options={this.state.menu_options2} />
                  </Form.Field>
                </Form.Group>

                <SendButton/>
              
            </Form>
         
        </div>

        <Footer/>
      </div>
    );
  }
}

