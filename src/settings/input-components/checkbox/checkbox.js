import React, { Component } from 'react';
import './checkbox.css';

class Checkbox extends Component {

  constructor (props) {
    super(props);
    this.state = {
      checked: !!this.props.checked
    }
  }

  handleCheckBoxClick = () => {
    if (this.props.active) {
      this.setState({
        checked: !this.state.checked
      })
      this.props.onClick(this.state.checked);
    }
  }

  render() {
    return (
      <div className={`settings-checkbox-wrapper ${this.props.fullWidth ? 'wrapper-full-width' : ''}`}>
        {!this.props.switchMode
          ? <span className={`settings-checkbox-input  margin-right-md ${this.state.checked ? 'checkbox-checked' : ''} ${this.props.active ? 'checkbox-active' : ''}`}
              onClick={this.handleCheckBoxClick}
            ></span>
          : null
        }
        <span className='settings-checkbox-label'>{this.props.label}</span>
        {this.props.switchMode
          ? <span className="settings-checkbox-input checkbox-active margin-left-md checkbox-switch-mode-background"
              onClick={this.handleCheckBoxClick}
            >
              <span className={`settings-checkbox-input checkbox-switch-mode-switch ${this.props.active ? 'switch-active' : ''} ${this.state.checked ? 'switch-checked' : ''}`}
              ></span>
            </span>
          : null
        }
      </div>
    )
  }
}

export default Checkbox;