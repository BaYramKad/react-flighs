import React from 'react';
import ReactDOM from 'react-dom';

import './index.module.scss';
import 'macro-css';

import { Provider } from 'react-redux';
import {Router} from 'react-router'
import {Switch} from 'react-router-dom'
import App from './App';
import store from './redux/store'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory()

// ВОЗМОЖНО НУЖЕН CONSUMER
  ReactDOM.render(
        <Provider store={store}>
          <Router history={history} >
              <App/>
          </Router>
        </Provider>,
    document.getElementById('root')
  );
