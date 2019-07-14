import { Action } from 'redux';

export interface Project {
  title: string;
  content: string;
}

export interface ProjectsState {
  projects: Project[];
  error: string;
}

interface CreateProjectAction extends Action {
  type: '@@project/CREATE_PROJECT';
  payload: Project;
}

interface CreateProjectActionError extends Action {
  type: '@@project/CREATE_PROJECT_ERROR';
  payload: any;
}

export type Action = CreateProjectAction | CreateProjectActionError;
