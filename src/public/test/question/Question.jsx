import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ questionText='' }) => (
  <div className="item__bg">
    <div className="item__title">Вопрос</div> 
    <input type="text"
      className="test__input test__question"
      disabled 
      value={questionText}
    />
  </div>
);
Question.propTypes = {
  questionText: PropTypes.string,
}

export default Question;
