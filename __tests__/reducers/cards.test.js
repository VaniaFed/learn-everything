import C from '../../src/public/constants'
import deepFreeze from 'deep-freeze'
import { cards } from '../../src/public/store/reducers'

describe('cards Reducers', () => {
  const state = [
    {
      id: 0,
      deckId: 0,
      question: 'Question 1',
      answer: 'Answer 1',
      datePrevRevise: '2019.05.15',
      dateNextRevise: '2019.05.16'
    },
    {
      id: 1,
      deckId: 0,
      question: 'Question 2',
      answer: 'Answer 2',
      datePrevRevise: '2019.05.15',
      dateNextRevise: '2019.05.22'
    },
    {
      id: 3,
      deckId: 1,
      question: 'Question 3',
      answer: 'Answer 3',
      datePrevRevise: '2019.05.21',
      dateNextRevise: '2019.05.22'
    }
  ]
  deepFreeze(state)

  it(`${C.ADD_CARD} success`, () => {
    const action = {
      type: C.ADD_CARD,
      id: 2,
      deckId: 0,
      question: 'Question 3',
      answer: 'Answer 3',
      datePrevRevise: '2019.05.15',
      dateNextRevise: '2019.05.15'
    }
    deepFreeze(action)
    const result = cards(state, action)
    expect(result)
      .toEqual([
        ...state,
        {
          id: 2,
          deckId: 0,
          question: 'Question 3',
          answer: 'Answer 3',
          datePrevRevise: '2019.05.15',
          dateNextRevise: '2019.05.15'
        }
      ])
  })

  it(`${C.REMOVE_CARD} success`, () => {
    const action = {
      type: C.REMOVE_CARD,
      id: 1
    }
    deepFreeze(action)
    const result = cards(state, action)
    expect(result)
      .toEqual([
        state[0],
        state[2]
      ])
  })

  it(`${C.CHANGE_QUESTION}`, () => {
    const action = {
      type: C.CHANGE_QUESTION,
      id: 0,
      question: 'New question'
    }
    deepFreeze(action)
    const result = cards(state, action)
    expect(result)
      .toEqual([
        {
          ...state[0],
          question: 'New question'
        },
        state[1],
        state[2]
      ])
  })

  it(`${C.CHANGE_ANSWER}`, () => {
    const action = {
      type: C.CHANGE_ANSWER,
      id: 0,
      answer: 'New answer'
    }
    deepFreeze(action)
    const result = cards(state, action)
    expect(result)
      .toEqual([
        {
          ...state[0],
          answer: 'New answer'
        },
        state[1],
        state[2]
      ])
  })

  it(`${C.CHANGE_DATE_REVISE}`, () => {
    const action = {
      type: C.CHANGE_DATE_REVISE,
      id: 0,
      datePrevRevise: '2019.05.18',
      dateNextRevise: '2019.05.25'
    }
    deepFreeze(action)
    const result = cards(state, action)
    expect(result)
      .toEqual([
        {
          ...state[0],
          datePrevRevise: '2019.05.18',
          dateNextRevise: '2019.05.25'
        },
        state[1],
        state[2]
      ])
  })

  it(`${C.REMOVE_CARDS_BY_DECK_ID}`, () => {
    const action = {
      type: C.REMOVE_CARDS_BY_DECK_ID,
      deckId: 0
    }
    deepFreeze(action)
    const result = cards(state, action)
    expect(result)
      .toEqual([
        {
          id: 3,
          deckId: 1,
          question: 'Question 3',
          answer: 'Answer 3',
          datePrevRevise: '2019.05.21',
          dateNextRevise: '2019.05.22'
        }
      ])
  })
})
