import React from 'react';
import expect from 'expect';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AccountNumber from '../../../components/account/AccountNumber/index';

configure({ adapter: new Adapter() });

describe('AccountNumber', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AccountNumber />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('sets account number in props', () => {
    const accountNumber = mount(<AccountNumber accNumber="11110000" />);
    expect(accountNumber.props().accNumber).toEqual('11110000');

    accountNumber.setProps({ accNumber: '22220000' });
    expect(accountNumber.props().accNumber).toEqual('22220000');
  });
});
