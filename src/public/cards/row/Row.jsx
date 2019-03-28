import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Answer from '../answer/Answer'
import Question from '../question/Question'

import css from './row.module.sass'

class Row extends Component {
  constructor (props) {
    super (props)
  }

  shouldComponentUpdate (nextProps) {
    return this.props.store.decks !== nextProps.store.decks
  }

  render () {
    const { questionText, answerText, onChangeQuestion, onChangeAnswer, onDelete } = this.props
    return (
      <div className={css.item}>
        <svg className={css.delete} onClick={onDelete} viewBox='0 0 64 64' width='15px'>
          <path fill='#1D1D1B' d='M29 31.8L.5 60A2 2 0 1 0 3.5 63L32 34.4 60.5 63a2 2 0 0 0 2.9 0c.8-.8.8-2.1 0-2.9L35 31.8 63.4 3.4A2 2 0 1 0 60.6.6L32 29 3.4.6A2 2 0 0 0 .6 3.4l28.3 28.4z'/>
        </svg>
        <Question questionText={questionText} onChange={onChangeQuestion} />
        <Answer answerText={answerText} onChange={onChangeAnswer} />
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
