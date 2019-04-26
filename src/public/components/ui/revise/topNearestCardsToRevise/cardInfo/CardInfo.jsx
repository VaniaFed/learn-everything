import React from 'react'
import PropTypes from 'prop-types'

import { datesDifference, calcAndGetNextDates } from '../../../../../lib/time'

import css from './cardInfo.module.sass'

const CardInfo = ({ prevDate = '', nextDate = '' }) => {
  return (
    <div className={css.container}>
      <p className={css.item}>{`Предыдущая дата: ${prevDate}`}</p>
      <p className={css.item}>{`Следующая дата: ${nextDate}`}</p>
      <p className={css.item}>{`Интервал: ${datesDifference(prevDate, nextDate)} д.`}</p>
      <p className={css.item}>{`Следущий интервал: ${calcAndGetNextDates(prevDate, nextDate).normal} д.`}</p>
    </div>
  )
}

CardInfo.propTypes = {
  prevDate: PropTypes.string.isRequired,
  nextDate: PropTypes.string.isRequired
}

export default CardInfo
