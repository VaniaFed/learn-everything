import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Answer from '../answer/Answer'
import Question from '../question/Question'

import css from './row.module.sass'

class Row extends Component {
  shouldComponentUpdate (nextProps) {
    return this.props.questionText !== nextProps.questionText ||
      this.props.answerText !== nextProps.answerText
  }

  render () {
    const { questionText, answerText } = this.props
    return (
      <div className={css.item}>
        <Question questionText={questionText} />
        <Answer answerText={answerText} />
      </div>
    )
  }
}

Row.propTypes = {
  questionText: PropTypes.string,
  answerText: PropTypes.string
}

Row.defaultProps = {
  questionText: '',
  answerText: ''
}

export default Row
