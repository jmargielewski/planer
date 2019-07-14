import { combineReducers, Reducer } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import { AuthState } from './auth/types';
import authReducer from './auth/reducer';

import { ProjectsState } from './project/types';
import projectReducer from './project/reducer';

export interface ApplicationState {
  auth: AuthState;
  project: ProjectsState;
  firestore: any;
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
});
