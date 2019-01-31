import React, { Component } from 'react';
import './loader.css';

class Loader extends Component {

  getStyle = ( percent ) => {
    const circumference = 52 * 2 * Math.PI;
    const offset = circumference - percent / 100 * circumference;
    return {
      strokeDasharray: `${circumference} ${circumference}`,
      strokeDashoffset: `${Math.round(-1 * offset)}`,
    }
  }

  render() {
    return (
      <div className="watch-loader">
        <svg
          className="progress-ring"
          width="100%"
          height="100%"
          viewBox="0 0 120 120"
          >
          <g>
            <circle
              style={this.getStyle(this.props.percent)}
              className="progress-ring-circle"
              stroke={`hsl(${359 - this.props.percent}, 100%, 67%)`}
              strokeWidth="6"
              fill="transparent"
              r="52"
              cx="60"
              cy="60"
            />
            <text
              x="50%"
              y="50%"
              alignmentBaseline="middle"
              textAnchor="middle"
              className={`loader-text-${this.props.color}`}
            >
              {this.props.time}
            </text>
          </g>
        </svg>
      </div>
    );
  }
}

export default Loader;
