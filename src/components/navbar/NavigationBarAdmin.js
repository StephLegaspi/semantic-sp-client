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
		this.toUserCustomers = this.toUserCustomers.bind(this);
		this.toUserAdmins = this.toUserAdmins.bind(this);
		this.toOrderRentals = this.toOrderRentals.bind(this);
	}

	toInventory(e) {
		this.props.history.push('/inventory');
	}

	toProducts(e) {
		this.props.history.push('/products');
	}

	toOrders(e) {
		this.props.history.push('/orders-purchase');
	}

	toOrderRentals(e) {
		this.props.history.push('/orders-rental');
	}

	toRequests(e) {
		this.props.history.push('/requests');
	}

	toUserCustomers(e) {
		this.props.history.push('/customers');
	}

	toUserAdmins(e) {
		this.props.history.push('/admins');
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
			        <Dropdown item simple text='Orders' id={(this.props.activePage[2] || this.props.activePage[3])  ? 'lighter': 'menu-font'} >
				          <Dropdown.Menu>
				            <Dropdown.Item onClick={this.toOrders}>Purchase</Dropdown.Item>
				            <Dropdown.Item onClick={this.toOrderRentals}>Rental</Dropdown.Item>
				          </Dropdown.Menu>
				    </Dropdown>
			        <Menu.Item as='a'  id={this.props.activePage[4] ? 'lighter': 'menu-font'} onClick={this.toRequests}>Requests</Menu.Item>
				    <Dropdown item simple text='Users' id={(this.props.activePage[5] || this.props.activePage[6]) ? 'lighter': 'menu-font'} >
				          <Dropdown.Menu>
				            <Dropdown.Item onClick={this.toUserAdmins}>Admin</Dropdown.Item>
				            <Dropdown.Item onClick={this.toUserCustomers}>Customer</Dropdown.Item>
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