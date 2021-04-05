import React from 'react';
import {Button} from "semantic-ui-react";
import {useSelector} from "react-redux";

export const ButtonFwd = ({onAnswerSelected, isDisabled }) => {
  const isAudioEnd = useSelector((state) => state.tectest.isAudioEnd);
  return <Button style={{marginTop: '15px' }}
    circular
    icon='arrow right'
    color='teal'
    size='huge'
    disabled={!isAudioEnd || isDisabled}
    onClick={() => {isAudioEnd && onAnswerSelected()}}
  />
};
