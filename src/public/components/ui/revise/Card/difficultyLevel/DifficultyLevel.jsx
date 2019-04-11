import React from 'react'
import PropTypes from 'prop-types'

import css from './difficultyLevel.module.sass'
const DifficultyLevel = ({ onChoiceLevel = f => f, nextDates = f => f }) => {
  return (
    <div>
      {(nextDates.noraml === 0)
        ? <div className={`${css.container} hidden`} >
          <button onClick={() => onChoiceLevel('forget')} className={`${css.item} button-hover`}>{`Забыл (>_<)`}</button>
          <button onClick={() => onChoiceLevel('difficult')} className={`${css.item} button-hover`}>Сложно ({nextDates.difficult} д.)</button>
          <button onClick={() => onChoiceLevel('normal')} className={`${css.item} button-hover`}>Нормально ({nextDates.normal} д.)</button>
          <button onClick={() => onChoiceLevel('easy')} className={`${css.item} button-hover`}>Легко ({nextDates.easy} д.)</button>
        </div>
        : <div className={`${css.container} ${css.container_two} hidden`} >
          <button onClick={() => onChoiceLevel('forget')} className={`${css.item} ${css.item_two} button-hover`}>{`Забыл (>_<)`}</button>
          <button onClick={() => onChoiceLevel('normal')} className={`${css.item} ${css.item_two} button-hover`}>Нормально ({nextDates.normal} д.)</button>
        </div>
      }
    </div>
  )
}

DifficultyLevel.propTypes = {
  nextDates: PropTypes.func,
  onChoiceLevel: PropTypes.func
}

export default DifficultyLevel
