import { Action } from 'redux';

export interface AuthState {
  auth: string;
}

export interface InitAction extends Action {
  type: '@@auth/INIT';
  payload: { auth: string };
}
