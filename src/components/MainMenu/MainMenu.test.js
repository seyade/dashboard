import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

import MainMenu from './index';

configure({ adapter: new Adapter() });

describe('MainMenu', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MainMenu />);
  });

  it('it render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('it has 6 menu navigation links', () => {
    expect(wrapper.find('.main-menu__item').length).toEqual(6);
  });
});
