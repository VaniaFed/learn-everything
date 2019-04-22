import { createStore, combineReducers, applyMiddleware } from 'redux'
import { user, decks, cards } from './reducers'

const logger = store => next => action => {
  let result
  // console.groupCollapsed('dispatching', action.type)
  // console.log('prev state', store.getState())
  // console.log('action', action)
  result = next(action)
  // console.log('next state', store.getState())
  // console.groupEnd()
  return result
}

const saver = store => next => action => {
  let result = next(action)
  localStorage['redux-learn-everything'] = JSON.stringify(store.getState())
  return result
}

const storeFactory = (initialState = {}) => {
  return applyMiddleware(logger, saver)(createStore)(
    combineReducers({ user, decks, cards }),
    (localStorage['redux-learn-everything'])
      ? JSON.parse(localStorage['redux-learn-everything'])
      : initialState
  )
}

export default storeFactory
