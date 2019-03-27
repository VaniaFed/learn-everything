import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import css from './cardsNav.module.sass';

const CardsNav = ({ deckId }) => {
  return (
    <div>
      <Link className={css.link} to="test">Тест</Link>
      <Link className={css.link} to="revise">Заучивание</Link>
    </div>
  )
}

export default CardsNav

CardsNav.propTypes = {
  id: PropTypes.number.isRequired,
}