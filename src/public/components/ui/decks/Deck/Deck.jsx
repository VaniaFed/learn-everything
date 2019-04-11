import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import css from './deck.module.sass'

class Deck extends Component {
  shouldComponentUpdate (nextProps) {
    return (this.props.name !== nextProps.name ||
            this.props.id !== nextProps.id ||
            this.props.quantity !== nextProps.quantity ||
            this.props.title !== nextProps.title ||
            this.props.quantityCardsToRevise !== nextProps.quantityCardsToRevise
    )
  }

  render () {
    const { id, quantity, quantityCardsToRevise, title, onDelete } = this.props
    const formatWordCards = quantity => {
      if (quantity % 10 === 1) {
        return 'карточка'
      }
      if ((quantity === 0) || (quantity > 4 && quantity < 21)) {
        return 'карточек'
      }
      if (quantity > 21 || quantity > 1) {
        return 'карточки'
      }
    }
    return (
      <div className={css.item}>
        <Link to={`/deck/${id}`} className={`${css.link} button-hover`}>
          <div className={css.quantity}>{quantity} {`${formatWordCards(quantity)}, к повторению: ${quantityCardsToRevise}`}</div>
          <div className='card__name'>{title}</div>
        </Link>
        <a href='#' className={`${css.delete} button-hover`}
          onClick={() => {
            onDelete()
          }}>
        Удалить</a>
      </div>
    )
  }
}

Deck.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  name: PropTypes.string,
  onDelete: PropTypes.func
}

Deck.defaultTypes = {
  id: -1,
  quantity: 0,
  name: 'list',
  onDelete: f => f
}

export default Deck
