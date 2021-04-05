import { actionTypes } from './types';

const initialState = {
  allUsers: [],
  user: null,
  error: null,
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SETUSERS:
      return { ...state, allUsers: action.payload };
    case actionTypes.SETUSER:
      return { ...state, user: action.payload };
    case actionTypes.SETERROR:
      return { ...state, error: action.payload };
    case actionTypes.CLEARERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
