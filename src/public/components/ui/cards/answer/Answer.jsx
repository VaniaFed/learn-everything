import React from 'react'
import PropTypes from 'prop-types'

import css from './answer.module.sass'

const Answer = ({ children, onChange = f => f }) => {
  const answerValue = React.createRef()
  return (
    <div className={css.answer__bg}
      onClick={() => answerValue.current.focus()} >
      <div className={css.title}>Ответ</div>
      <textarea
        className={`${css.input} ${css.no_resize}`}
        ref={answerValue}
        defaultValue={children}
        placeholder='Введите ответ'
        onBlur={() => {
          if (children !== answerValue.current.value) {
            onChange(answerValue.current.value)
          }
        }}
      />
    </div>
  )
}

Answer.propTypes = {
  children: PropTypes.element.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Answer
