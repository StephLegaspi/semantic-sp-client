import React, { Component } from 'react';
//user-defined
import Login from './components/login/Login.js';
import SignUp from './components/signup/SignUp.js';
import FixedMenu from './components/homepage/FixedMenu.js';

class App extends Component {
  render() {
    return (
      <div>
        <FixedMenu/>
      </div>
    );
  }
}

export default App;
