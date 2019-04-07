import React from 'react'
import PropTypes from 'prop-types'

import css from './difficultyLevel.module.sass'
const DifficultyLevel = ({ onChoiceLevel = f => f, nextDates = f => f }) => {
  console.log(nextDates)
  return (
    <div className={`${css.rememberContainer__complexity} hidden`}>
      <button onClick={() => onChoiceLevel('forget')} className={`${css.complexity__item} button-hover`}>{`Забыл (>_<)`}</button>
      <button onClick={() => onChoiceLevel('difficult')} className={`${css.complexity__item} button-hover`}>Сложно ({nextDates.difficult} д.)</button>
      <button onClick={() => onChoiceLevel('normal')} className={`${css.complexity__item} button-hover`}>Нормально ({nextDates.normal} д.)</button>
      <button onClick={() => onChoiceLevel('easy')} className={`${css.complexity__item} button-hover`}>Легко ({nextDates.easy} д.)</button>
    </div>
  )
}

DifficultyLevel.propTypes = {
  nextDates: PropTypes.func,
  onChoiceLevel: PropTypes.func
}

export default DifficultyLevel
