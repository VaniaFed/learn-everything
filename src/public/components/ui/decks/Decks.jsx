import React from 'react'

import Deck from './Deck/Deck'
import Button from '../common/button/Button'
import { PropTypes } from 'prop-types'
import Title2 from '../common/title2/Title2'
import { isTimeToRevise } from '../../../lib/time'
import NoOneCards from '../common/noOneCards/NoOneCards';

const Decks = ({ cards = [], decks = [], onDelete = f => f, onAdd = f => f }) => {
  return (
    <div className='container'>
      <Title2 content='Колоды' />
      {(decks.length > 0)
        ? <div>
          {decks.map((deck, i) => {
            const currentCards = cards.filter(card => card.deckId === deck.id)
            const quantityCards = currentCards.length
            const quantityCardsToRevise = currentCards.filter(card =>
              isTimeToRevise(card.dateNextRevise)).length
            console.log('quantity to revise: ', quantityCardsToRevise)
            return (
              <Deck key={deck.id}
                id={deck.id}
                title={deck.title}
                quantity={quantityCards}
                quantityCardsToRevise={quantityCardsToRevise}
                onDelete={() => onDelete(deck.id)}
              />
            )
          })}
        </div>
        : <Title2 content='У вас нет ни одной карточки. Создайте новую.' />
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
