/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
import thunk from 'redux-thunk';
import firebase from 'firebase/app';
import { compose, createStore, applyMiddleware, Store } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { ApplicationState, reducers } from './store';
import { InitAction } from './store/auth/types';
import fbConfig from './config/fbConfig';

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
    composeEnhancers(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reduxFirestore(fbConfig),
      reactReduxFirebase(firebase, fbConfig),
    ),
  );

  return store;
};

export default configureStore;
