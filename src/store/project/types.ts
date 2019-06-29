import { Action } from 'redux';

interface ProjectState {
  id: number;
  title: string;
  content: string;
}

export interface ProjectsState {
  projects: ProjectState[];
}

export interface InitAction extends Action {
  type: '@@project/INIT';
  payload: { project: string };
}
