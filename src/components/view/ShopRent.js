import React, { Component } from 'react';
import { Image, Card, Dropdown, Button } from 'semantic-ui-react'

import SearchBarShop from '../searchBar/SearchBarShop.js'
import CartButton from '../button/CartButton.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import '../../styles/header-bar.css';
import '../../styles/button.css';
import img_tree from '../../images/tree.jpg'

class ShopRent extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			product_name: ""
		}
		this.toAddToCartRent = this.toAddToCartRent.bind(this);
		this.toShoppingCartRent = this.toShoppingCartRent.bind(this);
		this.stateOptions = [ { key: '1', value: '1', text: 'All' }, { key: '2', value: '2', text: 'Table' }, { key: '3', value: '3', text: 'Three' } ]
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

	toAddToCartRent(e) {
		this.props.history.push('/add-to-cart/rent');
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

      			<div class="ui fluid segment" id='upper-div1'>  
					<label>
					  Product Category: {' '}
					  <Dropdown
					    inline
					    options={this.stateOptions}
					    defaultValue='1'
					  />
					</label>
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
						    <Image id='img-zoom' src={img_tree} rounded size='small' style={{marginLeft: '20%'}}/>
						    <Card.Content extra>
						       <Button animated  id='view-button' onClick={this.toAddToCartRent}>
						       		<Button.Content visible>View</Button.Content>
						       		 <Button.Content hidden>
				                       <i class="cart icon"></i>
				                    </Button.Content>
						       </Button>
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