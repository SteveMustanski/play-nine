import React from 'react';
import Button from '../Button';
import { shallow } from 'enzyme';

describe('Button', function (){

  it('renders without crashing', () => {
    shallow(<Button />)
  })
})