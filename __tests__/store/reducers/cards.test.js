import C from '../../../src/public/constants'
import deepFreeze from 'deep-freeze'
import { cards } from '../../../src/public/store/reducers'

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
        state[0]
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
        state[1]
      ])
  })
})
