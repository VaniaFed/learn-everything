import React from 'react'
import PropTypes from 'prop-types'

import css from './difficultyLevel.module.sass'

const DifficultyLevel = ({ onChoiceLevel = f => f, nextDates = f => f }) => {
  return (
    <div>
      {(nextDates.normal > 1)
        ? <div className={`${css.container}`}>
          <button onClick={() => onChoiceLevel('forget')} className={`${css.item} button-hover button-blue`}>{`Забыл (>_<)`}</button>
          <button onClick={() => onChoiceLevel('difficult')} className={`${css.item} button-hover button-blue`}>Сложно ({nextDates.difficult} д.)</button>
          <button onClick={() => onChoiceLevel('normal')} className={`${css.item} ${css.item_normal} button-hover button-blue`}>Нормально ({nextDates.normal} д.)</button>
          <button onClick={() => onChoiceLevel('easy')} className={`${css.item} button-hover button-blue`}>Легко ({nextDates.easy} д.)</button>
        </div>
        : <div className={`${css.container} ${css.container_two}`}>
          <button onClick={() => onChoiceLevel('forget')} className={`${css.item} button-hover button-blue`}>{`Забыл (>_<)`}</button>
          <button onClick={() => onChoiceLevel('normal')} className={`${css.item} ${css.item_normal} button-hover button-blue`}>Нормально ({nextDates.normal} д.)</button>
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
