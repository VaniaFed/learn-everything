import { createStore, combineReducers } from 'redux';
import { user, decks, cards } from './reducers';

const store = createStore(
  combineReducers({ user, decks, cards,  }),
  (localStorage['redux-learn-everything']) ?
    JSON.parse(localStorage['redux-learn-everything']) :
    {}
)

store.subscribe( () => {
  localStorage['redux-learn-everything'] = JSON.stringify( store.getState() );
  console.log( store.getState() );
});

export default store;
