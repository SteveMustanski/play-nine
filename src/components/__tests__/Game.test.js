import React from 'react';
import Game from '../Game';
import { shallow } from 'enzyme';

describe('Game', function () {
  it('renders without crashing', () => {
    shallow(<Game />);
  });

  it('displays the game heading', () => {
    const mountedGame = shallow(<Game />);
    const GameHeading = mountedGame.find('#heading');
    expect(GameHeading.text()).toEqual('Play Nine');
  })
})