import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import EditPassword from '../edit/EditPassword.js'
import EditAdmin from '../edit/EditAdmin.js'

import '../../styles/view.css';
import '../../styles/font.css';

import local_storage from 'localStorage';

class ProfileAdmin extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: []
		}
		 this.stateOptions = [ { key: '1', value: '1', text: 'One' }, { key: '2', value: '2', text: 'Two' }, { key: '3', value: '3', text: 'Three' } ]
	}

	componentDidMount() {
		const id_session = JSON.parse(local_storage.getItem("user_data")).id;
        let self = this;
        fetch('http://localhost:3001/v1/administrators/profile/' + id_session, {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({data: result.data});
        }).catch(err => {
        	console.log(err);
        })
    }

    update = () => {
    	const id_session = JSON.parse(local_storage.getItem("user_data")).id;
        let self = this;
        fetch('http://localhost:3001/v1/administrators/profile/'  + id_session, {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({data: result.data});
        }).catch(err => {
        	console.log(err);
        })
    }

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Profile'}/>
		

				{this.state.data.map(admin =>
				<div>
				<div class="ui fluid segment" id='img-profile'>
					<Image src= {admin.image===null? 'http://localhost:3001/uploads/2019-04-05T11:02:58.063Zdefault_avatar.png' : `http://localhost:3001/${admin.image}`} rounded size='big' />
				</div>
				<div class="ui fluid segment" id='info-profile'>		
					<p className='title-header'> {admin.first_name + " " + admin.middle_name + " " + admin.last_name}</p>
					<p className='body-font'> ID: {admin.id} </p>
					
					<div style={{marginTop: '2%'}}>
						<label className='label-font'> Email Address: </label>
						<p style={{marginLeft: '25%'}}> {admin.email_address}</p>
					</div>
					<div style={{marginTop: '2%'}}>
						<label className='label-font'> Contact Number: </label>
						<p style={{marginLeft: '25%'}}>{admin.contact_number}</p>
					</div>
					<div style={{marginTop: '4%'}}>
						<div style={{float: 'left', marginLeft: '66%'}}>
							<EditPassword id_user={admin.id}/>
						</div>
						<div style={{marginLeft: '95%'}}>
							<EditAdmin data={admin} handleUpdate={this.update}/>
						</div>
					</div>	
				</div>
				</div>
				)}
				
			</div>
		);
	}
}

export default ProfileAdmin;