import React, { Component } from 'react';
//user-defined
import Login from './components/login/Login.js';

import SignUp from './components/add/AddCustomer.js';
import FixedMenu from './components/homepage/FixedMenu.js';
import AddAdmin from './components/add/AddAdmin.js';
import AddProduct from './components/add/AddProduct.js';
import AddMotif from './components/add/AddMotif.js';
import AddMenu from './components/add/AddMenu.js';
import AddRequest from './components/add/AddRequest.js';
import AddOrder from './components/add/AddOrder.js';

import ViewLogs from './components/view/ViewLogs.js';
import ViewOrders from './components/view/ViewOrders.js';
import sampleview from './components/view/sampleview.js';

class App extends Component {
  render() {
    return (
      <div>
        <ViewOrders/>
      </div>
    );
  }
}

export default App;
