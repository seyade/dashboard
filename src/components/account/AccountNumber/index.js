import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card';
import './AccountNumber.scss';

const cardStyle = {
  width: '300px',
};

const AccountNumber = (props) => {
  return (
    <Card styles={cardStyle}>
      <div className="account-number">
        <span className="account-number__icon card-icon card-icon--small fa fa-user"></span>
        <h2 className="account-number__number">{props.accNumber}</h2>
        <h3 className="account-number__title">ACCOUNT NUMBER</h3>
      </div>
    </Card>
  );
}

AccountNumber.propTypes ={
  accNumber: PropTypes.string,
};

export default AccountNumber;
