import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../Game';
import { shallow } from 'enzyme';

describe('Game', function () {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Game />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})