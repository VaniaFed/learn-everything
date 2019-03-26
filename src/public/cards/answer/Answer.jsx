import React from 'react';
import PropTypes from 'prop-types';

import css from './answer.module.sass';

const Answer = ({ answerText='', onChange=f=>f }) => {
  const answerValue = React.createRef();
  return (
    <div className={css.answer__bg}>
      <div className={css.title}>Ответ</div>
      <textarea
        className={`${css.input} ${css.no_resize}`}
        ref={answerValue}
        defaultValue={answerText}
        placeholder="Type an answer..."
        onBlur={() => {
          onChange(answerValue.current.value)
        }}
      />
    </div>
  )
}

Answer.propTypes = {
  onChange: PropTypes.func,
}

export default Answer;
//