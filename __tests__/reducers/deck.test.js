import C from '../../src/public/constants'
import deepFreeze from 'deep-freeze'
import { deck } from '../../src/public/store/reducers'

describe('Deck Reducer', () => {
  it(`${C.ADD_DECK} success`, () => {
    const state = {}
    const action = {
      type: C.ADD_DECK,
      id: 0,
      title: 'First deck'
    }
    deepFreeze(state)
    deepFreeze(action)
    const result = deck(state, action)
    expect(result)
      .toEqual({
        id: 0,
        title: 'First deck'
      })
  })

  it(`${C.REMOVE_DECK} success`, () => {
    const state = {
      id: 0,
      title: 'Some deck'
    }
    const action = {
      type: C.RENAME_DECK,
      id: 0,
      title: 'New deck name'
    }
    deepFreeze(state)
    deepFreeze(action)
    const result = deck(state, action)
    expect(result)
      .toEqual({
        id: 0,
        title: 'New deck name'
      }) 
  })
})