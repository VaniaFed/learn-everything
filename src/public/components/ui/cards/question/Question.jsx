import React from 'react'
import PropTypes from 'prop-types'

import css from './question.module.sass'

const Question = ({ children, onChange }) => {
  const questionValue = React.createRef()
  return (
    <div
      className={css.question__bg}
      onClick={() => questionValue.current.focus()} >
      <div className={css.title}>Вопрос</div>
      <div
        className={`${css.input} ${css.no_resize}`}
        ref={questionValue}
        contentEditable='true'
        onBlur={onChange}
      >
        {children}
      </div>
    </div>
  )
}

Question.propTypes = {
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

Question.defaultProps = {
  onChange: f => f
}

export default Question
