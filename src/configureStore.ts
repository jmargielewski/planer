/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
import { compose, createStore, applyMiddleware, Store } from 'redux';
import reduxThunk from 'redux-thunk';
import { ApplicationState, reducers } from './store';
import { InitAction } from './store/layout/types';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const configureStore = (): Store<ApplicationState> => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore<ApplicationState, InitAction, any, any>(
    reducers,
    {},
    composeEnhancers(applyMiddleware(reduxThunk))
  );

  return store;
};

export default configureStore;
