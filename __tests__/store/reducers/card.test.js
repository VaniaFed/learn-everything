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

  it(`${C.CHANGE_QUESTION} success`, () => {
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

  it(`${C.CHANGE_ANSWER} success`, () => {
    const state = {
      answer: 'My own answer'
    }
    const action = {
      type: C.CHANGE_ANSWER,
      answer: 'Some answer'
    }
    const result = card(state, action)
    expect(result)
      .toEqual({
        answer: 'Some answer'
      })
  })

  it(`${C.CHANGE_DATE_REVISE}`, () => {
    const state = {
      id: 0,
      deckId: 0,
      question: 'questin',
      answer: 'answer',
      datePrevRevise: '2019.05.20',
      dateNextRevise: '2019.05.21'
    }
    const action = {
      type: C.CHANGE_DATE_REVISE,
      datePrevRevise: '2019.05.21',
      dateNextRevise: '2019.05.24'
    }
    const result = card(state, action)
    expect(result)
      .toEqual({
        id: 0,
        deckId: 0,
        question: 'questin',
        answer: 'answer',
        datePrevRevise: '2019.05.21',
        dateNextRevise: '2019.05.24'
      })
  })
})
