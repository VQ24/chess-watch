import React, { Component } from 'react';
import { timeStr } from '../../utils/utils';
import Loader from '../loader/loader';
import './watch.css';

class Watch extends Component {

  handleClick = () => {
    if (!this.props.loser) {
      this.props.onWatchClick(this.props.color);
    }
  }

  get loseMesssage () {
    return this.props.color === this.props.loser ? 'You lose' : ''
  }

  get showLoader () {
    return this.props.gameType !== 'STANDART' && !this.props.loser;
  }

  render() {
    return (
      <div className={`watch-container watch-element ${this.props.active && !this.props.loser ? 'watch-active' : ''} watch-${this.props.color}`}
        onClick={this.handleClick}>
        { this.props.gameType !== 'TURN_LIMIT'
          ? <div className="watch-time">
              {this.props.loser ? this.loseMesssage : timeStr(this.props.time)}
            </div>
          : null }
        { this.showLoader
          ? <Loader
            time={this.props.loser ? '' : timeStr(this.props.turnTime, true, false)}
            percent={this.props.percent}
            color={this.props.color}
          />
          : null}
      </div>
    );
  }
}

export default Watch;
