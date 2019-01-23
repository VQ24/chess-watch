import React, { Component } from 'react';
import Button from './input-components/button/button';
import Checkbox from './input-components/checkbox/checkbox';
import './settings.css';

class Settings extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className='settings-container'>
        <Checkbox />
        <Button
          valid={true}
        />
      </div>
    );
  }
}

export default Settings;
