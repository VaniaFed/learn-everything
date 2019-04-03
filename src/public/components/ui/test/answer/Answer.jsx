import React from 'react'
import PropTypes from 'prop-types'

import css from './answer.module.sass'

const Answer = ({ onChangeAnswer = f => f, isPressedCheck, finallyUserAnswer }) => {
  const userAnswer = React.createRef()
  return (
    <div className={css.answer__bg}>
      <div className={css.title}>{isPressedCheck ? 'Ваш ответ' : 'Ответ'}</div>
      <textarea
        className={`${css.input} ${css.no_resize}`}
        ref={userAnswer}
        defaultValue={finallyUserAnswer}
        onChange={() => onChangeAnswer(userAnswer.current.value)}
        placeholder={!isPressedCheck ? 'Type an answer...' : 'You didn\'t answer this question'}
        disabled={isPressedCheck ? 'disabled' : null}
      />
    </div>
  )
}

Answer.propTypes = {
  onChange: PropTypes.func
}

export default Answer
