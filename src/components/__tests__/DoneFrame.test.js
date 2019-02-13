import React from 'react';
import DoneFrame from '../DoneFrame';
import { shallow } from 'enzyme';

describe('DoneFrame', function (){
  // const mountedButton = shallow(<DoneFrame />);

  it('renders without crashing', () => {
    shallow(<DoneFrame />);
  })
})