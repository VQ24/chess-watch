import React, { Component } from 'react';
import './input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue || ''
    }
  }

  handleInputChange = (event) => {
    const newValue = event.target.value;
    this.setState({
      value: newValue
    })
    this.props.onChange(newValue)
  }

  handleKeypress = (event) => {
    if (event.keyCode === 13) {
      event.target.blur();
    }
  }

  render() {
    return (
      <div className='settings-input-wrapper'>
        <input
          type="text"
          spellCheck="false"
          className={`settings-input ${this.props.active ? 'settings-input-active' : ''}`}
          style={this.props.style ? this.props.style : null}
          value={this.state.value}
          disabled={!this.props.active}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeypress}
        ></input>
        <span className="settings-input-label">{this.props.label}</span>
      </div>
    )
  }
}

export default Input;