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
      <button className={`settings-button small-media-button ${this.props.active ? 'button-active' : ''}`}
        type='button'
        onClick={this.handleClick}
      >
        Start Game
      </button>
    )
  }
}

export default Button;