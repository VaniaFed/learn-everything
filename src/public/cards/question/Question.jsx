import React, { Component } from 'react'
import PropTypes from 'prop-types'

import css from './question.module.sass'

class Question extends Component {
  constructor (props) {
    super(props)
    this.questionValue = React.createRef()
  }

  shouldComponentUpdate (nextProps) {
    return this.props.questionText !== nextProps.questionText
  }

  render (params) {
    const { questionValue } = this
    const { questionText, onChange } = this.props
    return (
      <div
        className={css.question__bg}
        onClick={(e) => {
          questionValue.current.focus()
        }} >
        <div className={css.title}>Вопрос</div>
        <input type='text'
          className={`${css.input} ${css.no_resize}`}
          ref={questionValue}
          defaultValue={questionText}
          placeholder='Type a question'
          onMouseOut={() => {
            if (questionText !== questionValue.current.value) {
              onChange(questionValue.current.value)
            }
          }} />
      </div>
    )
  }
}

Question.propTypes = {
  questionText: PropTypes.string,
  onChange: PropTypes.func
}

Question.defaultProps = {
  questionText: '',
  onChange: f => f
}

export default Question
