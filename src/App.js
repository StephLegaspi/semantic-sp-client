import React, { Component } from 'react';
//user-defined
import Login from './components/login/Login.js';
import SignUp from './components/signup/SignUp.js';
import FixedMenu from './components/homepage/FixedMenu.js';
import AddAdmin from './components/add/AddAdmin.js';
import AddProduct from './components/add/AddProduct.js';

class App extends Component {
  render() {
    return (
      <div>
        <AddProduct/>
      </div>
    );
  }
}

export default App;
