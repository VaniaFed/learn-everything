import React from 'react'

import Deck from './Deck/Deck'
import Button from '../common/button/Button'
import { PropTypes } from 'prop-types'
import Title2 from '../common/title2/Title2';

const Decks = ({ cards = [], decks = [], onDelete = f => f, onAdd = f => f }) => {
  return (
    <div className='container'>
      <Title2 content='Колоды' />
      {(decks.length > 0)
        ? <div>
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
      <Button className='default-btn default-btn-margin'
        onClick={() => onAdd()}
        content='Добавить колоду'
      />
    </div>
  )
}

Decks.propTypes = {
  cards: PropTypes.array,
  decks: PropTypes.array,
  onDelete: PropTypes.func,
  onAdd: PropTypes.func
}

export default Decks
