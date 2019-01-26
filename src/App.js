import React, { Component } from 'react';
//user-defined
import Login from './components/login/Login.js';

import SignUp from './components/add/AddCustomer.js';
import HomePage from './components/homepage/HomePage.js';
import HomepageLayout from './components/homepage/HomepageLayout.js';
import Contact from './components/contact/Contact.js';

import AddAdmin from './components/add/AddAdmin.js';
import AddProduct from './components/add/AddProduct.js';
import AddMotif from './components/add/AddMotif.js';
import AddMenu from './components/add/AddMenu.js';
import AddRequest from './components/add/AddRequest.js';
import AddOrder from './components/add/AddOrder.js';

import ViewLogs from './components/view/ViewLogs.js';
import ViewOrders from './components/view/ViewOrders.js';
import ViewInventory from './components/view/ViewInventory.js';
import ViewOrderRental from './components/view/ViewOrderRental.js';
import ViewShoppingCart from './components/view/ViewShoppingCart.js';
import ViewRequests from './components/view/ViewRequests.js';
import ViewProducts from './components/view/ViewProducts.js';
import ViewUsers from './components/view/ViewUsers.js';
import ViewShop from './components/view/ViewShop.js';
import ViewPackages from './components/view/ViewPackages.js';
import ViewMotifs from './components/view/ViewMotifs.js';
import ViewMenus from './components/view/ViewMenus.js';

class App extends Component {
  render() {
    return (
      <div>
        <HomePage/>
      </div>
    );
  }
}

export default App;
