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
          ? <div className='settings-checkbox-container'>
              <span className={`settings-checkbox-input  margin-right-md ${this.state.checked ? 'checkbox-checked' : ''} ${this.props.active ? 'checkbox-active' : ''}`}
                onClick={this.handleCheckBoxClick}
              ></span>
              <span className='settings-checkbox-label'>{this.props.label}</span>
            </div>
          : <div>
              <div className='settings-checkbox-container margin-bottom-md'>
                <span className='settings-checkbox-label'>{this.props.label}</span>
              </div>
              <div className='settings-checkbox-container'>
                <span className={`settings-checkbox-label checkbox-inner-label ${this.props.active ? 'checkbox-active' : ''}`}>{this.props.innerLabelFalse}</span>
                <span className={`settings-checkbox-input checkbox-active margin-left-md margin-right-md checkbox-switch-mode-background ${this.props.active ? 'switch-active' : ''}`}
                  onClick={this.handleCheckBoxClick}
                >
                  <span className={`settings-checkbox-input checkbox-switch-mode-switch ${this.props.active ? 'switch-active' : ''} ${this.state.checked ? 'switch-checked' : ''}`}
                  ></span>
                </span>
                <span className={`settings-checkbox-label checkbox-inner-label ${this.props.active ? 'checkbox-active' : ''}`}>{this.props.innerLabelTrue}</span>
              </div>
            </div>
        }
      </div>
    )
  }
}

export default Checkbox;