import React, { Component } from 'react';

class Numbers extends Component {

  render() {
    return (
      <div className='card text-center'>
        <div>
          {Numbers.list.map((number, i) =>
            <span className="pic-num" key={i}>{number}</span>)}
        </div>

      </div>
    )
  }
}

Numbers.list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default Numbers;