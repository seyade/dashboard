import React from 'react';
import expect from 'expect';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './index';

configure({ adapter: new Adapter() });

describe('Main', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
