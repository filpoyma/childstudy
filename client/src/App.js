import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Header } from './components/layout/Header';
import Routers from './routers';
import { store } from './redux';

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routers />
    </BrowserRouter>
  </Provider>
);
