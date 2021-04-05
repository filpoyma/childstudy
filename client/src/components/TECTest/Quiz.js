import React from 'react';
import PropTypes from 'prop-types';

import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import { QuestionAudio } from './QuestionAudio';
import Delayed from './Delayed';
import { ButtonFwd } from './ButtonFwd';
import { ANSWER } from '../../api/consts';

function Quiz(props) {
  const [answerData, setAnswerData] = React.useState({ value: '', i: null });

  return (
    //<TransitionZ in={true}>
    <div key={props.questionId} style={{ textAlign: 'center' }}>
      <QuestionCount
        counter={props.questionId}
        total={props.questionTotal}
        gender={props.gender}
      />
      <QuestionAudio content={props.question.audio} gender={props.gender} />
      {props.question.content && (
        <Question content={props.question.content} gender={props.gender} />
      )}
      <Delayed
        waitBeforeShow={
          (props.question.delay && props.question.delay * 1000) || 100
        }
      >
        {/*<TransitionZ in={true}>*/}
        <ul className='answerOptions'>
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
        <Delayed waitBeforeShow={200}>
          <ButtonFwd
            isDisabled={
              answerData.value === '' &&
              !props.answerOptions.some((el) => el.type === ANSWER.forward)
            }
            onAnswerSelected={() => {
              props.onAnswerSelected(answerData.value, answerData.i);
              setAnswerData({ value: '', i: null });
            }}
          />
        </Delayed>
        {/*</TransitionZ>*/}
      </Delayed>
    </div>
    // </TransitionZ>
  );

  function renderAnswerOptions(key, index) {
    return (
      <AnswerOption
        key={key.content + index.toString()}
        index={index}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        answersAmount={props.answerOptions.length}
        isDisabled={key.disabled}
        questionId={props.questionId}
        onAnswerSelected={(value, i) => {
          setAnswerData({ value, i });
        }}
        gender={props.gender}
        timeline={props.question.timeline}
        isChecked={index === answerData.i}
      />
    );
  }
}

Quiz.defaultProps = {
  question: {
    content: '',
    audio: '',
  },
};

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.object.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Quiz;
