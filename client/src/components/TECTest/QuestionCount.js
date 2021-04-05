import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
  return (
    <div className='questionCount'>
      {/*Тест для {props.gender === 'boys' ? ('мальчиков ') : ('девочек ')}*/}
      Страница <span>{props.counter}</span> из <span>{props.total}</span>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
