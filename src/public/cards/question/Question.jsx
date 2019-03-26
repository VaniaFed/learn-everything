import React from 'react';
import PropTypes from 'prop-types';

import css from './question.module.sass';

const Question = ({ questionText='', onChange=f=>f }) => {
  const questionValue = React.createRef();
  return (
    <div className={css.question__bg}>
      <div className={css.title}>Вопрос</div> 
      <input type="text"
        className={`${css.input} ${css.no_resize}`}
        ref={questionValue}
        defaultValue={questionText}
        placeholder="Type a question"
        onBlur={() => {
          onChange(questionValue.current.value)
        }}
      />
    </div>
  );
};

Question.propTypes = {
  questionText: PropTypes.string,
  onChange: PropTypes.func,
}

export default Question;
