import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import css from './cardsNav.module.sass'

const CardsNav = ({ deckId = -1 }) => {
  return (
    <div>
      <Link className={css.link} to={`/test/${deckId}`}>Тест</Link>
      <Link className={css.link} to={`/revise/${deckId}`}>Заучивание</Link>
    </div>
  )
}

export default CardsNav

CardsNav.propTypes = {
  deckId: PropTypes.string.isRequired
}
