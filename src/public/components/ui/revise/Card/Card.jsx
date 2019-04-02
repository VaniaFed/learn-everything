import React from 'react'
import PropTypes from 'prop-types'

import css from './card.module.sass'
const Card = ({ question }) => {
  return (
    <div>
      <div className={css.remember__question}>{question}</div>
      <button className={`${css.remember__check} button-hover`}>Проверить</button>
      <div className={`${css.rememberContainer__complexity} hidden`}>
        <button className={`${css.complexity__item} button-hover`}>Забыл</button>
        <button className={`${css.complexity__item} button-hover`}>Сложно</button>
        <button className={`${css.complexity__item} button-hover`}>Нормально</button>
        <button className={`${css.complexity__item} button-hover`}>Легко</button>
      </div>
    </div>
  )
}

export default Card
