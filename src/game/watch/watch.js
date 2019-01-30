import React, { Component } from 'react';
import { timeStr } from '../../utils/utils';
import Loader from '../loader/loader';
import './watch.css';

class Watch extends Component {

  handleClick = () => {
    this.props.onWatchClick(this.props.color);
  }

  getloseMesssage() {
    return this.props.color === this.props.loser ? 'You lose' : ''
  }

  render() {
    return (
      <div className={`watch-container watch-element ${this.props.active ? 'watch-active' : ''} watch-${this.props.color}`}
        onClick={this.handleClick}>
        <div className="watch-time">
          {this.props.loser ? this.getloseMesssage() : timeStr(this.props.time)}
        </div>
        <Loader
          percent={this.props.percent}
        />
      </div>
    );
  }
}

export default Watch;
