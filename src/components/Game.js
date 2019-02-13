import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';
import { Container } from 'reactstrap';

class Game extends Component {

  state = {
    selectedNumbers: [],
    numberOfStars: Math.floor(Math.random() * 9) + 1,
    usedNumbers: [],
    answerIsCorrect: null
  }
  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return };
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }

  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }));
  }

  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.numberOfStars ===
        prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
  }

  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      numberOfStars: Math.floor(Math.random() * 9) + 1
    }))
  }
  render() {
    const { selectedNumbers, numberOfStars, answerIsCorrect, usedNumbers} = this.state;
    return (
      <Container>
        <h3 id="heading">Play Nine</h3>
        <div className='row'>
          <Stars numberOfStars={numberOfStars} />
          <Button
            selectedNumbers={selectedNumbers}
            checkAnswer={this.checkAnswer}
            answerIsCorrect={answerIsCorrect}
            acceptAnswer={this.acceptAnswer}
            
          />
          <Answer
            selectedNumbers={selectedNumbers}
            unselectNumber={this.unselectNumber} />
        </div>
        <Numbers
          selectedNumbers={selectedNumbers}
          selectNumber={this.selectNumber}
          usedNumbers={usedNumbers}
        />
      </Container>
    )
  }
}

export default Game;