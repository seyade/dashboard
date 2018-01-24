import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

import PersonalAccount from './index';

configure({ adapter: new Adapter() });

describe('PersonalAccount', () => {
  it('it render without crashing', () => {
    const wrapper = shallow(<PersonalAccount />);

    expect(wrapper.length).toEqual(1);
  });
});
