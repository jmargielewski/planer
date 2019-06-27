import { Reducer } from 'redux';
import { AuthState, InitAction } from './types';

export const initState: AuthState = {
  auth: '',
};

const authReducer: Reducer<AuthState> = (state: AuthState = initState, action) => {
  switch ((action as InitAction).type) {
    case '@@auth/INIT':
      return { ...state, resolution: action.payload };
    default:
      return state;
  }
};

export default authReducer;
