import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './button.css';

class Button extends Component {

  handleClick (history) {
    if (this.props.active) {
      history.push('/game')
    }
  }

  render() {
    const Button = withRouter(({ history }) => (
      <button className={`settings-button small-media-button ${this.props.active ? 'button-active' : ''}`}
        type='button'
        onClick={this.handleClick.bind(this, history)}
      >
        Start Game
      </button>
    ));
    return (
      <Button />
    )
  }
}

export default Button;