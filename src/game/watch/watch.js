import React, { Component } from 'react';
import { timeStr } from '../../utils/utils';
import './watch.css';

class Watch extends Component {

  handleClick = () => {
    this.props.onWatchClick(this.props.color);
  }

  getloseMesssage() {
    return this.props.color === this.props.loser ? 'You lose' : ''
  }

  getStyle = ( percent = 0 ) => {
    const circumference = 52 * 2 * Math.PI;
    const offset = circumference - percent / 100 * circumference;
    return {
      strokeDasharray: `${circumference} ${circumference}`,
      strokeDashoffset: `${offset}`,
    }
  }

  render() {
    return (
      <div className={`watch-container watch-element ${this.props.active ? 'watch-active' : ''} watch-${this.props.color}`}
        onClick={this.handleClick}>
        <div className="watch-time">
          {this.props.loser ? this.getloseMesssage() : timeStr(this.props.time)}
        </div>

        <svg
          class="progress-ring"
          width="120"
          height="120">
          <circle
            style={this.getStyle(50)}
            class="progress-ring__circle"
            stroke="white"
            stroke-width="4"
            fill="transparent"
            r="52"
            cx="60"
            cy="60"/>
        </svg>

      </div>
    );
  }
}

export default Watch;
