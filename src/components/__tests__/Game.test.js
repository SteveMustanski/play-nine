import React from 'react';
import Game from '../Game';
import { shallow } from 'enzyme';

describe('Game', function () {
  let mountedGame;
  beforeEach(() => {
    mountedGame = shallow(<Game />);
  })

  it('renders without crashing', () => {
    shallow(<Game />);
  });

  it('displays a container component', function () {
    const container = mountedGame.find('Container');
    expect(container.length).toBe(1);
  })

  it('displays the game heading', () => {
    const GameHeading = mountedGame.find('#heading');
    expect(GameHeading.text()).toEqual('Play Nine');
  })

  it('displays the stars component', function () {
      const headers = mountedGame.find('Stars');
      expect(headers.length).toBe(1);
    });

  it('displays a button component', () => {
    const button = mountedGame.find('Button');
    expect(button.length).toBe(1);
  })
})