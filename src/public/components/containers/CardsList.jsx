import { connect } from 'react-redux'
import Cards from '../ui/cards/Cards'
import { addCard, removeCard, renameDeck, changeQuestion, changeAnswer } from '../../actions'

export const CardsList = connect(
  state => ({
    cards: state.cards,
    decks: state.decks
  }),
  dispatch => ({
    onAdd (deckId) {
      dispatch(addCard(deckId))
    },

    onDelete (id) {
      dispatch(removeCard(id))
    },

    onChangeQuestion (id, newQuestion) {
      dispatch(changeQuestion(id, newQuestion))
    },

    onChangeAnswer (id, newAnswer) {
      dispatch(changeAnswer(id, newAnswer))
    },

    onRenameDeck (id, title) {
      dispatch(renameDeck(id, title))
    }
  })
)(Cards)
