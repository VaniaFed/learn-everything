import React from 'react'

import css from './answer/answer.module.sass'

const ExpectedAnswer = ({ answer = 'Ответ' }) => {
  return (
    <div className={css.answer__bg}>
      <div className={css.title}>Ожидаемый ответ</div>
      <textarea
        className={`${css.input} ${css.no_resize}`}
        value={answer}
        disabled
      />
    </div>
  )
}

export default ExpectedAnswer
