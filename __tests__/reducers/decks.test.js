import C from '../../src/public/constants'
import deepFreeze from 'deep-freeze'
import { decks } from '../../src/public/store/reducers'

describe('decks Reducer', () => {
  it(`${C.ADD_DECK} success`, () => {
    const state = [
      {
        id: 0,
        title: 'first deck'
      },
      {
        id: 1,
        title: 'second deck',
      },
      {
        id: 2,
        title: 'third deck'
      }
    ]
    const action = {
      type: C.ADD_DECK,
      id: 3,
      title: 'fourth deck'
    }
    deepFreeze(state)
    deepFreeze(action)
    const result = decks(state, action)
    expect(result)
      .toEqual([
        ...state,
        {
          id: 3,
          title: 'fourth deck'
        }
      ])
  })

  it(`${C.RENAME_DECK} success`, () => {
    const state = [
      {
        id: 0,
        title: 'first deck'
      },
      {
        id: 1,
        title: 'second deck',
      },
      {
        id: 2,
        title: 'third deck'
      }
    ]
    const action = {
      type: C.RENAME_DECK,
      title: 'New deck Name',
      id: 0
    }
    deepFreeze(state)
    deepFreeze(action)
    const result = decks(state, action)
    expect(result)
      .toEqual([
        {
          ...state[0],
          title: 'New deck Name'
        },
        state[1],
        state[2]
      ])
  })

  it(`${C.REMOVE_DECK} success`, () => {
    const state = [
      {
        id: 0,
        title: 'first deck'
      },
      {
        id: 1,
        title: 'second deck',
      },
      {
        id: 2,
        title: 'third deck'
      }
    ]
    const action = {
      type: C.REMOVE_DECK,
      id: 0
    }
    deepFreeze(state)
    deepFreeze(action)
    const result = decks(state, action)
    expect(result)
      .toEqual([
        {
          id: 1,
          title: 'second deck',
        },
        {
          id: 2,
          title: 'third deck'
        }
      ]) 
  });
})