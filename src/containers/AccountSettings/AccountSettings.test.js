import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

import AccountSettings from './index';

configure({ adapter: new Adapter() });

describe('AccountSettings', () => {
  it('it render without crashing', () => {
    const wrapper = shallow(<AccountSettings />);

    expect(wrapper.length).toEqual(1);
  });
});
