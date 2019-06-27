import { ActionCreator } from 'redux';
import { InitAction } from './types';

export const initAction: ActionCreator<InitAction> = (project: string) => ({
  type: '@@project/INIT',
  payload: { project },
});
