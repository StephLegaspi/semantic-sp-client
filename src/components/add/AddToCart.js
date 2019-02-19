import React, { Component } from 'react';
import { Image, Dropdown } from 'semantic-ui-react'

import HeaderBar from '../headerBar/HeaderBar.js'
import AddCartButton from '../button/AddCartButton.js'
import Footer from '../footer/Footer.js'

import '../../styles/add.css';
import '../../styles/font.css';
import img_tree from '../../images/tree.jpg'


class AddToCart extends Component {
	constructor(props){
		super(props);

		this.state = {}
		 this.stateOptions = [ { key: '1', value: '1', text: 'One' }, { key: '2', value: '2', text: 'Two' }, { key: '3', value: '3', text: 'Three' } ]
	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={''}/>
		
				<div class="ui fluid segment" id='img-holder'>
					<Image  src={img_tree} rounded size='big' />
				</div>

				<div class="ui fluid segment" id='desc-holder'>
					<p className='title-header'> Product Name</p>
					<p className='body-font'>  P 30.00 </p>
					<div style={{marginTop: '2%'}}>
						<label className='label-font'> Variation: </label>
						<Dropdown placeholder='Variation' search selection options={this.stateOptions} style={{marginLeft: '12%'}}/>
					</div>
					<div style={{marginTop: '2%'}}>
						<label className='label-font'> Product Color: </label>
						<Dropdown placeholder='Color' search selection options={this.stateOptions} style={{marginLeft: '5%'}}/>
					</div>
					<div style={{marginTop: '2%'}}>
						<label className='label-font'> Quantity: </label>
						<Dropdown placeholder='Quantity' search selection options={this.stateOptions} style={{marginLeft: '5%'}}/>
					</div>
					<div style={{marginTop: '2%'}}>
						<label className='label-font'> Description: </label>
						<p style={{marginLeft: '25%'}}> blaknkfnhghvsckbsdkbcksbvisbdcbsibk</p>
					</div>
					<div style={{marginTop: '2%'}}>
						<AddCartButton/>
					</div>
				</div>
				
				<div style={{clear: 'both'}}>
					<Footer/>
				</div>
				
			</div>
		);
	}
}

export default AddToCart;