import React from 'react'
import PropTypes from 'prop-types'

import css from './card.module.sass'

import DifficultyLevel from './difficultyLevel/DifficultyLevel'
const Card = ({ question, answer, onCheckAnswer = f => f, onChoiceLevel, isPressedCheck }) => {
  return (
    <div>
      <div className={css.remember__question}>{isPressedCheck ? answer : question}</div>
      {(isPressedCheck)
        ? <DifficultyLevel onChoiceLevel={onChoiceLevel} />
        : <button className={`${css.remember__check} button-hover`} onClick={onCheckAnswer}>Проверить</button>
      }
    </div>
  )
}

export default Card
