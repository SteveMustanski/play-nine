import React from 'react';
import Answer from '../Answer';
import { shallow } from 'enzyme';

describe('Answer', function (){
  let selectedNumbers = [2,4];
  const mountedAnswer = shallow(<Answer selectedNumbers={selectedNumbers}/>);

  it('renders without crashing', () => {
    shallow(<Answer  selectedNumbers={selectedNumbers}/>)
  })
  it('diplays Answer in a col-5 format', () => {
    const col = mountedAnswer.find('.col-5');
    expect(col.length).toBe(1);
  })
  it('displays the numbers that are passed to it', () => {
    const number = mountedAnswer.find('span');
    expect(number.at(0).text()).toEqual('2');
    expect(number.at(1).text()).toEqual('4');
  })
})

