import { actionTypes } from './types';
import cookies from 'js-cookie';

import { loadingAC, loadingCancelAC } from '../auth/actions';
import { clearErrorAC, setErrorAC, setUserAC } from '../users/actions';
import { getUsers } from '../users/actions';
import { API_PREF } from '../../utils/consts';
import { Http } from '../../utils/auth/http';

export const setAudioEndAC = () => ({
  type: actionTypes.AUDIOENDED,
});

export const setAudioStartAC = () => ({
  type: actionTypes.AUDIOSTART,
});

export const setAudioPlayedTimeAC = (value) => ({
  type: actionTypes.AUDIOPLAUEDTIME,
  payload: value,
});

export const saveResultT = ({ result }) => async (dispatch) => {
  dispatch(loadingAC());
  dispatch(clearErrorAC());
  const userId = cookies.get('id');
  const token = cookies.get('t');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const resp = await Http.post(
    `${API_PREF}/tectest/${userId}`,
    { result },
    config
  );
  dispatch(loadingCancelAC());
  if (resp?.status) {
    dispatch(setUserAC(resp.user));
    //alert(`Результаты теста, ${resp.user.name} сохранены`)
  } else {
    const err = resp ? resp.message : 'сервер недоступен';
    //alert(`Что то не так - ${err}`);
    dispatch(setErrorAC(err));
  }
};

export const deleteResultT = (id) => async (dispatch) => {
  //id пользователя из которого надо удалить массив
  const userId = cookies.get('id'); //id для авторизации
  const token = cookies.get('t');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const resp = await Http.delete(
    `${API_PREF}/tectest/${userId}`,
    { id },
    config
  );

  if (resp?.status) {
    alert(`Результаты теста, ${resp.user.name} удалены`);
    dispatch(getUsers());
  } else {
    alert(`Что то не так - ${resp ? resp.message : 'сервер недоступен'}`);
  }
};
