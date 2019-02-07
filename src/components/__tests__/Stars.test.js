import React from 'react';
import Stars from '../Stars';
import { shallow } from 'enzyme';

describe('Stars', function (){
  const mountedStars = shallow(<Stars />)

  it('renders without crashing', () => {
    shallow(<Stars />)
  })
  it('stars is diplayed as a col-5 class', () => {
    const col = mountedStars.find('.col-5');
    expect(col.length).toBe(1);
  })
})