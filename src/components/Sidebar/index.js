// /components/Sidebar
import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.scss';

const Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Sidebar</h2>

      {props.children}

      <div className="sidebar__sign-out">
        <Link to="/"><span className="icon fa fa-power-off"></span> Sign out</Link>
      </div>
    </aside>
  );
}

export default Sidebar;
