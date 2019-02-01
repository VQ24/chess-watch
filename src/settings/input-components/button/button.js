import React, { Component } from 'react';
import './button.css';

class Button extends Component {

  handleClick = () => {
    if (this.props.active) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <button className={`settings-button small-media-button ${this.props.active ? 'button-active' : ''} ${this.props.transparent ? 'button-transparent' : ''}`}
        style={this.props.style ? this.props.style : {}}
        type='button'
        onClick={this.handleClick}
      >
        {this.props.label || 'unnamed button'}
      </button>
    )
  }
}

export default Button;