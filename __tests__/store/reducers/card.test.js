import C from '../../../src/public/constants'
import { card } from '../../../src/public/store/reducers'

describe('card Reducer', () => {
  it(`${C.ADD_CARD} success`, () => {
    const state = {}
    const newDeckId = 0
    const question = 'Some question'
    const answer = 'Some answer'
    const id = 0
    const action = {
      type: C.ADD_CARD,
      id,
      question,
      answer,
      datePrevRevise: '',
      dateNextRevise: '',
      deckId: newDeckId
    }
    const result = card(state, action)
    expect(result)
      .toEqual({
        id,
        question,
        answer,
        datePrevRevise: '',
        dateNextRevise: '',
        deckId: newDeckId
      })
  })

  it(`${C.CHANGE_ANSWER} success`, () => {
    const state = {
      question: 'My own question'
    }
    const question = 'Some question'
    const action = {
      type: C.CHANGE_QUESTION,
      question
    }
    const result = card(state, action)
    expect(result)
      .toEqual({
        question
      })
  })
})
