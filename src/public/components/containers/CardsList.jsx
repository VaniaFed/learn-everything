import PropTypes from 'prop-types'
import React from 'react'

import Cards from '../ui/cards/Cards'
import { removeCard, addCard } from '../../actions'

export const CardsList = (props, { store }) => {
  const { decks, cards } = store.getState()
  const id = props.match.params.id
  return (
    <Cards decks={decks}
      cards={cards}
      id={id}
      enDelete={
        (cardId) => store.dispatch(removeCard(cardId))
      }
      onAdd={
        (deckId) => store.dispatch(addCard(deckId))
      }
    />
  )
}

CardsList.contextTypes = {
  store: PropTypes.object.isRequired
}
