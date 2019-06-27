import { combineReducers, Reducer } from 'redux';

import { AuthState } from './auth/types';
import authReducer from './auth/reducer';

import { ProjectState } from './project/types';
import projectReducer from './project/reducer';

export interface ApplicationState {
  auth: AuthState;
  project: ProjectState;
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  auth: authReducer,
  project: projectReducer,
});
