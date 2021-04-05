import cookies from 'js-cookie';
import { actionTypes } from '../globalTypes';

const initialState = {
  isLoggedIn: !!cookies.get('t'),
  isAdmin: false,
  loading: false,
  mainLoading: true,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return { ...state, loading: true };
    case actionTypes.LOADINGCANCEL:
      return { ...state, loading: false };
    case actionTypes.LOGIN:
      return { ...state, isLoggedIn: true, loading: false, mainLoading: false };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        isAdmin: false,
        loading: false,
        mainLoading: false,
      };
    case actionTypes.SETADMINPERMISSION:
      return { ...state, isAdmin: true };
    default:
      return state;
  }
};
