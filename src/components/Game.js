import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import { Container } from 'reactstrap';

class Game extends Component {

  render() {
    return (
      <div className='row'>
        <Container>
          <h3 id="heading">Play Nine</h3>
          <Stars />
          <Button />
          <Answer />
        </Container>
      </div>
    )
  }
}

export default Game;