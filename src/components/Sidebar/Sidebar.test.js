import React from 'react';
import expect from 'expect';
import {
  mount,
  shallow,
  configure
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// elements
import Sidebar from './index';
import UserInfo from '../UserInfo';

configure({ adapter: new Adapter() });

describe('Sidebar', () => {
  let wrapper,
    userInfo;

  beforeEach(() => {
    wrapper = shallow(<Sidebar />);
    userInfo = shallow(<UserInfo />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render the user info', () => {
    expect(userInfo.length).toEqual(1);
  });
});
