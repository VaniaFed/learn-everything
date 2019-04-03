import React from 'react'
import PropTypes from 'prop-types'

import css from './difficultyLevel.module.sass'
const DifficultyLevel = ({ onChoiceLevel, differenceBetweenPrevAndNextDate }) => {
  return (
    <div className={`${css.rememberContainer__complexity} hidden`}>
      <button onClick={() => onChoiceLevel('forget')} className={`${css.complexity__item} button-hover`}>{`Забыл (>_<)`}</button>
      <button onClick={() => onChoiceLevel('difficult')} className={`${css.complexity__item} button-hover`}>Сложно (7 д.)</button>
      <button onClick={() => onChoiceLevel('normal')} className={`${css.complexity__item} button-hover`}>Нормально (21 д.)</button>
      <button onClick={() => onChoiceLevel('easy')} className={`${css.complexity__item} button-hover`}>Легко (1.5 мес)</button>
    </div>
  )
}

export default DifficultyLevel
