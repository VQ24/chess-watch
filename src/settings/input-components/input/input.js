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
      <div className={`settings-input-wrapper ${this.props.fullWidth ? 'wrapper-full-width' : ''}`}>
        {!this.props.labelAtRight ? <span className="settings-input-label left-label">{this.props.label}</span> : null}
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
        {this.props.labelAtRight ? <span className="settings-input-label right-label">{this.props.label}</span> : null}
      </div>
    )
  }
}

export default Input;