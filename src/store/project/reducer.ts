import { Reducer } from 'redux';
import { ProjectsState, Action } from './types';

export const initState: ProjectsState = {
  projects: [
    { id: 1, title: 'help me find peach', content: 'blah blah blah' },
    { id: 2, title: 'collect all the starts', content: 'blah blah blah' },
    { id: 3, title: 'egg hunt with me', content: 'blah blah blah' },
  ],
};

const projectReducer: Reducer<ProjectsState> = (
  state: ProjectsState = initState,
  action,
) => {
  switch ((action as Action).type) {
    case '@@project/CREATE_PROJECT':
      return { projects: [...state.projects, action.payload] };
    default:
      return state;
  }
};

export default projectReducer;
