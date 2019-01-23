import React, { Component } from 'react';
import Watch from './watch/watch';
import { oppositeColor, getLoser } from '../utils/utils';
import './game.css';

class Game extends Component {
  constructor (props) {
    super(props);
    this.state = {
      whiteTime: this.props.gameTime * 1000,
      blackTime: this.props.gameTime * 1000
    }
  }

  startGame() {
    this.startTimer(this.handleGameState.bind(this));
  }

  handleGameState() {
    const loser = getLoser(this.state.whiteTime, this.state.blackTime);
    if (loser) {
      this.stopTimer();
      this.setState({
        loser: loser
      })
    } else {
      this.setState({
        [`${this.state.turn}Time`]: this.state[`${this.state.turn}Time`] - 10,
      })
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  startTimer(timerFunc) {
    this.timer = setInterval(timerFunc, 10);
  }

  changeColor (color) {
    this.setState({
      turn: oppositeColor(color)
    })
  }

  handleWatchClick = (color) => {
    if (this.state.turn) {
      this.changeColor(color)
    } else {
      if (color === 'black') {
        this.startGame();
        this.changeColor(color)
      }
    }
  }

  render() {
    return (
      <div className="game-container">
        {[ 'white', 'black'].map(color => {
          return (
          <Watch
            key={color}
            color={color}
            active={this.state.turn === color}
            time={this.state[`${color}Time`]}
            loser={this.state.loser}
            onWatchClick={this.handleWatchClick}
          />
        )})}
      </div>
    );
  }
}

export default Game;
