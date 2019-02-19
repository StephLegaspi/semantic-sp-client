import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import EditPassword from '../edit/EditPassword.js'
import EditAdmin from '../edit/EditAdmin.js'

import '../../styles/view.css';
import '../../styles/font.css';
import img_tree from '../../images/tree.jpg'


class ProfileAdmin extends Component {
	constructor(props){
		super(props);

		this.state = {}
		 this.stateOptions = [ { key: '1', value: '1', text: 'One' }, { key: '2', value: '2', text: 'Two' }, { key: '3', value: '3', text: 'Three' } ]
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={'Profile'}/>
		
				<div class="ui fluid segment" id='img-profile'>
					<Image  src={img_tree} rounded size='big' />
				</div>

				<div class="ui fluid segment" id='info-profile'>
					<p className='title-header'> Stephanie Legaspi</p>
					<p className='body-font'>  10066165 </p>
					
					<div style={{marginTop: '2%'}}>
						<label className='label-font'> Email Address: </label>
						<p style={{marginLeft: '25%'}}> sylegaspi@up.edu.ph</p>
					</div>
					<div style={{marginTop: '2%'}}>
						<label className='label-font'> Contact Number: </label>
						<p style={{marginLeft: '25%'}}> 09498812448</p>
					</div>
					<div style={{marginTop: '4%'}}>
						<div style={{float: 'left', marginLeft: '66%'}}>
							<EditPassword/>
						</div>
						<div style={{marginLeft: '95%'}}>
							<EditAdmin/>
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default ProfileAdmin;