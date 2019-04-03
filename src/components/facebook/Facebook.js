import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

import local_storage from 'localStorage';

export default class Facebook extends Component{

	state={
		isLoggedIn: false,
		userID: '',
		name: '',
		email: '',
		picture: ''
	}

	getCustomerData = () => {
	    let self = this;
        fetch('http://localhost:3001/v1/customers/email/' + self.state.email, {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            console.log(result.data[0]);
            local_storage.setItem('user_data', JSON.stringify(result.data[0]));
            window.location.href='/';
        }).catch(err => {
        	console.log(err);
        })
	}

	responseFacebook = (response) => {
		this.setState({
			isLoggedIn: true,
			userID: response.userID,
			name: response.name,
			email: response.email,
			picture: response.picture.data.url
		});

		const credentials = JSON.stringify({first_name: this.state.name, email_address: this.state.email})

        fetch(`http://localhost:3001/v1/customers/social`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: credentials
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status===200 || result.status===406){
          		this.getCustomerData(); 
          }
        })
        .catch((e) => {
          console.log(e)
        })
	}

	render(){
		let fbContent;
		
		if(this.state.isLoggedIn){
			fbContent = null;
		}else{
			fbContent = (
				<FacebookLogin
				    appId="2161430787297423"    
				    fields="name,email,picture"
				    callback={this.responseFacebook}
				    cssClass="my-facebook-button-class"
				/>
			);
		}

		return(
			<div>
				{fbContent}
			</div>

		)
	}
}