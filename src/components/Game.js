import React, { Component } from 'react';
import Stars from './Stars';
import {Container} from 'reactstrap';

class Game extends Component {

  render() {
    return (
      <Container>
        <h3 id="heading">Play Nine</h3>
        <Stars />
      </Container>
    )
  }
}

export default Game;