import React from 'react'
import PropTypes from 'prop-types'

import css from './difficultyLevel.module.sass'
const DifficultyLevel = ({ prevQuantityDay }) => {
  return (
    <div className={`${css.rememberContainer__complexity} hidden`}>
      <button className={`${css.complexity__item} button-hover`}>{`Забыл (>_<)`}</button>
      <button className={`${css.complexity__item} button-hover`}>Сложно (7 д.)</button>
      <button className={`${css.complexity__item} button-hover`}>Нормально (21 д.)</button>
      <button className={`${css.complexity__item} button-hover`}>Легко (1.5 мес)</button>
    </div>
  )
}

export default DifficultyLevel
