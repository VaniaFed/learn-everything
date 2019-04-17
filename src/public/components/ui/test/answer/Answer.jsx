import React from 'react'
import PropTypes from 'prop-types'

import css from './answer.module.sass'

const Answer = ({ onChangeAnswer = f => f, isPressedCheck, finallyUserAnswer }) => {
  const userAnswer = React.createRef()
  return (
    <div className={`${css.answer__bg} ${isPressedCheck ? css.answer_without_shadow : ''}`}
      onClick={(e) => userAnswer.current.focus()}>
      <div className={css.title}>{isPressedCheck ? 'Ваш ответ' : 'Ответ'}</div>
      <textarea
        className={`${css.input} ${css.no_resize}`}
        ref={userAnswer}
        defaultValue={finallyUserAnswer}
        onChange={() => onChangeAnswer(userAnswer.current.value)}
        placeholder={!isPressedCheck ? 'Введите ответ...' : 'Вы не ответили на этот вопрос'}
        disabled={isPressedCheck ? 'disabled' : null}
      />
    </div>
  )
}

Answer.propTypes = {
  onChangeAnswer: PropTypes.func.isRequired,
  isPressedCheck: PropTypes.bool.isRequired,
  finallyUserAnswer: PropTypes.string
}

export default Answer
