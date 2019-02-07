import React from 'react';
import Answer from '../Answer';
import { shallow } from 'enzyme';

describe('Stars', function (){

  it('renders without crashing', () => {
    shallow(<Answer />)
  })
})