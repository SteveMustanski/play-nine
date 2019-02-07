import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import {Container} from 'reactstrap';

class Game extends Component {

  render() {
    return (
      <Container>
        <h3 id="heading">Play Nine</h3>
        <Stars />
        <Button />
      </Container>
    )
  }
}

export default Game;