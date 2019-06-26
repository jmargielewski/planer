import { ActionCreator } from 'redux';
import { InitAction } from './types';

export const initAction: ActionCreator<InitAction> = (auth: string) => ({
  type: '@@auth/INIT',
  payload: { auth },
});
