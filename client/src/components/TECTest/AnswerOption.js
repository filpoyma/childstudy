import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ANSWER } from '../../api/consts';
import { useSelector } from 'react-redux';
import { Answer } from './Answer';
import { dinamicBackLight } from '../../utils/dinamicBacklight';

const AnswerOption = ({
  timeline,
  index,
  isDisabled: propsIsDisabled,
  answersAmount,
  answerType,
  answer,
  onAnswerSelected,
  gender,
  answerContent,
  isChecked,
}) => {
  const playedTime = useSelector((state) => state.tectest.playedTime);
  const isAudioEnd = useSelector((state) => state.tectest.isAudioEnd);

  //***auto scroll****
  const imageEndRef = useRef(null);
  const isPlayTime3 = playedTime > 3;
  useEffect(() => {
    isPlayTime3 && imageEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [isPlayTime3]);
  //*********************

  const styleOpt = {
    className: 'answerOption',
    isDisabled: true,
  };

  dinamicBackLight(
    timeline,
    playedTime,
    isAudioEnd,
    index,
    answersAmount,
    propsIsDisabled,
    styleOpt
  );

  if (isChecked) styleOpt.className += ' answerOptionSelected';

  return (
    <>
      {answerType !== ANSWER.forward && (
        <Answer
          answerType={answerType}
          answer={answer}
          index={index}
          isDisabled={styleOpt.isDisabled}
          onAnswerSelected={onAnswerSelected}
          gender={gender}
          answerContent={answerContent}
          className={styleOpt.className}
        />
      )}
      <div ref={imageEndRef} />
    </>
  );
};

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  timeline: PropTypes.array,
  index: PropTypes.number,
};

export default AnswerOption;
