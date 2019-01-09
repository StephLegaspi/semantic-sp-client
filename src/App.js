import React, { Component } from 'react';
//user-defined
import Login from './components/login/Login.js';
import SignUp from './components/signup/SignUp.js';
import FixedMenu from './components/homepage/FixedMenu.js';
import AddAdmin from './components/add/AddAdmin.js';
import AddProduct from './components/add/AddProduct.js';
import AddMotif from './components/add/AddMotif.js';
import AddMenu from './components/add/AddMenu.js';

class App extends Component {
  render() {
    return (
      <div>
        <AddMenu/>
      </div>
    );
  }
}

export default App;
