import PropTypes from 'prop-types'
import React from 'react'

import Decks from '../ui/decks/Decks'
import { removeDeck, addDeck } from '../../actions'

export const DecksList = (props, { store }) => {
  const { decks, cards } = store.getState()
  console.log('decks: ', decks)
  console.log('cards: ', cards)
  return (
    <Decks decks={decks}
      cards={cards}
      onDelete={
        (deckId) => store.dispatch(removeDeck(deckId))
      }
      onAdd={
        () => store.dispatch(addDeck())
      }
    />
  )
}

DecksList.contextTypes = {
  store: PropTypes.object.isRequired
}
