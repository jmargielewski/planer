import { Reducer } from 'redux';
import { AuthState, InitAction } from './types';

export const initialState: AuthState = {
  auth: '',
};

const reducer: Reducer<AuthState> = (state: AuthState = initialState, action) => {
  switch ((action as InitAction).type) {
    case '@@auth/INIT':
      return { ...state, resolution: action.payload };
    default:
      return state;
  }
};

export default reducer;
