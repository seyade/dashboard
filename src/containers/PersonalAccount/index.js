import React, { Component } from 'react';
import PageHeader from '../../components/PageHeader';
import AccountNumber from '../../components/account/AccountNumber';
import AccountBalance from '../../components/account/AccountBalance';

import './PersonalAccount.scss';

export default class PersonalAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: {
        number: '170923'
      },
    }
  }

  render() {
    return (
      <section className="personal-account">
        <PageHeader text="Personal Account" />
        <article className="app-content">
          <AccountNumber accNumber={this.state.account.number} />
          <AccountBalance
            amount="£170.99"
            nextMonthAmount="£28.05"
            daysLeft="17"
          />
        </article>
      </section>
    );
  }
}
