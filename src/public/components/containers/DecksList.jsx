import { connect } from 'react-redux'

import Decks from '../ui/decks/Decks'
import { removeDeck, addDeck, removeCardsByDeckId } from '../../actions'

export const DecksList = connect(
  state => ({
    cards: state.cards,
    decks: state.decks
  }),
  dispatch => ({
    onDelete (deckId) {
      dispatch(removeDeck(deckId))
      dispatch(removeCardsByDeckId(deckId))
    },
    onAdd () {
      dispatch(addDeck())
    }
  })
)(Decks)
