import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App', function () {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders the game component', () => {
    let mountedApp = shallow(<App />);
    const game = mountedApp.find('Game');
    expect(game.length).toBe(1);
  })

})

