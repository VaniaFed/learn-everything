import React from 'react';
import PropTypes from 'prop-types';

import css from './question.module.sass';

const Question = ({ questionText='' }) => (
  <div className={css.question__bg}>
    <div className={css.title}>Вопрос</div> 
    <input type="text"
      className={`${css.input} ${css.no_resize}`}
      defaultValue={questionText}
      placeholder="Type a question"
    />
  </div>
);
Question.propTypes = {
  questionText: PropTypes.string,
}

export default Question;
