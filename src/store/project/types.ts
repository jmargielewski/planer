import { Action } from 'redux';

export interface ProjectState {
  project: string;
}

export interface InitAction extends Action {
  type: '@@project/INIT';
  payload: { project: string };
}
