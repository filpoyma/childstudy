// REDUCERS
import { actionTypes } from './types';

const InitState = {
  isAudioInProgress: false,
  isAudioEnd: false,
  playedTime: 0,
};

export const tectest = (state = InitState, action) => {
  switch (action.type) {
    case actionTypes.AUDIOSTART:
      return { ...state, isAudioInProgress: true, isAudioEnd: false };
    case actionTypes.AUDIOENDED:
      return {
        ...state,
        isAudioInProgress: false,
        isAudioEnd: true,
        playedTime: 0,
      };
    case actionTypes.AUDIOPLAUEDTIME:
      return { ...state, playedTime: action.payload };
    default:
      return state;
  }
};
