import React, { FunctionComponent } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { ApplicationState } from './store';

interface RootProps {
  store: Store<ApplicationState>;
}

const Root: FunctionComponent<RootProps> = ({ children, store }) => (
  <Provider store={store}>{children}</Provider>
);

export default Root;
