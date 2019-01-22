import React, { Component } from 'react';
import Game from './game/game';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-content">
        <Game
          gameTime={61}
        />
      </div>
    );
  }
}

export default App;
