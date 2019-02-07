import React from 'react';
import Numbers from '../Numbers';
import { shallow } from 'enzyme';

describe('Stars', function (){

  it('renders without crashing', () => {
    shallow(<Numbers />)
  })
})