import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';
import { Container } from 'reactstrap';

class Game extends Component {

  render() {
    return (
      <Container>
        <h3 id="heading">Play Nine</h3>
        <div className='row'>
          <Stars />
          <Button />
          <Answer />
        </div>
        <Numbers />
      </Container>
    )
  }
}

export default Game;