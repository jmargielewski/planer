import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { Action, Project } from './types';
import { ApplicationState } from '../index';

type ThunkResult<R> = ThunkAction<R, Project, any, any>;

export const createProject: ActionCreator<ThunkResult<Promise<Action>>> = (
  project: Project,
) => async (
  dispatch: ThunkDispatch<ApplicationState, any, Action>,
  getState,
  { getFirebase, getFirestore },
): Promise<Action> => {
  const resp = await fetch('https:/test.com');
  return dispatch({ type: '@@project/CREATE_PROJECT', project });
};
