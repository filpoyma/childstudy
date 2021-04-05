import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const GlobalLoader = ({ message = '' }) => (
  <Dimmer active inverted>
    <Loader>{message}</Loader>
  </Dimmer>
);

export default GlobalLoader;
