import React from 'react';

import { Container, Photo, Name, Email } from './styles';

export type UserProps = {
  name: string;
  email: string;
  picture: string;
}

type Props = {
  user: UserProps;
}

export function User({ user }: Props) {
  return (
    <Container>
      <Photo
        source={{ uri: user.picture }}
      />

      <Name>
        {user.name}
      </Name>

      <Email>
        {user.email}
      </Email>
    </Container>
  );
}