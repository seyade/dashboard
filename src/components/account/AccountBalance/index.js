import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../../Card';
import './AccountBalance.scss';

const cardStyle = {
  width: '300px',
};

const AccountBalance = (props) => {
  return (
    <Card styles={cardStyle}>
      <div className="account-balance">
        <h3 className="account-balance__title">
          <span className="account-balance__icon card-icon card-icon--small fa fa-credit-card"></span>
          <span className="account-balance__title-text">YOUR BALANCE</span>
        </h3>

        <section className="account-balance__block">
          <div className="account-balance__block-left">
            <p className="account-balance__amount">{props.amount}</p>
            <a className="account-balance__btn" href="/account-settings">Recharge</a>
          </div>
          <div className="account-balance__block-right">
            <h4 className="account-balance__next-month-title">Payment for next month</h4>
            <p className="account-balance__next-month-amount">{props.nextMonthAmount}</p>
            <p className="account-balance__days-left">{props.daysLeft} days left</p>
          </div>
        </section>
      </div>
    </Card>
  );
}

AccountBalance.propTypes = {
  amount: PropTypes.string,
  nextMonthAmount: PropTypes.string,
  daysLeft: PropTypes.string,
};

export default AccountBalance;
