import React from 'react';
import Stars from '../Stars';
import { shallow } from 'enzyme';

describe('Stars', function (){

  it('renders without crashing', () => {
    shallow(<Stars />)
  })
})