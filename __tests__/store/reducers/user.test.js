import C from '../../../src/public/constants'
import { user } from '../../../src/public/store/reducers'

describe('user Reducer', () => {
  it(`${C.CHANGE_USERNAME} success`, () => {
    const state = {
      userName: 'Ivan'
    }
    const action = {
      type: C.CHANGE_USERNAME,
      userName: 'Andrew'
    }
    const result = user(state, action)
    expect(result)
      .toEqual({
        userName: 'Andrew'
      })
  })
})
