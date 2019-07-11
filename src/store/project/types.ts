import { Action } from 'redux';

export interface Project {
  id: number;
  title: string;
  content: string;
}

export interface ProjectsState {
  projects: Project[];
}

interface CreateProjectAction extends Action {
  type: '@@project/CREATE_PROJECT';
  project: Project;
}

export type Action = CreateProjectAction;
