import React from 'react';
import Numbers from '../Numbers';
import { shallow } from 'enzyme';

describe('Stars', function () {

  const mountedNumbers = shallow(<Numbers />);

  it('renders without crashing', () => {
    shallow(<Numbers />)
  })

  it('it displays numbers in 9 span elements', () => {
    const span = mountedNumbers.find('span');
    expect(span.length).toBe(9);
  })

  it('Numbers are displayed in a card format', () => {
    const card = mountedNumbers.find('.card');
    expect(card.length).toBe(1);
  })

  it('Numbers are displayed in a text-center format', () => {
    const textCenter = mountedNumbers.find('.text-center');
    expect(textCenter.length).toBe(1);
  })

})