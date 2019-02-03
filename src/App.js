import React, { Component } from 'react';
//user-defined
import Login from './components/login/Login.js';

import SignUp from './components/add/AddCustomer.js';
import HomePage from './components/view/HomePage.js';
import Contact from './components/view/Contact.js';

import AddAdmin from './components/add/AddAdmin.js';
import AddProduct from './components/add/AddProduct.js';
import AddMotif from './components/add/AddMotif.js';
import AddMenu from './components/add/AddMenu.js';
import AddRequest from './components/add/AddRequest.js';
import AddOrder from './components/add/AddOrder.js';

import Logs from './components/view/Logs.js';
import Orders from './components/view/Orders.js';
import Inventory from './components/view/Inventory.js';
import OrderRental from './components/view/OrderRental.js';
import ShoppingCart from './components/view/ShoppingCart.js';
import Requests from './components/view/Requests.js';
import Products from './components/view/Products.js';
import Users from './components/view/Users.js';
import Shop from './components/view/Shop.js';
import Packages from './components/view/Packages.js';
import Motifs from './components/view/Motifs.js';
import Menus from './components/view/Menus.js';

import MotifsPortfolio from './components/view/MotifsPortfolio.js';
import MenusPortfolio from './components/view/MenusPortfolio.js';
import NavigationBar from './components/navbar/NavigationBar.js';
import Portfolio from './components/view/Portfolio.js';

import AddToCart from './components/add/AddToCart.js';

import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      	<Switch>
      		<Route exact={true} path="/" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBar {...props} activePage={[1,0,0,0,0,0,0,0,0,0]}/>
																			<HomePage   {...props} />
							             								</div>)}}> 
			</Route>

			<Route exact={true} path="/shop" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBar {...props} activePage={[0,1,0,0,0,0,0,0,0,0]}/>
																			<Shop   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/packages" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBar {...props} activePage={[0,0,1,0,0,0,0,0,0,0]}/>
																			<Packages   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/motifs" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBar {...props} activePage={[0,0,0,1,0,0,0,0,0,0]}/>
																			<Motifs   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/menus" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBar {...props} activePage={[0,0,0,0,1,0,0,0,0,0]}/>
																			<Menus   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/request-package" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBar {...props} activePage={[0,0,0,0,0,1,0,0,0,0]}/>
																			<AddRequest   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/contact-us" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBar {...props} activePage={[0,0,0,0,0,0,0,1,0,0]}/>
																			<Contact   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/sign-up" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBar {...props} activePage={[0,0,0,0,0,0,0,0,1,0]}/>
																			<SignUp   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/motif-portfolio" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBar {...props} activePage={[0,0,0,1,0,0,0,0,0,0]}/>
																			<MotifsPortfolio   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/menu-portfolio" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBar {...props} activePage={[0,0,0,0,1,0,0,0,0,0]}/>
																			<MenusPortfolio   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/portfolio" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBar {...props} activePage={[0,0,0,0,0,0,1,0,0,0]}/>
																			<Portfolio   {...props} />
							             								</div>)}}> 
			</Route>
			<Route exact={true} path="/add-to-cart" render={(props) => {
					             								return(
							             								<div>
																			<NavigationBar {...props} activePage={[0,1,0,0,0,0,0,0,0,0]}/>
																			<AddToCart   {...props} />
							             								</div>)}}> 
			</Route>
      	</Switch>
      </div>
    );
  }
}

export default App;
