import { API_PREF } from '../../utils/consts';
import { actionTypes } from '../globalTypes';
import { actionTypes as actionTypesUser } from '../users/types';
import { Http } from '../../utils/auth/http';
import cookies from 'js-cookie';

//const credentialsConf = {credentials: 'include'} //todo для того чтобы куки с бэка приходили + для этого надо убрать * на бэке Access-Control-Allow-Origin
const credentialsConf = {};

export const loadingAC = () => ({ type: actionTypes.LOADING });

export const loadingCancelAC = () => ({ type: actionTypes.LOADINGCANCEL });

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: actionTypes.LOADING });
  const resp = await Http.post(
    `${API_PREF}/auth/signin`,
    { email, password },
    credentialsConf
  );

  if (resp?.status) {
    cookies.set('t', resp.token, { expires: 14 });
    cookies.set('id', resp.user._id, { expires: 14 });
    //console.log('set cookie token', resp.token);
    //console.log('set cookie id', resp.user._id);
    dispatch({ type: actionTypesUser.SETUSER, payload: resp.user });
    if (resp.user.role === 1)
      dispatch({ type: actionTypes.SETADMINPERMISSION });
    dispatch({ type: actionTypes.LOGIN });
    alert(`Привет, ${resp.user.name}`);
  } else {
    alert(`Что то не так - ${resp ? resp.message : 'сервер недоступен'}`);
    dispatch({ type: actionTypes.LOADINGCANCEL });
  }
};

export const signup = (data) => async (dispatch) => {
  dispatch({ type: actionTypes.LOADING });
  const resp = await Http.post(
    `${API_PREF}/auth/signup`,
    data,
    credentialsConf
  );

  if (resp?.status) {
    cookies.set('t', resp.token);
    cookies.set('id', resp.user._id);
    dispatch({ type: actionTypesUser.SETUSER, payload: resp.user });
    dispatch({ type: actionTypes.LOGIN });
    alert(`Привет, ${resp.user.name}`);
  } else {
    alert(`Что то не так - ${resp ? resp.message : 'сервер недоступен'}`);
    dispatch({ type: actionTypes.LOADINGCANCEL });
  }
};

export const signout = () => async (dispatch) => {
  const resp = await Http.get(`${API_PREF}/auth/signout`, credentialsConf);
  cookies.remove('t');
  cookies.remove('id');
  console.log('logout', resp);
  alert(`Adiós`);
  dispatch({ type: actionTypes.LOGOUT });
};

export const sessionChecker = () => async (dispatch) => {
  const userId = cookies.get('id');
  const token = cookies.get('t');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const resp = await Http.get(`${API_PREF}/user/${userId}`, config);

  if (resp) {
    if (resp.status) {
      dispatch({ type: actionTypes.LOGIN });
      dispatch({ type: actionTypesUser.SETUSER, payload: resp.user });
      if (resp.user.role === 1)
        dispatch({ type: actionTypes.SETADMINPERMISSION });
    } else dispatch({ type: actionTypes.LOGOUT });
  } else {
    alert('Что то не так: сервер недоступен, обновите страницу позже...');
    dispatch({ type: actionTypes.MAINLOADING });
  }
};

// export const autoSignin = () => async dispatch => {
//   const userData = JSON.parse(await SecureStore.getItemAsync("lexicon"));
//
//   if (!userData) {
//     dispatch({
//       type: LOADING
//     });
//   } else {
//     const resp = await isAuth(userData.email, userData.password);
//
//     if (resp) {
//       dispatch({
//         type: LOGIN
//       });
//     } else {
//       dispatch({
//         type: LOADING
//       });
//     }
//   }
// };
