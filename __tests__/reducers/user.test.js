import C from '../../../src/public/constants'
import { user } from '../../../src/public/store/reducers'
import deepFreeze from 'deep-freeze'

describe('user Reducer', () => {
  it(`${C.CHANGE_USERNAME} success`, () => {
    const state = {
      userName: 'Ivan'
    }
    const action = {
      type: C.CHANGE_USERNAME,
      userName: 'Andrew'
    }
    deepFreeze(state)
    deepFreeze(action)
    const result = user(state, action)
    expect(result)
      .toEqual({
        userName: 'Andrew'
      })
  })
})
