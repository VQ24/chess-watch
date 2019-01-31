import React, { Component } from 'react';
import { capitalizeFirstLetter } from '../../utils/utils';
import Button from '../../settings/input-components/button/button';
import './lose-screen.css';

class LoseScreen extends Component {

  handlePlayAgainButtonClick = () => {
    console.log('again')
  }

  handleBackButtonClick = () => {
    console.log('back')
  }

  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal-flex-container">
          <h1 className='margin-bottom-lg'>{capitalizeFirstLetter(this.props.loser)} player lose</h1>
          <div className='margin-bottom-md'>
            <Button
              label='Play again'
              style={{ 'minWidth': '15rem' }}
              active={true}
              onClick={this.handlePlayAgainButtonClick}
            />
          </div>
          <div className='margin-bottom-md'>
            <Button
              label='Back to menu'
              style={{ 'minWidth': '15rem' }}
              active={true}
              onClick={this.handleBackButtonClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LoseScreen;
