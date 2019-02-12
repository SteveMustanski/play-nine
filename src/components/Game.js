import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';
import { Container } from 'reactstrap';

class Game extends Component {

  state = {
    selectedNumbers: []
  }
  selectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }

 numberOfStars = Math.floor(Math.random() * 9) + 1;

  render() {
    return (
      <Container>
        <h3 id="heading">Play Nine</h3>
        <div className='row'>
          <Stars numberOfStars={this.numberOfStars}/>
          <Button />
          <Answer selectedNumbers={this.state.selectedNumbers} />
        </div>
        <Numbers
          selectedNumbers={this.state.selectedNumbers}
          selectNumber={this.selectNumber}
        />
      </Container>
    )
  }
}

export default Game;