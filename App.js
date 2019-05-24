import React, { Component } from 'react';
import './App.css';

import bookList from './booklist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <bookList    />
      </div>
    );
  }
}

export default App;
