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

		this.state = {
			data: [],
			prod_id: ''
		}
		 this.stateOptions = [ { key: '1', value: '1', text: 'One' }, { key: '2', value: '2', text: 'Two' }, { key: '3', value: '3', text: 'Three' } ]
	}

	componentDidMount() {
		this.state.prod_id = this.props.match.params.id;
        let self = this;
        fetch('http://localhost:3001/v1/products/' + self.state.prod_id ,{
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
				<HeaderBar headerTitle={''}/>
		
				<div class="ui fluid segment" id='img-holder'>
					<Image  src={img_tree} rounded size='big' />
				</div>

				{this.state.data.map(product =>
				<div class="ui fluid segment" id='desc-holder'>
					<p className='title-header'> {product.name}</p>
					<p className='body-font'>  P {product.price} </p>
					<div className='div-label'>
						<label className='label-font'> Product Color: </label>
						<Dropdown placeholder='Color' search selection options={this.stateOptions} style={{marginLeft: '5%'}}/>
					</div>
					<br/>
					<div className='div-label'>
						<label className='label-font'> Quantity: </label>
						<Dropdown placeholder='Quantity' search selection options={this.stateOptions} style={{marginLeft: '5%'}}/>
					</div>
					<br/>
					<div className='div-label'>
						<label className='label-font'> Description: </label>
						<p style={{marginLeft: '25%'}}> {product.description}</p>
					</div>
					<div className='div-label'>
						<AddCartButton/>
					</div>
				</div>
				)}
				
				<div style={{clear: 'both'}}>
					<Footer/>
				</div>
				
			</div>
		);
	}
}

export default AddToCart;