import React, { Component } from 'react';
import Button from './input-components/button/button';
import Checkbox from './input-components/checkbox/checkbox';
import Input from './input-components/input/input';
import './settings.css';

class Settings extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className='settings-container'>
        <h1 className='margin-bottom-md'>Game settings</h1>
        <div className='settings-group margin-bottom-md settings-full-width'>
          <Input
            label='Game time'
            active={true}
            onChange={()=>{}}
          />
          <Input
            label='Input inactive'
            active={false}
            initialValue="test val"
            style={{width: 10 + 'rem'}}
            onChange={()=>{}}
          />
          <Checkbox
            label='checked active'
            checked={true}
            active={true}
            onClick={()=>{}}
          />
        </div>
        <div className='settings-group margin-bottom-lg settings-full-width'>
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
        </div>
        <Button
          active={true}
        />
      </div>
    );
  }
}

export default Settings;
