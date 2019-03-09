import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Search from './components/Search';
import Comics from './components/Comics';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Search />
        <Comics />
      </div>
    );
  }
}

export default App;
