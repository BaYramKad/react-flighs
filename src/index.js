import React from 'react';
import ReactDOM from 'react-dom';

import './index.module.scss';
import 'macro-css';

import store from './redux/store'
import { Provider } from 'react-redux';

import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory()
  ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
          <Router history={history} >
             <App/>
          </Router>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
