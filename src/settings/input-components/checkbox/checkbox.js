import React, { Component } from 'react';
import './checkbox.css';

class Checkbox extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="checkbox" id="scales" name="scales" checked/>
        <label for="scales">Scales</label>
      </div>
    )
  }
}

export default Checkbox;