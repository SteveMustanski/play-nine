import React from 'react';
import Button from '../Button';
import { shallow } from 'enzyme';

describe('Button', function (){
  const mountedButton = shallow(<Button />);

  it('renders without crashing', () => {
    shallow(<Button />);
  })

  it('displays button in col-2 format', () => {
    const col = mountedButton.find('.col-2');
    expect(col.length).toBe(1);
  })
})