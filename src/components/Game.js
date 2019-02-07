import React, { Component } from 'react';
import Stars from './Stars';

class Game extends Component {

  render() {
    return (
      <div>
        <h3 id="heading">Play Nine</h3>
        <Stars />
      </div>
    )
  }
}

export default Game;