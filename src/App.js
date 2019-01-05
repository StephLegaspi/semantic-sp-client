import React, { Component } from 'react';
//user-defined
import Login from './components/login/Login.js';
import SignUp from './components/signup/SignUp.js';

class App extends Component {
  render() {
    return (
      <div>
        <SignUp/>
      </div>
    );
  }
}

export default App;
