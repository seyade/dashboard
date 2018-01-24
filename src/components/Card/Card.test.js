import React from 'react';
import expect from 'expect';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './index';

configure({ adapter: new Adapter });

describe('', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />);
  });

  it('render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
