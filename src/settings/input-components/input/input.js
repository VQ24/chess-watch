import React, { Component } from 'react';
import './input.css';

class Input extends Component {

  handleInputChange = (event) => {
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <div className='settings-input-wrapper'>
        <input
          className={`settings-input ${this.props.active ? 'settings-input-active' : ''}`}
          type="text"
          spellcheck="false"
          disabled={!this.props.active}
          onChange={this.handleInputChange}
        ></input>
        <span className="settings-input-label">{this.props.label}</span>
      </div>
    )
  }
}

export default Input;