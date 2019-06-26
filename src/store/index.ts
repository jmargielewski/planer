import { combineReducers, Reducer } from 'redux';

import { AuthState } from './auth/types';
import authReducer from './auth/reducer';

export interface ApplicationState {
  auth: AuthState;
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  auth: authReducer,
});
