import { connect } from 'react-redux'

import Decks from '../ui/decks/Decks'
import { removeDeck, addDeck } from '../../actions'

export const DecksList = connect(
  state => ({
    cards: state.cards,
    decks: state.decks
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
