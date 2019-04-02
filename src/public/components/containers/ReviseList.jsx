import { connect } from 'react-redux'

import Revise from '../ui/revise/Revise'

export const ReviseList = connect(
  state => ({
    cards: state.cards,
    decks: state.decks
  }),
  null
)(Revise)
