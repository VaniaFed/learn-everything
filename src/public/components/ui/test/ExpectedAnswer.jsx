import React from 'react'
import PropTypes from 'prop-types'

import css from './answer/answer.module.sass'

const ExpectedAnswer = ({ answer = 'Ответ', isPressedCheck = f => f }) => {
  return (
    <div className={`${css.answer__bg} ${isPressedCheck ? css.answer_without_shadow : ''}`}>
      <div className={css.title}>Ожидаемый ответ</div>
      <textarea
        className={`${css.input} ${css.no_resize}`}
        value={answer}
        disabled
      />
    </div>
  )
}

ExpectedAnswer.propTypes = {
  answer: PropTypes.string.isRequired,
  isPressedCheck: PropTypes.func.isRequired
}

export default ExpectedAnswer
