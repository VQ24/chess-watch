import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './settings.css';

class Settings extends Component {

  constructor (props) {
    super(props);
  }
  
  
  render() {
    const  Button = withRouter(({ history }) => (
      <button
        type='button'
        onClick={() => { history.push('/game') }}
      >
        Start Game
      </button>
    ))

    return (
      <div>
        <Button />
      </div>
    );
  }
}

export default Settings;
