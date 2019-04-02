import React from 'react'
import PropTypes from 'prop-types'

import css from './card.module.sass'

import DifficultyLevel from './difficultyLevel/DifficultyLevel';
const Card = ({ question, answer, checkAnswer = f => f, isAnswered }) => {
  return (
    <div>
      <div className={css.remember__question}>{isAnswered ? answer : question}</div>
      {(isAnswered)
        ? <DifficultyLevel prevQuantityDay={9}/>
        : <button className={`${css.remember__check} button-hover`} onClick={checkAnswer} >Проверить</button>
      }
    </div>
  )
}

export default Card
