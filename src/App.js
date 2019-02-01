import React, { Component } from 'react';
import Game from './game/game';
import Settings from './settings/settings';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { DEFAULT_SETTINGS } from './constants/settings';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      settings: DEFAULT_SETTINGS
    };
  }
  
  startGame (history, settings) {
    this.setState({
      settings: settings
    })
    history.push('/game')
  }

  backToMenu (history) {
    history.push('/')
  }

  render() {
    return (
      <Router>
        <div className="App-content">
          <Route exact path="/" render={withRouter(({ history }) => (
            <Settings
              settings={this.state.settings}
              onGameStart={(settings) => this.startGame.call(this, history, settings)}
            /> ))}
          />
          <Route path="/game" render={withRouter(({ history }) => (
            <Game
              gameTime={this.state.settings.gameTime}
              turnLimit={this.state.settings.turnLimit}
              onBackToMenu={() => this.backToMenu.call(this, history)}
            />
          ))} />
        </div>
      </Router>
    );
  }
}

export default App;
