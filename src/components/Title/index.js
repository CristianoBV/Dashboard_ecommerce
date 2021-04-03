import React from 'react';

import { Container } from './styles';

const Title = ({ tipo, title }) => {
  switch (tipo) {
    case 'h1':
    default:
      return (
        <Container>
          <h1>{title}</h1>
        </Container>
      );
  }
};

export default Title;
