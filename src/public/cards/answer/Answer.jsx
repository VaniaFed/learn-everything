import React from 'react';
import PropTypes from 'prop-types';

import css from './answer.module.sass';

const Answer = ({ onChange=f=>f }) => {
  const userAnswer = React.createRef();
  return (
    <div className={css.answer__bg}>
      <div className={css.title}>Ответ</div>
      <textarea
        className={`${css.input} ${css.no_resize}`}
        ref={userAnswer}
        onChange={() => onChange(userAnswer.current.value)}
        placeholder="Type an answer..."
      />
    </div>
  )
}

Answer.propTypes = {
  onChange: PropTypes.func,
}

export default Answer;
//