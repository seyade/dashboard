import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

import PageHeader from './index';

configure({ adapter: new Adapter() });

describe('PageHeader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PageHeader />);
  });

  it('it render without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('it lets us set title in text props', () => {
    const pageHeader = mount(<PageHeader text="Page Title Here" />);

    expect(pageHeader.props().text).toEqual('Page Title Here');

    pageHeader.setProps({ text: 'Personal Account' });
    expect(pageHeader.props().text).toEqual('Personal Account');

    pageHeader.setProps({ text: 'Account Setting' });
    expect(pageHeader.props().text).toEqual('Account Setting');
  });
});
