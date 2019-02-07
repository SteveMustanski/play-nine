import React from 'react';
import Answer from '../Answer';
import { shallow } from 'enzyme';

describe('Answer', function (){
  const mountedAnswer = shallow(<Answer />);

  it('renders without crashing', () => {
    shallow(<Answer />)
  })
  it('diplays Answer in a col-5 format', () => {
    const col = mountedAnswer.find('.col-5');
    expect(col.length).toBe(1);
  })
})

