import React, { Component } from 'react';
import Watch from './watch/watch';
import LoseScreen from './lose-screen/lose-screen';
import { oppositeColor, getLoser, getPercent, gameType } from '../utils/utils';
import './game.css';

class Game extends Component {
  constructor (props) {
    super(props);
    this.state = {
      whiteTime: this.props.gameTime * 1000,
      blackTime: this.props.gameTime * 1000,
      gameType: gameType(this.props.turnLimit),
      whiteTurnTime: this.props.turnLimit.limitTime * 1000,
      blackTurnTime: this.props.turnLimit.limitTime * 1000,
    }
  }

  startGame() {
    this.startTimer(this.handleGameState.bind(this));
  }

  handleGameState() {
    const loser = getLoser(this.state.gameType, this.state.whiteTime, this.state.blackTime, this.state.whiteTurnTime, this.state.blackTurnTime);
    if (loser) {
      this.stopTimer();
      this.setState({
        loser: loser
      })
    } else {
      this.setState({
        [`${this.state.turn}Time`]: this.state[`${this.state.turn}Time`] - 10,
        [`${this.state.turn}TurnTime`]: this.state[`${this.state.turn}TurnTime`] - 10,
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
      [`${color}TurnTime`]: this.props.turnLimit.limitTime * 1000,
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
            gameType={this.state.gameType}
            turnTime={this.state[`${color}TurnTime`]}
            percent={getPercent(this.state[`${color}TurnTime`], this.props.turnLimit.limitTime * 1000, 1)}
            loser={this.state.loser}
            onWatchClick={this.handleWatchClick}
          />
        )})}
        {this.state.loser ? <LoseScreen
          loser={this.state.loser}
        /> : null}
      </div>

    );
  }
}

export default Game;
