import React, { Component } from 'react';
import Game from './game/game';
import Settings from './settings/settings';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App-content">
          <Route exact path="/" render={() => <Settings/>} />
          <Route path="/game" render={() => <Game
            gameTime={61}
          />} />
        </div>
      </Router>
    );
  }
}

export default App;
