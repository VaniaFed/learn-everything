import React from 'react'

import css from './decks.module.sass'

import Deck from './Deck/Deck'
import Button from '../common/button/Button'
import { PropTypes } from 'prop-types'

const Decks = ({ cards, decks, onDelete, onAdd }) => {
  return (
    <div className='container'>
      <h1>Колоды</h1>
      {(decks.length > 0)
        ? <div className={css.lists}>
          {decks.map((deck, i) => {
            const currentCards = cards.filter(card => card.deckId === deck.id)
            const quantityCards = currentCards.length
            return (
              <Deck key={deck.id}
                id={deck.id}
                title={deck.title}
                quantity={quantityCards}
                onDelete={() => onDelete(deck.id)}
              />
            )
          })}
        </div>
        : null
      }
      <Button className='default-btn'
        onClick={() => onAdd()}
        content='Добавить колоду'
      />
    </div>
  )
}

export default Decks
