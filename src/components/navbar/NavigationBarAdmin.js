import React, { Component } from 'react';
import {Container, Dropdown, Image, Menu} from 'semantic-ui-react'

import logo from '../../images/logo.jpg'
import '../../styles/navbar.css';

class NavigationBar extends Component {
	constructor(props){
		super(props);

		this.toProducts = this.toProducts.bind(this);
		this.toInventory = this.toInventory.bind(this);
		this.toOrders = this.toOrders.bind(this);
		this.toRequests = this.toRequests.bind(this);
	}

	toInventory(e) {
		this.props.history.push('/inventory');
	}

	toProducts(e) {
		this.props.history.push('/products');
	}

	toOrders(e) {
		this.props.history.push('/orders');
	}

	toRequests(e) {
		this.props.history.push('/requests');
	}

	render() {
		return (
			<div>
				<Menu fixed='top' id='menu-div'>
			        <Menu.Item className='logo-div'>
			          <Image circular src={logo} className='logo-style' />
			        </Menu.Item>

			        <Menu.Item as='a'  id={this.props.activePage[0] ? 'lighter': 'menu-font'} onClick={this.toInventory}>Inventory</Menu.Item>
			        <Menu.Item as='a'  id={this.props.activePage[1] ? 'lighter': 'menu-font'} onClick={this.toProducts}>Products</Menu.Item>
			        <Menu.Item as='a'  id={this.props.activePage[2] ? 'lighter': 'menu-font'} onClick={this.toOrders}>Orders</Menu.Item>
			        <Menu.Item as='a'  id={this.props.activePage[3] ? 'lighter': 'menu-font'} onClick={this.toRequests}>Requests</Menu.Item>
				    <Dropdown item simple text='User' id='menu-font'>
				          <Dropdown.Menu>
				            <Dropdown.Item>Admin</Dropdown.Item>
				            <Dropdown.Item >Customer</Dropdown.Item>
				          </Dropdown.Menu>
				    </Dropdown>
			        			         
			    	<Container>
				        <Dropdown item simple text='Data Management' id='menu-font' style={{marginLeft: '34.2%'}}>
				          <Dropdown.Menu>
				            <Dropdown.Item>Shop</Dropdown.Item>
				            <Dropdown.Item >Packages</Dropdown.Item>
				            <Dropdown.Item >Motifs</Dropdown.Item>
				            <Dropdown.Item >Menus</Dropdown.Item>
				          </Dropdown.Menu>
				        </Dropdown>
				        <Menu.Item as='a'>Contact</Menu.Item>
				        <Menu.Item as='a'>FAQS</Menu.Item>
				        <Menu.Item as='a'>Logout</Menu.Item>
     				</Container>
    			</Menu>
			</div>
		);
	}

}

export default NavigationBar;