import React, { Component } from 'react';
import { Image, Card, Dropdown} from 'semantic-ui-react'

import SearchBarShop from '../searchBar/SearchBarShop.js'
import CartButton from '../button/CartButton.js'
import ShopButton from '../button/ShopButton.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import '../../styles/header-bar.css';
import '../../styles/button.css';
import img_tree from '../../images/tree.jpg'

class Shop extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
		}
		this.toAddToCart = this.toAddToCart.bind(this);
		this.toShoppingCart = this.toShoppingCart.bind(this);
		this.stateOptions = [ { key: '1', value: '1', text: 'All' }, { key: '2', value: '2', text: 'Table' }, { key: '3', value: '3', text: 'Three' } ]
	}

	toAddToCart(id) {
		this.props.history.push('/add-to-cart/purchase/' + id);
	}

	toShoppingCart(e) {
		this.props.history.push('/shopping-cart/purchase');
	}

	componentDidMount() {
        let self = this;
        fetch('http://localhost:3001/v1/products/purchase', {
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
					<SearchBarShop/>
					<CartButton handleClick={this.toShoppingCart}/>
					<h1 id='bar-title'> Purchase </h1>
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
						      <Card.Description >P {product.price} /pc</Card.Description>
						    </Card.Content>
						    <Image id='img-zoom' src={img_tree} rounded size='small' style={{marginLeft: '20%'}}/>
						    <Card.Content extra>
						       <ShopButton handleView={this.toAddToCart} data_id={product.id}/>
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

export default Shop;