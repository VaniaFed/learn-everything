import { connect } from 'react-redux'

import Decks from '../ui/decks/Decks'
import { removeDeck, addDeck } from '../../actions'

export const DecksList = connect(
  state => ({
    decks: state.decks,
    cards: state.cards
  }),
  dispatch => ({
    onDelete (deckId) {
      dispatch(removeDeck(deckId))
    },
    onAdd () {
      dispatch(addDeck())
    }
  })
)(Decks)
