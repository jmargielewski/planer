import { Reducer } from 'redux';
import { ProjectsState, Action } from './types';

export const initState: ProjectsState = {
  projects: [
    { title: 'help me find peach', content: 'blah blah blah' },
    { title: 'collect all the starts', content: 'blah blah blah' },
    { title: 'egg hunt with me', content: 'blah blah blah' },
  ],
  error: '',
};

const projectReducer: Reducer<ProjectsState> = (
  state: ProjectsState = initState,
  action,
) => {
  switch ((action as Action).type) {
    case '@@project/CREATE_PROJECT':
      return { ...state, projects: [...state.projects, action.payload] };
    case '@@project/CREATE_PROJECT_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default projectReducer;
