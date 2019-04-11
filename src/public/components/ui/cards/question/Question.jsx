import React from 'react'
import PropTypes from 'prop-types'

import css from './question.module.sass'

const Question = ({ questionText, onChange }) => {
  const questionValue = React.createRef()
  return (
    <div
      className={css.question__bg}
      onClick={() => questionValue.current.focus()} >
      <div className={css.title}>Вопрос</div>
      <textarea
        className={`${css.input} ${css.no_resize}`}
        ref={questionValue}
        defaultValue={questionText}
        placeholder='Type a question'
        onBlur={(e) => {
          if (questionText !== questionValue.current.value || e.target !== questionValue.current) {
            onChange(questionValue.current.value)
          }
        }} />
    </div>
  )
}

Question.propTypes = {
  questionText: PropTypes.string,
  onChange: PropTypes.func
}

Question.defaultProps = {
  questionText: 'Вопрос',
  onChange: f => f
}

export default Question
