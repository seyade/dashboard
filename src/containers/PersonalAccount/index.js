import React, { Component } from 'react';
import PageHeader from '../../components/PageHeader';
import AccountNumber from '../../components/account/AccountNumber';

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
        </article>
      </section>
    );
  }
}
