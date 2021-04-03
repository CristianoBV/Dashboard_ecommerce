/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './util/store';
import GlobalStyle from './styles/stylesGlobal';

import reportWebVitals from './reportWebVitals';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Routes />
    </Provider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
