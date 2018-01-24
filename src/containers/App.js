// /containers/App/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//components
import Main from './Main';
import Sidebar from '../components/Sidebar';

import UserInfo from '../components/UserInfo';
import MainMenu from '../components/MainMenu';

// style
import './App.scss';

const App = () => {
  return (
    <Router>
      <main className="dashboard-app">
        <Sidebar>
          <UserInfo />
          <MainMenu />
        </Sidebar>
        <Main />
      </main>
    </Router>
  );
};

export default App;
