import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import App from './components/App';
import configureStore from './configureStore';

const store = configureStore();

render(
  <Root store={store}>
    <App />
  </Root>,
  document.getElementById('root')
);
