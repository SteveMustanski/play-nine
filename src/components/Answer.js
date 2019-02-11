import React from 'react';

const Answer = (props) => {
  return (
    <div className="col-5">
      {props.selectedNumbers.map((number, i) => 
        <span className="pic-num" key={i}>{number}</span>
      )}
    </div>
  )
}

export default Answer;