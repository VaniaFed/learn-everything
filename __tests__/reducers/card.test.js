import C from '../../src/public/constants'
import { card } from '../../src/public/store/reducers'
import deepFreeze from 'deep-freeze'

describe('card Reducer', () => {
  it(`${C.ADD_CARD} success`, () => {
    const state = {}
    const action = {
      type: C.ADD_CARD,
      id: 0,
      question: 'Some answer',
      answer: 'Some question',
      datePrevRevise: '',
      dateNextRevise: '',
      deckId: 0
    }
    deepFreeze(state)
    deepFreeze(action)
    const result = card(state, action)
    expect(result)
      .toEqual({
        id: 0,
        question: 'Some answer',
        answer: 'Some question',
        datePrevRevise: '',
        dateNextRevise: '',
        deckId: 0
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
    deepFreeze(state)
    deepFreeze(action)
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
    deepFreeze(state)
    deepFreeze(action)
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
    deepFreeze(state)
    deepFreeze(action)
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
