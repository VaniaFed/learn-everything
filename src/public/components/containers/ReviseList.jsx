import { connect } from 'react-redux'

import Revise from '../ui/revise/Revise'
import { changeDateRevise } from '../../actions'

export const ReviseList = connect(
  state => ({
    cards: state.cards,
    decks: state.decks
  }),
  dispatch => ({
    onChangeDateRevise (id, prevDate, nextDate) {
      dispatch(changeDateRevise(id, prevDate, nextDate))
    }
  })
)(Revise)
