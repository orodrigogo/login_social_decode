import React from 'react';

import { User } from '../User';
import { Button } from '../Button';

import { Container } from './styles';

export function Form() {

  return (
    <Container>
      <Button
        icon="google"
        title="Entrar com Google"
      />

      { /* <User /> */}
    </Container>
  )
}