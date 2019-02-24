import React, { Component } from 'react';
import { Image, Card, Dropdown, Button } from 'semantic-ui-react'

import SearchBarShop from '../searchBar/SearchBarShop.js'
import CartButton from '../button/CartButton.js'
import Footer from '../footer/Footer.js'

import '../../styles/view.css';
import '../../styles/header-bar.css';
import '../../styles/button.css';
import img_tree from '../../images/tree.jpg'

class Shop extends Component {
	constructor(props){
		super(props);

		this.state = {}
		this.toAddToCart = this.toAddToCart.bind(this);
		this.toShoppingCart = this.toShoppingCart.bind(this);
		this.stateOptions = [ { key: '1', value: '1', text: 'All' }, { key: '2', value: '2', text: 'Table' }, { key: '3', value: '3', text: 'Three' } ]
	}

	toAddToCart(e) {
		this.props.history.push('/add-to-cart/purchase');
	}

	toShoppingCart(e) {
		this.props.history.push('/shopping-cart/purchase');
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
						<Card id='card2'>
							<Card.Content>
						      <Card.Header>Stephanie Legaspi </Card.Header>
						      <Card.Description >P 30.00 /pc</Card.Description>
						    </Card.Content>
						    <Image id='img-zoom' src={img_tree} rounded size='small' style={{marginLeft: '20%'}}/>
						    <Card.Content extra>
						       <Button animated  id='view-button' onClick={this.toAddToCart}>
						       		<Button.Content visible>View</Button.Content>
						       		 <Button.Content hidden>
				                       <i class="cart icon"></i>
				                    </Button.Content>
						       </Button>
						    </Card.Content>
						</Card>
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