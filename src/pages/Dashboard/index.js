/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../util/store';

import { Container } from './styles';

class Dashboard extends Component {
  render() {
    return (
      <Provider store={store}>
      <Container>
        <h1>dashboard</h1>
      </Container>
      </Provider>
    );
  }
}

export default Dashboard;
