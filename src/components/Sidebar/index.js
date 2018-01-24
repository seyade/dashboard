// /components/Sidebar
import React from 'react';
import { Link } from 'react-router-dom';

import UserInfo from '../UserInfo';
import MainMenu from '../MainMenu';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Sidebar</h2>
      <UserInfo />
      <MainMenu />

      <div className="sidebar__sign-out">
        <Link to="/"><span className="icon fa fa-power-off"></span> Sign out</Link>
      </div>
    </aside>
  );
}

export default Sidebar;
