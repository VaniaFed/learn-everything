import React from 'react'
import PropTypes from 'prop-types'

import Text from '../common/text/Text'
import Deck from './Deck/Deck'
import { isTimeToRevise } from '../../../lib/time'

const DeckContainer = ({ cards, decks, onDelete }) => {
  return (
    (decks.length > 0)
      ? <div>
        {decks.map((deck, i) => {
          const currentCards = cards.filter(card => card.deckId === deck.id)
          const quantityCards = currentCards.length
          const quantityCardsToRevise = currentCards.filter(card =>
            isTimeToRevise(card.dateNextRevise)).length
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
      : <Text>У вас нет ни одной колоды. Создайте новую.</Text>
  )
}

DeckContainer.propTypes = {
  cards: PropTypes.array.isRequired,
  decks: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default DeckContainer
