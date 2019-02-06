import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

describe('App', function () {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the game component', () => {
    let mountedApp = shallow(<App />);
    const game = mountedApp.find('Game');
    expect(game.length).toBe(1);
  })

})

