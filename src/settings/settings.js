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
        <Checkbox
          label='checked active'
          checked={true}
          active={true}
          onClick={()=>{}}
        />
        <Checkbox
          label='checked inactive'
          checked={true}
          active={false}
          onClick={()=>{}}
        />
        <Checkbox
          label='unchecked active'
          checked={false}
          active={true}
          onClick={()=>{}}
        />
        <Checkbox
          label='unchecked inactive'
          checked={false}
          active={false}
          onClick={()=>{}}
        />
        <Button
          active={true}
        />
      </div>
    );
  }
}

export default Settings;
