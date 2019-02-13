import React from 'react';

const DoneFrame = (props) => {
  return (
    <div className="col-12 text-center">
      <h2>{props.doneStatus}</h2>
    </div>
  )
}

export default DoneFrame;