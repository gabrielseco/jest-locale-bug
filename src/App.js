import React, { Component } from 'react';
import './App.css';
import { toLocale } from './locale';

class App extends Component {
  render() {
    return (
      <div className="App">
        {toLocale(1000)}
      </div>
    );
  }
}

export default App;
