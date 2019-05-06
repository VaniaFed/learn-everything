import React from 'react'
import PropTypes from 'prop-types'

import css from './question.module.sass'

const Question = ({ children, onChange = f => f }) => {
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
        onBlur={(e) => {
          if (children !== questionValue.current.value || e.target !== questionValue.current) {
            onChange(questionValue.current.innerText)
          }
        }}
      >
        {children}
      </div>
    </div>
  )
}

Question.propTypes = {
  children: PropTypes.element.isRequired,
  onChange: PropTypes.func
}

Question.defaultProps = {
  questionText: 'Вопрос',
  onChange: f => f
}

export default Question
