import React from 'react';
import expect from 'expect';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import UserInfo from './index';

configure({ adapter: new Adapter() });

describe('UserInfo', () => {
  const wrapper = shallow(<UserInfo />);

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
