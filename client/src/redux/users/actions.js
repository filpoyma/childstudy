import { API_PREF } from '../../utils/consts';
import { actionTypes } from './types';
import { Http } from '../../utils/auth/http';
import cookies from 'js-cookie';
import { loadingAC, loadingCancelAC } from '../auth/actions';

export const setUserAC = (user) => ({
  type: actionTypes.SETUSER,
  payload: user,
});

export const setErrorAC = (val) => ({
  type: actionTypes.SETERROR,
  payload: val,
});

export const clearErrorAC = () => ({
  type: actionTypes.CLEARERROR,
});

export const getUsers = () => async (dispatch) => {
  dispatch(loadingAC());
  const token = cookies.get('t');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const resp = await Http.get(`${API_PREF}/user`, config);

  if (resp) {
    if (resp.status) {
      dispatch({ type: actionTypes.SETUSERS, payload: resp.user });
      dispatch(loadingCancelAC());
    } else {
      alert(`Что то не так - ${resp ? resp.message : 'Сервер недоступен'}`);
    }
  } else {
    alert('Что то не так - Сервер недоступен.');
  }
};

export const delUser = (id) => async (dispatch) => {
  const userId = cookies.get('id'); //id для авторизации
  const token = cookies.get('t');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const resp = await Http.delete(`${API_PREF}/user/${userId}`, { id }, config);
  if (resp?.status) {
    dispatch(getUsers());
    alert(resp.message);
  } else {
    alert(`Что то не так - ${resp ? resp.message : 'сервер недоступен'}`);
  }
};
