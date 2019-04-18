import React from 'react'
import PropTypes from 'prop-types'

import css from './card.module.sass'

import DifficultyLevel from './difficultyLevel/DifficultyLevel'
const Card = ({ question, answer, nextDates, isPressedCheck, onCheckAnswer, onChoiceLevel }) => {
  return (
    <div>
      <div className={css.question}>{isPressedCheck ? answer : question}</div>
      {(isPressedCheck)
        ? <DifficultyLevel onChoiceLevel={onChoiceLevel} nextDates={nextDates} />
        : <button className={`${css.check} button-hover button-blue`} onClick={onCheckAnswer}>Проверить</button>
      }
    </div>
  )
}

Card.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  nextDates: PropTypes.string.isRequired,
  isPressedCheck: PropTypes.bool.isRequired,
  onCheckAnswer: PropTypes.func.isRequired,
  onChoiceLevel: PropTypes.func.isRequired
}

Card.defaultProps = {
  question: 'Вопрос не задан',
  answer: 'Ответ не задан',
  nextDates: f => f,
  isPressedCheck: f => f,
  onCheckAnswer: f => f,
  onChoiceLevel: f => f
}

export default Card
