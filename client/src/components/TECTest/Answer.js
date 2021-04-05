import React from 'react';

export const Answer = ({
  className,
  answerType,
  answer,
  onAnswerSelected,
  index,
  answerContent,
  gender,
  isDisabled,
}) => {
  return (
    <li className={className}>
      <input
        type='radio'
        className='radioCustomButton'
        name="radioBtns"
        // checked={answerType === answer}
        id={answerType + index.toString()}
        value={answerType}
        disabled={isDisabled}
        onChange={(e) => {onAnswerSelected(e.currentTarget.value, index)}}
      />
      <label
        className='radioCustomLabel'
        htmlFor={answerType + index.toString()}
      >
        <div className='imgAnswercontainer'>
          <img
            className='imgAnswer'
            src={`./${gender}/img/${answerContent}`}
            alt={answerType}
          />
        </div>
      </label>
    </li>
  );
};
