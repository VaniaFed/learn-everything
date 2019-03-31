import React, { Component } from 'react'
import PropTypes from 'prop-types'

import css from './answer.module.sass'

class Answer extends Component {
  constructor (props) {
    super(props)
    this.answerValue = React.createRef()
  }
  render () {
    const { onChange, answerText } = this.props
    const { answerValue } = this
    return (
      <div className={css.answer__bg}
        onClick={(e) => {
          console.log(e.target)
          answerValue.current.focus()
        }}
      >
        <div className={css.title}>Ответ</div>
        <textarea
          className={`${css.input} ${css.no_resize}`}
          ref={answerValue}
          defaultValue={answerText}
          placeholder='Type an answer...'
          onBlur={() => {
            if (answerText !== answerValue.current.value) {
              onChange(answerValue.current.value)
            }
          }}
        />
      </div>
    )
  }
}

Answer.propTypes = {
  onChange: PropTypes.func
}
Answer.defaultProps = {
  onChange: f => f
}

export default Answer
