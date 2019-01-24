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
      <div className='settings-checkbox-wrapper'>
        <span className={`settings-checkbox-input ${this.state.checked ? 'checkbox-checked' : ''} ${this.props.active ? 'checkbox-active' : ''}`}
          onClick={this.handleCheckBoxClick}
        >  
        </span>
        <span className='settings-checkbox-label'>{this.props.label}</span>
      </div>
    )
  }
}

export default Checkbox;