import React from 'react';
import ReactDOM from 'react-dom';

import './index.module.scss';
import 'macro-css'
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'

// ВОЗМОЖНО НУЖЕН CONSUMER
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
