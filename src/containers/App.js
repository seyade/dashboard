// /containers/App/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//components
import Main from '../containers/Main';
import Sidebar from '../components/Sidebar';

// style
import './App.scss';

const App = () => {
  return (
    <Router>
      <main className="dashboard-app">
        <Sidebar />
        <Main />
      </main>
    </Router>
  );
};

export default App;
