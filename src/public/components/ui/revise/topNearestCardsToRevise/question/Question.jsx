import React from 'react'
import PropTypes from 'prop-types'

import css from './question.module.sass'

const Question = ({ questionText = '' }) => {
  return (
    <div className={css.question__bg}>
      <div className={css.title}>Вопрос</div>
      <textarea
        className={`${css.input} ${css.no_resize}`}
        defaultValue={questionText}
        placeholder='Введите вопрос'
        disabled
      />
    </div>
  )
}

Question.propTypes = {
  questionText: PropTypes.string
}

Question.defaultProps = {
  questionText: 'Вопрос'
}

export default Question
