import React, { Component } from 'react';
//user-defined
import Login from './components/login/Login.js';

import SignUp from './components/add/AddCustomer.js';
import HomePage from './components/homepage/HomePage.js';
import Contact from './components/contact/Contact.js';

import AddAdmin from './components/add/AddAdmin.js';
import AddProduct from './components/add/AddProduct.js';
import AddMotif from './components/add/AddMotif.js';
import AddMenu from './components/add/AddMenu.js';
import AddRequest from './components/add/AddRequest.js';
import AddOrder from './components/add/AddOrder.js';
import AddPackage from './components/add/AddPackage.js';

import Logs from './components/view/Logs.js';
import Orders from './components/view/Orders.js';
import Inventory from './components/view/Inventory.js';
import OrderRental from './components/view/OrderRental.js';
import ShoppingCart from './components/view/ShoppingCart.js';
import Requests from './components/view/Requests.js';
import Products from './components/view/Products.js';
import UserCustomers from './components/view/UserCustomers.js';
import UserAdmins from './components/view/UserAdmins.js';
import Shop from './components/view/Shop.js';
import Packages from './components/view/Packages.js';
import Motifs from './components/view/Motifs.js';
import Menus from './components/view/Menus.js';

import NavigationBarCustomer from './components/navbar/NavigationBarCustomer.js';
import MotifsPortfolio from './components/view/MotifsPortfolio.js';
import MenusPortfolio from './components/view/MenusPortfolio.js';
import Portfolio from './components/view/Portfolio.js';
import PackageInclusion from './components/view/PackageInclusion.js'
import AddToCart from './components/add/AddToCart.js';

import NavigationBarAdmin from './components/navbar/NavigationBarAdmin.js';
import PackagesTable from './components/view/PackagesTable.js';
import MotifsTable from './components/view/MotifsTable.js';
import MenusTable from './components/view/MenusTable.js';
import ContactDetails from './components/view/ContactDetails.js';
import FAQS from './components/view/FAQS.js';

import {Switch, Route, withRouter, BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  
  constructor() {
	super();
	this.state = {
	  	curr_user: 0
	}

  }

  render() {
    return (
      <div>
      	<Router history={withRouter}>
      	{this.state.curr_user ? (
      	<Switch>
      		<Route exact={true} path="/" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarCustomer {...props} activePage={[1,0,0,0,0,0,0,0,0,0]}/>
																			<HomePage   {...props} />
							             								</div>)}}> 
			</Route>

			<Route exact={true} path="/shop" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarCustomer {...props} activePage={[0,1,0,0,0,0,0,0,0,0]}/>
																			<Shop   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/packages" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarCustomer {...props} activePage={[0,0,1,0,0,0,0,0,0,0]}/>
																			<Packages   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/motifs" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarCustomer {...props} activePage={[0,0,0,1,0,0,0,0,0,0]}/>
																			<Motifs   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/menus" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarCustomer {...props} activePage={[0,0,0,0,1,0,0,0,0,0]}/>
																			<Menus   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/request-package" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarCustomer {...props} activePage={[0,0,0,0,0,1,0,0,0,0]}/>
																			<AddRequest   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/contact-us" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarCustomer {...props} activePage={[0,0,0,0,0,0,0,1,0,0]}/>
																			<Contact   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/sign-up" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarCustomer {...props} activePage={[0,0,0,0,0,0,0,0,1,0]}/>
																			<SignUp   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/motif-portfolio" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarCustomer {...props} activePage={[0,0,0,1,0,0,0,0,0,0]}/>
																			<MotifsPortfolio   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/menu-portfolio" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarCustomer {...props} activePage={[0,0,0,0,1,0,0,0,0,0]}/>
																			<MenusPortfolio   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/portfolio" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarCustomer {...props} activePage={[0,0,0,0,0,0,1,0,0,0]}/>
																			<Portfolio   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/add-to-cart" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarCustomer {...props} activePage={[0,1,0,0,0,0,0,0,0,0]}/>
																			<AddToCart   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/shopping-cart" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarCustomer {...props} activePage={[0,1,0,0,0,0,0,0,0,0]}/>
																			<ShoppingCart   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/package-inclusion" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarCustomer {...props} activePage={[0,0,1,0,0,0,0,0,0,0]}/>
																			<PackageInclusion   {...props} />
							             								</div>)}}> 
			</Route>
      	</Switch>
      	) : (
      		<Switch>
			<Route exact={true} path="/products" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarAdmin activePage={[1,0,0,0,0,0,0,0,0,0,0,0]} {...props} />
																			<Products   {...props} />
							             								</div>)}}> 
			</Route>
      		<Route exact={true} path="/inventory" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarAdmin activePage={[0,1,0,0,0,0,0,0,0,0,0,0]} {...props} />
																			<Inventory   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/orders-purchase" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarAdmin activePage={[0,0,1,0,0,0,0,0,0,0,0,0,0]} {...props} />
																			<Orders   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/orders-rental" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarAdmin activePage={[0,0,0,1,0,0,0,0,0,0,0,0,0]} {...props} />
																			<OrderRental   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/requests" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarAdmin activePage={[0,0,0,0,1,0,0,0,0,0,0,0]} {...props} />
																			<Requests   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/packages-table" render={(props) => {
					             								return(
							             								<div>
							             									<NavigationBarAdmin activePage={[0,0,0,0,0,1,0,0,0,0,0,0]} {...props} />
																			<PackagesTable   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/motifs-table" render={(props) => {
					             								return(
							             								<div>
							             									<NavigationBarAdmin activePage={[0,0,0,0,0,0,1,0,0,0,0,0,0]} {...props} />
																			<MotifsTable   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/menus-table" render={(props) => {
					             								return(
							             								<div>
							             									<NavigationBarAdmin activePage={[0,0,0,0,0,0,0,1,0,0,0,0,0]} {...props} />
																			<MenusTable   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/contact-details" render={(props) => {
					             								return(
							             								<div>
							             									<NavigationBarAdmin activePage={[0,0,0,0,0,0,0,0,1,0,0,0,0]} {...props} />
																			<ContactDetails   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/faqs" render={(props) => {
					             								return(
							             								<div>
							             									<NavigationBarAdmin activePage={[0,0,0,0,0,0,0,0,0,1,0,0,0]} {...props} />
																			<FAQS  {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/admins" render={(props) => {
					             								return(
							             								<div>
							             									<NavigationBarAdmin activePage={[0,0,0,0,0,0,0,0,0,0,1,0,0]} {...props} />
																			<UserAdmins   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/customers" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarAdmin activePage={[0,0,0,0,0,0,0,0,0,0,0,1,0]} {...props} />
																			<UserCustomers   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/add-product" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarAdmin activePage={[1,0,0,0,0,0,0,0,0,0,0,0]} {...props} />
																			<AddProduct   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/add-motif" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarAdmin activePage={[0,0,0,0,0,0,0,0,1,0,0,0,0]} {...props} />
																			<AddMotif   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/add-menu" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarAdmin activePage={[0,0,0,0,0,0,0,0,0,1,0,0,0]} {...props} />
																			<AddMenu   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/add-admin" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarAdmin activePage={[0,0,0,0,0,1,0,0,0,0,0,0]} {...props} />
																			<AddAdmin   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/add-package" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBarAdmin activePage={[0,0,0,0,0,0,0,1,0,0,0,0,0]} {...props} />
																			<AddPackage   {...props} />
							             								</div>)}}> 
			</Route>
			</Switch>

      	)}
      	</Router>
      </div>
    );
  }
}

export default App;
