import React, { Component } from 'react';
import {Container, Dropdown, Image, Menu} from 'semantic-ui-react'

import logo from '../../images/logo.jpg'
import '../../styles/navbar.css';

import local_storage from 'localStorage';

class NavigationBar extends Component {
	constructor(props){
		super(props);

		this.toDashboard = this.toDashboard.bind(this);
		this.toProductsPurchase = this.toProductsPurchase.bind(this);
		this.toProductsRental = this.toProductsRental.bind(this);
		this.toInventoryPurchase = this.toInventoryPurchase.bind(this);
		this.toInventoryRental = this.toInventoryRental.bind(this);
		this.toOrders = this.toOrders.bind(this);
		this.toOrderRentals = this.toOrderRentals.bind(this);
		this.toRequests = this.toRequests.bind(this);
		this.toUserCustomers = this.toUserCustomers.bind(this);
		this.toUserAdmins = this.toUserAdmins.bind(this);
		this.toPackagesTable = this.toPackagesTable.bind(this);
		this.toMotifsTable = this.toMotifsTable.bind(this);
		this.toMenusTable = this.toMenusTable.bind(this);
		this.toContactDetails = this.toContactDetails.bind(this);
		this.toFAQS = this.toFAQS.bind(this);
		this.toLogsAdmin = this.toLogsAdmin.bind(this);
		this.toLogsCustomer = this.toLogsCustomer.bind(this);
		this.toProfileAdmin = this.toProfileAdmin.bind(this);
	}
	toLogOut(e) {
		local_storage.clear();
		window.location.href='/admin'
	}

	toDashboard(e) {
		window.location.href='/dashboard';
	}

	toInventoryPurchase(e) {
		window.location.href='/inventory-purchase';
	}
	toInventoryRental(e) {
		window.location.href='/inventory-rental';
	}

	toProductsPurchase(e) {
		window.location.href='/products-purchase';
	}

	toProductsRental(e) {
		window.location.href='/products-rental';
	}

	toOrders(e) {
		window.location.href='/orders-purchase';
	}

	toOrderRentals(e) {
		window.location.href='/orders-rental';
	}

	toRequests(e) {
		window.location.href='/requests';
	}

	toUserCustomers(e) {
		window.location.href='/user-customers';
	}

	toUserAdmins(e) {
		window.location.href='/user-admins';
	}

	toPackagesTable(e) {
		window.location.href='/packages-table';
	}

	toMotifsTable(e) {
		window.location.href='/motifs-table';
	}

	toMenusTable(e) {
		window.location.href='/menus-table';
	}

	toContactDetails(e) {
		window.location.href='/contact-details';
	}

	toFAQS(e) {
		window.location.href='/faqs';
	}

	toLogsAdmin(e) {
		window.location.href='/logs-admin';
	}

	toLogsCustomer(e) {
		window.location.href='/logs-customer';
	}

	toProfileAdmin(e) {
		window.location.href='/profile-admin';
	}

	render() {
		return (
			<div>
				<Menu fixed='top' id='menu-div'>
			        <Menu.Item className='logo-div'>
			          <Image circular src={logo} className='logo-style' />
			        </Menu.Item>
			        <Menu.Item as='a'  id={this.props.activePage[0] ? 'lighter': 'menu-font'} onClick={this.toDashboard} >Dashboard</Menu.Item>
			        <Dropdown item simple text='Inventory' id={(this.props.activePage[1] || this.props.activePage[2]) ? 'lighter': 'menu-font'}>
				          <Dropdown.Menu>
				          	<Dropdown.Item onClick={this.toInventoryPurchase}>Purchase</Dropdown.Item>
				          	<Dropdown.Item onClick={this.toInventoryRental}>Rental</Dropdown.Item>
				          </Dropdown.Menu>
				    </Dropdown>
			        <Dropdown item simple text='Orders' id={(this.props.activePage[3] || this.props.activePage[4])  ? 'lighter': 'menu-font'} >
				          <Dropdown.Menu>
				            <Dropdown.Item onClick={this.toOrders}>Purchase</Dropdown.Item>
				            <Dropdown.Item onClick={this.toOrderRentals}>Rental</Dropdown.Item>
				          </Dropdown.Menu>
				    </Dropdown>
			        <Menu.Item as='a'  id={this.props.activePage[5] ? 'lighter': 'menu-font'} onClick={this.toRequests}>Requests</Menu.Item>
				            
			    	<Container>
			    		<Dropdown item simple text='Data Management' id={(this.props.activePage[6] || this.props.activePage[7] || this.props.activePage[8] || this.props.activePage[9] || this.props.activePage[10] || this.props.activePage[11]) ? 'lighter': 'menu-font'} style={{marginLeft: '27%'}}>
				          <Dropdown.Menu>
				          	<Dropdown.Item>
				              <i className='dropdown icon' />
				              <span className='text'>Products</span>
				              <Dropdown.Menu>
				                <Dropdown.Item onClick={this.toProductsPurchase}>Purchase</Dropdown.Item>
					          	<Dropdown.Item onClick={this.toProductsRental}>Rental</Dropdown.Item>
				              </Dropdown.Menu>
				            </Dropdown.Item>  	
				          	<Dropdown.Item onClick={this.toPackagesTable}>Packages</Dropdown.Item>
				            <Dropdown.Item onClick={this.toMotifsTable}>Event Motifs</Dropdown.Item>
				            <Dropdown.Item onClick={this.toMenusTable}>Food Menus</Dropdown.Item>
				            <Dropdown.Item onClick={this.toContactDetails}>Contact</Dropdown.Item>
				            <Dropdown.Item onClick={this.toFAQS}>FAQS</Dropdown.Item>
				          </Dropdown.Menu>
				        </Dropdown>		
				       	<Dropdown item simple text='Users' id={(this.props.activePage[12] || this.props.activePage[13]) ? 'lighter': 'menu-font'}>
				          <Dropdown.Menu>
				            <Dropdown.Item onClick={this.toUserAdmins}>Admin</Dropdown.Item>
				            <Dropdown.Item onClick={this.toUserCustomers}>Customer</Dropdown.Item>
				          </Dropdown.Menu>
				    	</Dropdown>
				    	<Dropdown item simple text='Logs' id={(this.props.activePage[14] || this.props.activePage[15]) ? 'lighter': 'menu-font'}>
				          <Dropdown.Menu>
				            <Dropdown.Item onClick={this.toLogsAdmin}>Admin </Dropdown.Item>
				            <Dropdown.Item onClick={this.toLogsCustomer}>Customer</Dropdown.Item>
				          </Dropdown.Menu>
				    	</Dropdown>
				        <Dropdown item simple text='Account' id={(this.props.activePage[16] || this.props.activePage[17]) ? 'lighter': 'menu-font'}>
				          <Dropdown.Menu>
				            <Dropdown.Item onClick={this.toProfileAdmin}>Profile </Dropdown.Item>
				            <Dropdown.Item onClick={this.toLogOut}>Logout</Dropdown.Item>
				          </Dropdown.Menu>
				    	</Dropdown>
     				</Container>
    			</Menu>
			</div>
		);
	}

}

export default NavigationBar;