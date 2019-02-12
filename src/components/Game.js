import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';
import { Container } from 'reactstrap';

class Game extends Component {

  state = {
    selectedNumbers: [],
    numberOfStars: Math.floor(Math.random() * 9) + 1
  }
  selectNumber = (clickedNumber) => {
    if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {return};
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }

  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }));
  }
  render() {
    const {selectedNumbers, numberOfStars} = this.state;
    return (
      <Container>
        <h3 id="heading">Play Nine</h3>
        <div className='row'>
          <Stars numberOfStars={numberOfStars}/>
          <Button selectedNumbers={selectedNumbers}/>
          <Answer 
          selectedNumbers={selectedNumbers}
          unselectNumber={this.unselectNumber} />
        </div>
        <Numbers
          selectedNumbers={selectedNumbers}
          selectNumber={this.selectNumber}
        />
      </Container>
    )
  }
}

export default Game;