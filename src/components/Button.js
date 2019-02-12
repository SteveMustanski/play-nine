import React from 'react';
const Button = (props)  =>  {

    return (
      <div className='col-2'>
        <button className='btn btn-secondary' disabled={props.selectedNumbers.length === 0}>=</button>
      </div>
    )
  }

export default Button;