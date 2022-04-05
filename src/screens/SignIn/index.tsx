import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

import { Header } from '../../components/Header';
import { Form } from '../../components/Form';
import { Container } from './styles';

export function SignIn() {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <>
            <Header />
            <Form />
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container >
  );
}