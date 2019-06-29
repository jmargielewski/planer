import { combineReducers, Reducer } from 'redux';

import { AuthState } from './auth/types';
import authReducer from './auth/reducer';

import { ProjectsState } from './project/types';
import projectReducer from './project/reducer';

export interface ApplicationState {
  auth: AuthState;
  project: ProjectsState;
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  auth: authReducer,
  project: projectReducer,
});
