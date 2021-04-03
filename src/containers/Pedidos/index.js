import React, { Component } from 'react';

import Title from '../../components/Title';

import { Container } from './styles';


class Pedidos extends Component {
  render() {
    return (
      <Container>
        < Title tipo='h1' title='Pedidos' />
      </Container>
    );
  }
}

export default Pedidos;
