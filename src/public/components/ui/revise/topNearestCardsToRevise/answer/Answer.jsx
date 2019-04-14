import React from 'react'
import PropTypes from 'prop-types'

import css from './answer.module.sass'

const Answer = ({ answerText = '' }) => {
  return (
    <div className={css.answer__bg}>
      <div className={css.title}>Ответ</div>
      <textarea
        className={`${css.input} ${css.no_resize}`}
        defaultValue={answerText}
        placeholder='Введите ответ'
        disabled
      />
    </div>
  )
}

Answer.propTypes = {
  answerText: PropTypes.string.isRequired
}

Answer.defaultProps = {
  answerText: 'Ответ'
}

export default Answer
