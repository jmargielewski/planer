import { Reducer } from 'redux';
import { ProjectState, InitAction } from './types';

export const initState: ProjectState = {
  project: '',
};

const projectReducer: Reducer<ProjectState> = (
  state: ProjectState = initState,
  action
) => {
  switch ((action as InitAction).type) {
    case '@@project/INIT':
      return { ...state, resolution: action.payload };
    default:
      return state;
  }
};

export default projectReducer;
