import { connect } from 'react-redux'

import Decks from '../ui/decks/Decks'
import { removeDeck, addDeck, addCard, removeCardsByDeckId } from '../../actions'

const isEmpty = (obj) => {
  for (var key in obj) {
    return false
  }
  return true
}
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
    onAddDeck (deck) {
      isEmpty(deck)
        ? dispatch(addDeck())
        : dispatch(addDeck(deck.id, deck.title))
    },
    onAddCard (newDeckId, card) {
      isEmpty(card)
        ? dispatch(addCard())
        : dispatch(addCard(newDeckId, card.id, card.question, card.answer))
    }
  })
)(Decks)
