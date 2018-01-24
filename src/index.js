import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './assets/bower_components/components-font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
registerServiceWorker();
