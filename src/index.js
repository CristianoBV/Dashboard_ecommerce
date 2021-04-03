/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line no-unused-vars
import GlobalStyle from './styles/stylesGlobal';

import reportWebVitals from './reportWebVitals';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
