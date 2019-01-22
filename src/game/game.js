import React, { Component } from 'react';
import Watch from './watch/watch';
import './game.css';

class Game extends Component {
  render() {
    return (
      <div className="game-container">
        <Watch
          key="black"
          />
        <Watch
          key="white"
        />
      </div>
    );
  }
}

export default Game;
