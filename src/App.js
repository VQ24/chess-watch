import React, { Component } from 'react';
import Game from './game/game';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
