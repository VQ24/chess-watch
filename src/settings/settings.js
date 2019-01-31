import React, { Component } from 'react';
import Button from './input-components/button/button';
import Checkbox from './input-components/checkbox/checkbox';
import Input from './input-components/input/input';
import { setingsAreValid, isStandartGameType } from '../utils/utils';
import './settings.css';

class Settings extends Component {

  constructor (props) {
    super(props);
    this.state = this.props.settings;
  }

  handleStartButtonClick = () => {
    this.props.onGameStart(this.state);
  }

  setGameTime = (time) => {
    this.setState({
      gameTime: time
    })
  }

  setLimitOptions (optionName, optionValue) {
    const limitOptions = Object.assign({}, this.state.turnLimit);
    limitOptions[optionName] = optionValue;
    this.setState({turnLimit: limitOptions});
  }

  render() {
    return (
      <div className='settings-container'>
        <h1 className='margin-bottom-lg'>Game settings</h1>
        <div className='settings-group settings-full-width'>
          <Input
            label='Game time'
            initialValue={this.state.gameTime}
            fullWidth={true}
            active={isStandartGameType(this.state)}
            onChange={this.setGameTime}
          />
        </div>
        <div className='settings-group settings-full-width'>
          <Checkbox
            label='Enable turn limit'
            checked={this.state.turnLimit.enable}
            active={true}
            onClick={this.setLimitOptions.bind(this, 'enable', !this.state.turnLimit.enable)}
          />
          <Input
            label='Turn limit time'
            initialValue={this.state.turnLimit.limitTime}
            fullWidth={true}
            active={this.state.turnLimit.enable}
            onChange={(value) => this.setLimitOptions.call(this, 'limitTime', value)}
          />
          <Checkbox
            label='Extract from game time'
            checked={this.state.turnLimit.extractFromGameTime}
            active={this.state.turnLimit.enable}
            onClick={this.setLimitOptions.bind(this, 'extractFromGameTime', !this.state.turnLimit.extractFromGameTime)}
          />
        </div>
        <div className='settings-group settings-full-width'>
          <Checkbox
            label='Light mode'
            checked={false}
            active={true}
            onClick={()=>{}}
          />
          <Checkbox
            label='Use Russian language'
            checked={false}
            active={true}
            onClick={()=>{}}
          />
        </div>
        <Button
          label='Start Game'
          active={setingsAreValid(this.state)}
          onClick={this.handleStartButtonClick}
        />
      </div>
    );
  }
}

export default Settings;
