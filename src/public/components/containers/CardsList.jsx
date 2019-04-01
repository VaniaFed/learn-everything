import PropTypes from 'prop-types'
import React from 'react'

import Cards from '../ui/cards/Cards'
import { removeCard, addCard, renameDeck } from '../../actions'

export const CardsList = (props, { store }) => {
  const { decks, cards } = store.getState()
  const id = props.match.params.id
  return (
    <Cards decks={decks}
      cards={cards}
      id={id}
      onAdd={
        (deckId) => store.dispatch(addCard(deckId))
      }
      onDelete={
        (cardId) => store.dispatch(removeCard(cardId))
      }
      onRenameDeck={
        (id, newName) => store.dispatch(renameDeck(id, newName))
      }
    />
  )
}

CardsList.contextTypes = {
  store: PropTypes.object.isRequired
}
