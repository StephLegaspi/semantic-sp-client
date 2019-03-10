import React, { Component } from 'react';
import { Form, Input, Dropdown} from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';

import HeaderBar from '../headerBar/HeaderBar.js'
import SendButton from '../button/SendButton.js'
import Footer from '../footer/Footer.js'
import PromptModal from '../infoModal/PromptModal.js'

import '../../styles/add.css';

export default class AddRequest extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      package_options: [],
      package_options2: [],

      motif_options: [],
      motif_options2: [],

      menu_options: [],
      menu_options2: [],
      
      date: '',
      first_name: '',
      middle_name: '',
      last_name: '',
      email_address: '',
      contact_number: '',
      event_type: '',
      number_of_persons: '',
      event_location: '',
      package_id: '',
      motif_id: '',
      menu_id: '',
      success: false

    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleMiddleNameChange = this.handleMiddleNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleEventTypeChange = this.handleEventTypeChange.bind(this);
    this.handleEventLocationChange = this.handleEventLocationChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handlePackageChange = this.handlePackageChange.bind(this);
    this.handleMotifChange = this.handleMotifChange.bind(this);
    this.handleMenuChange = this.handleMenuChange.bind(this);
    this.handlePersonsChange = this.handlePersonsChange.bind(this);

    this.stateOptions = [
      {text: 'Debut', value: 'debut'},
      {text: 'Wedding', value: 'wedding'}
    ]
  }

  handleFirstNameChange(e) { this.setState({first_name: e.target.value}); }
  handleMiddleNameChange(e) { this.setState({middle_name: e.target.value}); }
  handleLastNameChange(e) { this.setState({last_name: e.target.value}); }
  handleEmailChange(e) { this.setState({email_address: e.target.value}); }
  handleContactChange(e) { this.setState({contact_number: e.target.value}); }
  handleEventLocationChange(e) { this.setState({event_location: e.target.value}); }
  handlePersonsChange(e) { this.setState({number_of_persons: e.target.value}); }
 
  handleDateChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  handlePackageChange = (e, { value }) => {
    this.setState({package_id: value});
  }

  handleMotifChange = (e, { value }) => {
    this.setState({motif_id: value});
  }

  handleMenuChange = (e, { value }) => {
    this.setState({menu_id: value});
  }

  handleEventTypeChange = (e, { value }) => {
    this.setState({event_type: value});
  }

  setSuccess = () => {
    this.setState({success: false});
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

  handleSubmit = () => {
        console.log("clicked");
        const request = JSON.stringify({
            customer_first_name: this.state.first_name, 
            customer_middle_name: this.state.middle_name,
            customer_last_name: this.state.last_name,
            customer_email: this.state.email_address,
            customer_contact_number: this.state.contact_number,
            event_date: this.state.date,
            event_type: this.state.event_type,
            event_location: this.state.event_location,
            number_of_persons: this.state.number_of_persons,
            package_id: this.state.package_id,
            menu_id: this.state.menu_id,
            motif_id: this.state.motif_id
        })
       
        fetch(`http://localhost:3001/v1/requests`,{
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: request
          })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status === 200){
            console.log("Successfully added request");
            this.setState({first_name: ''});
            this.setState({middle_name: ''});
            this.setState({last_name: ''});
            this.setState({email_address: ''});
            this.setState({contact_number: ''});
            this.setState({date: ''});
            this.setState({event_type: ''});
            this.setState({event_location: ''});
            this.setState({number_of_persons: ''});
            this.setState({package_id: ''});
            this.setState({menu_id: ''});
            this.setState({motif_id: ''});

            this.setState({success: true});
          }
        })
        .catch((e) => {
          console.log(e)
        })
  }

  setPackageOptions = () => {
      var pkg_options=[];
      var option_obj = {value: '', text: ''};
      var i;
      for(i=0; i<this.state.package_options.length; i++){
        option_obj['value'] = this.state.package_options[i].id;
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
        option_obj['value'] = this.state.motif_options[i].id;
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
        option_obj['value'] = this.state.menu_options[i].id;
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
                    <Input placeholder='First Name' value={this.state.first_name} onChange={this.handleFirstNameChange}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Middle Name</label>
                    <Input placeholder='Middle Name' value={this.state.middle_name} onChange={this.handleMiddleNameChange}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Last Name</label>
                    <Input placeholder='Last Name' value={this.state.last_name} onChange={this.handleLastNameChange}/>
                  </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Email Address</label>
                    <Input placeholder='Email Address' value={this.state.email_address} onChange={this.handleEmailChange}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Contact Number</label>
                    <Input placeholder='Contact Number' value={this.state.contact_number} onChange={this.handleContactChange}/>
                  </Form.Field>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Event Type</label>
                    <Dropdown placeholder='Event Type' search selection options={this.stateOptions} value={this.state.event_type} onChange={this.handleEventTypeChange}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Event Date</label>
                    <DateInput
                      name="date"
                      placeholder="Event Date"
                      value={this.state.date}
                      iconPosition="left"
                      onChange={this.handleDateChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>No. of Persons</label>
                    <Input placeholder='No. of Persons' value={this.state.number_of_persons} onChange={this.handlePersonsChange}/>
                  </Form.Field>
                </Form.Group>

                <Form.Field>
                  <label>Venue Address</label>
                  <Input placeholder='Venue Address' value={this.state.event_location} onChange={this.handleEventLocationChange}/>
                </Form.Field>

                 
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Catering Package</label>
                    <Dropdown placeholder='Catering Package' search selection options={this.state.package_options2} value={this.state.package_id} onChange={this.handlePackageChange} />
                  </Form.Field>
                  <Form.Field>
                    <label>Event Motif</label>
                    <Dropdown placeholder='Event Motif' search selection options={this.state.motif_options2} value={this.state.motif_id} onChange={this.handleMotifChange}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Food Menu</label>
                    <Dropdown placeholder='Food Menu' search selection options={this.state.menu_options2} value={this.state.menu_id} onChange={this.handleMenuChange}/>
                  </Form.Field>
                </Form.Group>

                <SendButton handleAdd={this.handleSubmit}/>
                {this.state.success ? <PromptModal changePrompt={this.setSuccess} modalStatus={true} message={'Request has been successfuly sent!'}/> : ''}
            </Form>
         
        </div>

        <Footer/>
      </div>
    );
  }
}

