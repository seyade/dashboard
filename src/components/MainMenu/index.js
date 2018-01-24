import React from 'react';
import { Link } from 'react-router-dom';

import './MainMenu.scss';

const MainMenu = () => {
  return (
    <nav className="main-menu">
      <ul className="main-menu__list">
        <li className="main-menu__item">
          <Link to="/"><span className="icon fa fa-bar-chart"></span> Dashboard</Link>
        </li>
        <li className="main-menu__item">
          <Link to="/account-settings"><span className="icon fa fa-user"></span> Account Settings</Link>
        </li>
        <li className="main-menu__item">
          <Link to="/"><span className="icon fa fa-rocket"></span> Change Plans</Link>
        </li>
        <li className="main-menu__item">
          <Link to="/"><span className="icon fa fa-refresh"></span> Expense Statistics</Link>
        </li>
        <li className="main-menu__item">
          <Link to="/"><span className="icon fa fa-credit-card"></span> Payments</Link>
        </li>
        <li className="main-menu__item">
          <Link to="/"><span className="icon fa fa-th"></span> Additional Services</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
