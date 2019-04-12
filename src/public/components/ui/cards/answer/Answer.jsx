import React from 'react'
import PropTypes from 'prop-types'

import css from './answer.module.sass'

const Answer = ({ answerText = '', onChange = f => f }) => {
  const answerValue = React.createRef()
  return (
    <div className={css.answer__bg}
      onClick={() => answerValue.current.focus()} >
      <div className={css.title}>Ответ</div>
      <textarea
        className={`${css.input} ${css.no_resize}`}
        ref={answerValue}
        defaultValue={answerText}
        placeholder='Введите ответ'
        onBlur={() => {
          if (answerText !== answerValue.current.value) {
            onChange(answerValue.current.value)
          }
        }}
      />
    </div>
  )
}

Answer.propTypes = {
  onChange: PropTypes.func.isRequired,
  answerText: PropTypes.string.isRequired
}

Answer.defaultProps = {
  onChange: f => f,
  answerText: 'Ответ'
}

export default Answer
