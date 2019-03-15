import React, { Component } from 'react';
import { Image, Dropdown, Input } from 'semantic-ui-react'
/*import { DateInput } from 'semantic-ui-calendar-react';*/

import HeaderBar from '../headerBar/HeaderBar.js'
import AddCartButton from '../button/AddCartButton.js'
import Footer from '../footer/Footer.js'
import PromptModal from '../infoModal/PromptModal.js'

import '../../styles/add.css';
import '../../styles/font.css';
import img_tree from '../../images/tree.jpg'


class AddToCartRent extends Component {
	constructor(props){
		super(props);

		this.state = {
	    	date: '',

	    	data: [],
	    	prod_id: '',
			colors_arr: [],
			color_options: [],

			product_color_id: '',
			product_quantity: 1,
			rental_duration: 1,
			cart_id: '',

			has_cart: '',
			session_id: '',
			cust_id: '',

      success: false

    };
		this.stateOptions = [ { key: '1', value: '1', text: 'One' }, { key: '2', value: '2', text: 'Two' }, { key: '3', value: '3', text: 'Three' } ]
	}

	/*handleChange = (event, {name, value}) => {
	    if (this.state.hasOwnProperty(name)) {
	      this.setState({ [name]: value });
	    }
	}*/

    handleColorChange = (e, { value }) => {
  	    this.setState({product_color_id: value});
  	}

  	handleQuantityChange = (e, { value }) => {
  	    this.setState({product_quantity: value});
  	}

  	handleDurationChange = (e, { value }) => {
  	    this.setState({rental_duration: value});
  	}

    setSuccess = () => {
      this.setState({success: false});
      this.props.history.push('/shop/rent');
    }

  	componentDidMount() {
        let self = this;
    
        fetch('http://localhost:3001/v1/products/' + self.props.match.params.id ,{
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({data: result.data});
            self.setState({prod_id: result.data[0].id});
        }).catch(err => {
        	console.log(err);
        })

        fetch('http://localhost:3001/v1/products/colors/' + self.props.match.params.id ,{
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(result) {
            self.setState({colors_arr: result.data});
            self.setColorOptions();
        }).catch(err => {
        	console.log(err);
        })

        this.getSession();
        
    }

    getSession = () => {
        let self = this;

        fetch(`http://localhost:3001/v1/session`,{
            headers: { 'Content-Type': 'application/json' },
            method: "GET"
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          self.setState({session_id: result.session_id});
        })
        .catch((e) => {
          console.log(e)
        })
    }

    findCart = () => {
        fetch(`http://localhost:3001/v1/shopping_carts/rental/` + this.state.cust_id,{
            headers: { 'Content-Type': 'application/json' },
            method: "GET"
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status === 404){
            this.setState({has_cart: 0});
            this.addShoppingCart();
          }else{
            this.setState({has_cart: 1});
            this.setState({cart_id: result.data[0].id});
            this.addCartProduct();
          }
        })
        .catch((e) => {
          console.log(e)
        })

    }

    handleSubmit = () => {
        let self = this;

        fetch('http://localhost:3001/v1/customers/users/' + self.state.session_id,{
            headers: { 'Content-Type': 'application/json' },
            method: "GET"
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          self.setState({cust_id: result.data[0].id});
          self.findCart();
        })
        .catch((e) => {
          console.log(e)
        })
  	}

  	addShoppingCart = () => {
        /*ADD SHOPPING CART FIRST*/       
        fetch(`http://localhost:3001/v1/shopping_carts/rental`,{
            headers: { 'Content-Type': 'application/json' },
            method: "POST"
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status){
            console.log("Successfully added shopping cart");
            this.setState({cart_id: result.data.insertId});
            this.addCartProduct();
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }

    addCartProduct = () => {
		    /*ADD SHOPPING CART PRODUCTS*/
		const prod = JSON.stringify({
            product_quantity: this.state.product_quantity, 
            product_color_id: this.state.product_color_id,
            shopping_cart_id : this.state.cart_id,
            product_id: this.state.prod_id,
            rental_duration: this.state.rental_duration
        })

        fetch(`http://localhost:3001/v1/shopping_cart/products/rental`,{
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: prod
        })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if(result.status === 200){
            console.log("Successfully added product to shopping cart");
            this.setState({success: true});
          }
        })
        .catch((e) => {
          console.log(e)
        })
  	}

  	setColorOptions = () => {
      var col_options=[];
      var option_obj = {value: '', text: ''};
      var i;
      for(i=0; i<this.state.colors_arr.length; i++){
        option_obj['value'] = this.state.colors_arr[i].id;
        option_obj['text'] = this.state.colors_arr[i].product_color;
        col_options.push(option_obj);
        option_obj = {value: '', text: ''}
      }
      this.setState({color_options: col_options});
  	}

	render() {
		return (
			<div>
				<HeaderBar headerTitle={''}/>
		
				<div class="ui fluid segment" id='img-holder'>
					<Image  src={img_tree} rounded size='big' />
				</div>

				{this.state.data.map(product =>
				<div class="ui fluid segment" id='desc-holder2'>
					<p className='title-header'> {product.name}</p>
					<p className='body-font'>  {product.price}  </p>
					<div className='div-label'>
						<label className='label-font'> Number of items available: </label>
					</div>
					<div className='div-label'>
						<label className='label-font'> Product Color: </label>
						<Dropdown pplaceholder='Color' search selection options={this.state.color_options} onChange={this.handleColorChange} style={{marginLeft: '8%'}}/>
					</div>
					<div className='div-label'>
						<label className='label-font'> Quantity: </label>
						<Input type='number' defaultValue={this.state.product_quantity} min={1} onChange={this.handleQuantityChange} style={{marginLeft: '17%'}}/>
					</div>
					<div className='div-label'>
						<label className='label-font'> Rental Duration: </label>
						<Input type='number' defaultValue={this.state.rental_duration} min={1} onChange={this.handleDurationChange} style={{marginLeft: '5%'}}/>
					</div>
					<div className='div-label'>
						<label className='label-font'> Description: </label>
						<p style={{marginLeft: '25%'}}> blaknkfnhghvsckbsdkbcksbvisbdcbsibk</p>
					</div>
					<div className='div-label'>
						<AddCartButton handleAddtoCart={this.handleSubmit}/>
            {this.state.success ? <PromptModal changePrompt={this.setSuccess} modalStatus={true} message={'Product has been successfuly added to cart!'}/> : ''}
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

export default AddToCartRent;