// containers/Main/index.js
import React from 'react';
import { Route } from 'react-router-dom';

import PersonalAccount from '../PersonalAccount';
import AccountSettings from '../AccountSettings';

import './Main.scss';

const Main = (props) => {
  return (
    <article className="main-app">
      <Route exact path="/" component={PersonalAccount} />
      <Route exact path="/account-settings" component={AccountSettings} />
    </article>
  );
};

export default Main;
