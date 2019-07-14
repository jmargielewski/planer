import { ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { Action, Project } from './types';
import { ApplicationState } from '../index';

type ThunkResult<R> = ThunkAction<R, Project, any, any>;

export const createProject: ActionCreator<ThunkResult<Promise<void>>> = (
  project: Project,
) => async (
  dispatch: ThunkDispatch<ApplicationState, any, Action>,
  getState,
  { getFirebase, getFirestore },
): Promise<void> => {
  const firestore = await getFirestore();
  firestore
    .collection('projects')
    .add({
      ...project,
      authorFirstName: 'Kuba',
      authorLastName: 'Tester',
      authorId: 12345,
      createdAt: new Date(),
    })
    .then(() => {
      dispatch({ type: '@@project/CREATE_PROJECT', payload: project });
    })
    .catch((err: any) => {
      dispatch({ type: '@@project/CREATE_PROJECT_ERROR', payload: err });
    });
};
