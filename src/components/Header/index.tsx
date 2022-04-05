import React from 'react';
import { Container, Subtitle, Title } from './styles';

export function Header() {
  return (
    <Container>
      <Title>
        Acessar{'\n'}
        sua conta
      </Title>

      <Subtitle>
        Utilize uma das opções{'\n'}
        para acessar mais rápido
      </Subtitle>
    </Container>
  )
}