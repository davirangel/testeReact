import React, { Component } from 'react';
import logo from '../assets/icons/logo.svg';
import '../css/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">   
          <img src={logo} className="App-logo" alt="logo" />       
          <h2>Welcome to React 2</h2>
        </div>
      </div>
    );
  }
}

export default App;
