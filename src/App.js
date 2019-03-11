import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Search from './components/Search';
import Comics from './components/Comics';

import { Provider } from './context'

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Navbar />
          <Search />
          <Comics />
        </div>
      </Provider>
     
    );
  }
}

export default App;
