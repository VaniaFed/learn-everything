import { connect } from 'react-redux'

import Test from '../ui/test/Test'

export const TestList = connect(
  state => ({
    cards: state.cards,
    decks: state.decks
  }),
  null
)(Test)
