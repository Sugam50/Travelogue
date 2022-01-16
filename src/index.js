import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line
import app from './utils/fire';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
