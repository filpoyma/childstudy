import React from 'react';
import { Container } from 'semantic-ui-react';

const SignOut = () => {
  setTimeout(() => (window.location = '/'), 500);
  return (
    <Container text style={{ marginTop: '50px' }}>
      <p>Leer no es malo...</p>
    </Container>
  );
};

export default SignOut;
