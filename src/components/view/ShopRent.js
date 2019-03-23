import React, { Component } from 'react';
import { Image, Card } from 'semantic-ui-react'

import SearchBarShop from '../searchBar/SearchBarShop.js'
import CartButton from '../button/CartButton.js'
import ShopButton from '../button/ShopButton.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import '../../styles/header-bar.css';
import '../../styles/button.css';

class ShopRent extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			product_name: ""
		}
		this.toAddToCartRent = this.toAddToCartRent.bind(this);
		this.toShoppingCartRent = this.toShoppingCartRent.bind(this);
	}

	handleProductChange = (e) => {
	    this.setState({ product_name: e.target.value},() => { 
	    	if(this.state.product_name === ""){
	    		this.update();	
	    	}else{
	    		this.searchByName(); 
	    	}
	    })
	}

	toAddToCartRent(id) {
		this.props.history.push('/add-to-cart/rent/' +id);
	}

	toShoppingCartRent(e) {
		this.props.history.push('/shopping-cart/rent');
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/products/rental', {
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
        let self = this;
        fetch('http://localhost:3001/v1/products/rental', {
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

    searchByName = () => {
        let self = this;
        fetch('http://localhost:3001/v1/products-rental/search/' + self.state.product_name, {
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
				<div id='bar'>  
					<SearchBarShop searchData={this.searchByName} inputChange={this.handleProductChange}/>
					<CartButton handleClick={this.toShoppingCartRent}/>
					<h1 id='bar-title'> Rent </h1>
      			</div>
      			
      			<div>
			    	<div id='card-div2'>
						<Card.Group itemsPerRow={4}>
						{this.state.data.map(product =>
						<Card id='card2'>
							<Card.Content>
						      <Card.Header>{product.name}</Card.Header>
						      <Card.Description >P {product.price}/pc</Card.Description>
						    </Card.Content>
						    <Image id='img-zoom' src={`http://localhost:3001/${product.image}`} rounded size='small' style={{marginLeft: '20%'}}/>
						    <Card.Content extra>
						       <ShopButton handleView={this.toAddToCartRent} data_id={product.id}/>
						    </Card.Content>
						</Card>
						)}
						</Card.Group>
					</div> 
			    </div>

				<div style={{clear: 'both'}}>
					<Footer/>
				</div>
			</div>
			
		);
	}

}

export default ShopRent;