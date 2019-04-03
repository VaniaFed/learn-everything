import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Answer from '../answer/Answer'
import Question from '../question/Question'

import css from './row.module.sass'
import ExpectedAnswer from '../ExpectedAnswer'

class Row extends Component {
  shouldComponentUpdate (nextProps) {
    return this.props.questionText !== nextProps.questionText ||
      this.props.isPressedCheck !== nextProps.isPressedCheck ||
      this.props.userAnswer !== nextProps.userAnswer
  }

  render () {
    const { questionText, answerText, userAnswer, isPressedCheck, onChangeAnswer, isCorrect } = this.props
    return (
      <div className={css.item}>
        <Question questionText={questionText} />
        {isPressedCheck
          ? (
            <div className={`${css.row_answers} ${isCorrect ? css.correct : css.incorrect}`}>
              <ExpectedAnswer answer={answerText} isCorrect={isCorrect} isPressedCheck={isPressedCheck} />
              <Answer finallyUserAnswer={userAnswer} onChangeAnswer={onChangeAnswer} isPressedCheck={isPressedCheck} />
            </div>)
          : <Answer onChangeAnswer={onChangeAnswer} isPressedCheck={isPressedCheck} />
        }
      </div>
    )
  }
}

Row.propTypes = {
  questionText: PropTypes.string,
  onDelete: PropTypes.func
}

Row.defaultProps = {
  questionText: 'empty question',
  onDelete: f => f
}

export default Row
