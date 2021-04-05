import React from 'react';
import PropTypes from 'prop-types';

function Question({ content, gender }) {
  return (
    <div className='question'>
      <img className='imgQuestion' src={`./${gender}/img/${content}`} alt='' />
    </div>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Question;
