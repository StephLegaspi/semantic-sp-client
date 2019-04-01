import React, { Component } from 'react';
import { Form, Message} from 'semantic-ui-react'
import { DateInput, TimeInput } from 'semantic-ui-calendar-react';

import HeaderBar from '../headerBar/HeaderBar.js'
import SendButton from '../button/SendButton.js'
import Footer from '../footer/Footer.js'
import PromptModal from '../infoModal/PromptModal.js'
import LoginModal from '../add/LoginModal.js'

import '../../styles/add.css';

import local_storage from 'localStorage';

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
      time: '',
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
      success: false,

      fname_error: '',
      mname_error: '',
      lname_error: '',
      email_error: '',
      contact_error: '',
      event_type_error: '',
      num_persons_error: '',
      event_location_error: '',
      package_error: '',
      motif_error: '',
      menu_error: '',
      date_error: '',
      time_error: '',

      form_error_field: '',
      form_complete: '',
      prompt_message: '',
      prompt_header: '',

      user_session: JSON.parse(local_storage.getItem("user_data")),
      no_user: false

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

  handleFirstNameChange(e) { this.setState({first_name: e.target.value, fname_error: false}); }
  handleMiddleNameChange(e) { this.setState({middle_name: e.target.value, mname_error: false}); }
  handleLastNameChange(e) { this.setState({last_name: e.target.value, lname_error: false}); }
  handleEmailChange(e) { this.setState({email_address: e.target.value, email_error: false}); }
  handleContactChange(e) { this.setState({contact_number: e.target.value, contact_error: false}); }
  handleEventLocationChange(e) { this.setState({event_location: e.target.value, event_location_error: false}); }
  handlePersonsChange(e) { this.setState({number_of_persons: e.target.value, num_persons_error: false}); }
 
  handleDateChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value, date_error: false });
    }
  }

  handleTimeChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value, time_error: false });
    }
  }

  handlePackageChange = (e, { value }) => {
    this.setState({package_id: value, package_error: false});
  }

  handleMotifChange = (e, { value }) => {
    this.setState({motif_id: value, motif_error: false});
  }

  handleMenuChange = (e, { value }) => {
    this.setState({menu_id: value, menu_error: false});
  }

  handleEventTypeChange = (e, { value }) => {
    this.setState({event_type: value, event_type_error: false});
  }

  setSuccess = () => {
    this.setState({success: false});
  }

  setSession = () => {
    this.setState({user_session: JSON.parse(local_storage.getItem("user_data")) });
    this.checkForm();
  }

  cancelLogin = () => {
    this.setState({no_user: false});
  }


  componentDidMount() {
        this.setState({user_session: JSON.parse(local_storage.getItem("user_data")) })
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

  checkForm = () => {
    var error = false;
    
      if(this.state.first_name === ''){
        this.setState({fname_error: true});
        error=true;
      }
      if(this.state.middle_name === ''){
        this.setState({mname_error: true});
        error=true;
      }
      if(this.state.last_name === ''){
        this.setState({lname_error: true});
        error=true;
      }
      if(this.state.email_address === ''){
        this.setState({email_error: true});
        error=true;
      }
      if(this.state.contact_number === ''){
        this.setState({contact_error: true});
        error=true;
      }
      if(this.state.event_type === ''){
        this.setState({event_type_error: true});
        error=true;
      }
      if(this.state.number_of_persons === ''){
        this.setState({num_persons_error: true});
        error=true;
      }
      if(this.state.event_location === ''){
        this.setState({event_location_error: true});
        error=true;
      }
      if(this.state.package_id === ''){
        this.setState({package_error: true});
        error=true;
      }
      if(this.state.motif_id === ''){
        this.setState({motif_error: true});
        error=true;
      }
      if(this.state.menu_id === ''){
        this.setState({menu_error: true});
        error=true;
      }
      if(this.state.date === ''){
        this.setState({date_error: true});
        error=true;
      }
      if(this.state.time === ''){
        this.setState({time_error: true});
        error=true;
      }


      if(error){
        this.setState({form_complete: false});
        this.setState({prompt_header: 'Incomplete Information'}); 
        this.setState({prompt_message: 'Please fill up all the required fields.'});  
      }else{
        this.setState({form_complete: true});
        this.handleSubmit();
      }
    

  }

  handleSubmit = () => {
    if(this.state.user_session===null){
        this.setState({success: false});
        this.setState({no_user: true});
    }else{
        const id_session = JSON.parse(local_storage.getItem("user_data")).id;
        const request = JSON.stringify({
            customer_first_name: this.state.first_name, 
            customer_middle_name: this.state.middle_name,
            customer_last_name: this.state.last_name,
            customer_email: this.state.email_address,
            customer_contact_number: this.state.contact_number,
            event_date: this.state.date,
            event_time: this.state.time,
            event_type: this.state.event_type,
            event_location: this.state.event_location,
            number_of_persons: this.state.number_of_persons,
            package_id: this.state.package_id,
            menu_id: this.state.menu_id,
            motif_id: this.state.motif_id,
            session_id: id_session
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
            this.setState({time: ''});
            this.setState({event_type: ''});
            this.setState({event_location: ''});
            this.setState({number_of_persons: ''});
            this.setState({package_id: ''});
            this.setState({menu_id: ''});
            this.setState({motif_id: ''});

            this.setState({prompt_header: ''});
            this.setState({prompt_message: ''});
            this.setState({form_error_field: ''});
            this.setState({success: true});
            window.location.href='/request-package'
          }else if(result.status===400){
            this.setState({form_error_field: true});
            this.setState({prompt_header: 'Invalid Email Address or Contact Number'});
            this.setState({prompt_message: 'Please enter a valid email or contact number.'});
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
      
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
        <div className='form-style2'>  
            <Form>

                <Form.Group widths='equal'>
                  <Form.Input fluid required label='First name' placeholder='First name' value={this.state.first_name} onChange={this.handleFirstNameChange} error={this.state.fname_error} />
                  <Form.Input fluid required label='Middle name' placeholder='Middle name' value={this.state.middle_name} onChange={this.handleMiddleNameChange} error={this.state.mname_error} />
                  <Form.Input fluid required label='Last name' placeholder='Last name' value={this.state.last_name} onChange={this.handleLastNameChange} error={this.state.lname_error} />
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Input fluid required label='Email Address' placeholder='Email Address' value={this.state.email_address} onChange={this.handleEmailChange} error={this.state.email_error} />
                  <Form.Input fluid required label='Contact Number' placeholder='Contact Number' value={this.state.contact_number} onChange={this.handleContactChange} error={this.state.contact_error} />
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Dropdown required label='Event Type' placeholder='Event Type' selection options={this.stateOptions} value={this.state.event_type} onChange={this.handleEventTypeChange} error={this.state.event_type_error}/>
                  <Form.Field required control='input' type='number' min={1} label='No. of Persons' placeholder='No. of Persons' value={this.state.number_of_persons} onChange={this.handlePersonsChange} error={this.state.num_persons_error}/>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Field required error={this.state.date_error}>
                    <label >Event Date</label>
                    <DateInput
                      name="date"
                      placeholder="Event Date"
                      value={this.state.date}
                      iconPosition="left"
                      onChange={this.handleDateChange}
                    />
                  </Form.Field>
                  <Form.Field required error={this.state.time_error}>
                    <label >Event Time</label>
                    <TimeInput
                      name="time"
                      placeholder="Event Time"
                      value={this.state.time}
                      iconPosition="left"
                      onChange={this.handleTimeChange}
                    />
                  </Form.Field>
                </Form.Group>

                <Form.Input required label='Venue Address' placeholder='Venue Address' value={this.state.event_location} onChange={this.handleEventLocationChange} error={this.state.event_location_error}/>
                 
                <Form.Group widths='equal'>
                  <Form.Dropdown required label='Catering Package' placeholder='Catering Package' search selection options={this.state.package_options2} value={this.state.package_id} onChange={this.handlePackageChange} error={this.state.package_error}/>
                  <Form.Dropdown required label='Event Motif' placeholder='Event Motif' search selection options={this.state.motif_options2} value={this.state.motif_id} onChange={this.handleMotifChange} error={this.state.motif_error}/>
                  <Form.Dropdown required label='Food Menu' placeholder='Food Menu' search selection options={this.state.menu_options2} value={this.state.menu_id} onChange={this.handleMenuChange} error={this.state.menu_error}/>
                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Field>
                    <a href='http://localhost:3000/packages'> *See Catering Packages here</a>
                  </Form.Field>
                  <Form.Field>
                    <a href='http://localhost:3000/motifs'> *See Event Motifs here</a>
                  </Form.Field>
                  <Form.Field>
                    <a href='http://localhost:3000/menus'> *See Food Menus here</a>
                  </Form.Field>
                </Form.Group>

                {(this.state.form_complete===false || this.state.form_error_field===true) ?
                  <Message
                    header={this.state.prompt_header}
                    content={this.state.prompt_message}
                  />
                : ''}

                <SendButton handleAdd={this.checkForm}/>
                {(this.state.success) ? <PromptModal changePrompt={this.setSuccess} modalStatus={true} message={'Request has been successfuly sent!'}/> : '' }
                
                {(this.state.no_user===true) ? <LoginModal changeSession={this.setSession} cancelAction={this.cancelLogin} modalStatus={true}/> : '' }
            </Form>
         
        </div>

        <Footer/>
      </div>
    );
  }
}

