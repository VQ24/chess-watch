import React, { Component } from 'react';
import './loader.css';

class Loader extends Component {

  getStyle = ( percent = 0 ) => {
    const circumference = 52 * 2 * Math.PI;
    const offset = circumference - percent / 100 * circumference;
    return {
      strokeDasharray: `${circumference} ${circumference}`,
      strokeDashoffset: `${-1 * offset}`,
    }
  }

  render() {
    return (
      <div className="watch-loader">
        <svg
          class="progress-ring"
          width="100%"
          height="100%"
          viewBox="0 0 120 120"
          >
          <circle
            style={this.getStyle(this.props.percent)}
            class="progress-ring__circle"
            stroke={`hsl(${359 - this.props.percent}, 100%, 67%)`}
            stroke-width="6"
            fill="transparent"
            r="52"
            cx="60"
            cy="60"/>
        </svg>
      </div>
    );
  }
}

export default Loader;
