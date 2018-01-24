import React from 'react';
import expect from 'expect';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AccountBalance from '../../../components/account/AccountBalance/index';

configure({ adapter: new Adapter() });

describe('AccountBalance', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AccountBalance />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should display account balance amount', () => {
    const accountBalance = mount(<AccountBalance amount="£105.20" />);

    expect(accountBalance.find('.account-balance__amount').length).toEqual(1);
    expect(accountBalance.props().amount).toBeDefined();
    expect(accountBalance.props().amount).toBe('£105.20');

    accountBalance.setProps({ amount: '£110.39' });
    expect(accountBalance.props().amount).toBe('£110.39');
  });

  it('should display next month payment amount', () => {
    const accountBalance = mount(<AccountBalance nextMonthAmount="£60.55" />);

    expect(accountBalance.find('.account-balance__next-month-amount').length).toEqual(1);
    expect(accountBalance.props().nextMonthAmount).toBeDefined();
    expect(accountBalance.props().nextMonthAmount).toBe('£60.55');

    accountBalance.setProps({ nextMonthAmount: '£85.17' });
    expect(accountBalance.props().nextMonthAmount).toBe('£85.17');
  });

  it('should display how many days left', () => {
    const accountBalance = mount(<AccountBalance daysLeft="16" />);

    expect(accountBalance.find('.account-balance__days-left').length).toEqual(1);
    expect(accountBalance.props().daysLeft).toBeDefined();
    expect(accountBalance.props().daysLeft).toBe('16');

    accountBalance.setProps({ daysLeft: '25' });
    expect(accountBalance.props().daysLeft).toBe('25');
  });
});
