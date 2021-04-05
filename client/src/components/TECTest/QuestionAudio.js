import React from 'react';
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';
import { useDispatch } from 'react-redux';
import {
  setAudioEndAC,
  setAudioPlayedTimeAC,
  setAudioStartAC,
} from '../../redux/tecTest/actions';

export const QuestionAudio = ({ gender, content }) => {
  const dispatch = useDispatch();
  return (
    <>
      {/*<p><b>{content}</b></p>*/}
      <AudioPlayer style={{marginBottom: '5px'}}
        autoPlay
        src={`./${gender}/audio/${content}`}
        listenInterval={400}
        onPlay={() => dispatch(setAudioStartAC())}
        onListen={(e) => dispatch(setAudioPlayedTimeAC(e.target.currentTime))}
        onEnded={() => dispatch(setAudioEndAC())}
        volume={0.7}
        customAdditionalControls={[]}
        showDownloadProgress={false}
      />
    </>
  );
};
