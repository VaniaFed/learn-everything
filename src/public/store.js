import { createStore, combineReducers } from 'redux';

import { user, decks, deck } from './reducers';

const initialState = {
  user: {
    userName: 'Martin',
  },
  // array of decks
  decks: [
    {
      id: 0,
      title: 'Deck1',
      quantityCards: 26,
    },
    {
      id: 1,
      title: 'Deck1',
      quantityCards: 12,
    },
    {
      id: 2,
      title: 'Deck2',
      quantityCards: 3,
    },
  ],
  // array of cards
  deck: [
    {
      id: 0,
      deckId: 0,
      question: 'Question1',
      answer: 'Answer1',
      datePrevRevise: '2019.94.23',
      dateNextRevise: '2019.40.53',
    },
    {
      id: 1,
      deckId: 2,
      question: 'Question2',
      answer: 'Answer2',
      datePrevRevise: '2019.94.23',
      dateNextRevise: '2019.40.53',
    },
    {
      id: 2,
      deckId: 0,
      question: 'Question3',
      answer: 'Answer3',
      datePrevRevise: '2019.94.23',
      dateNextRevise: '2019.40.53',
    },
    {
      id: 0,
      deckId: 1,
      question: 'Question4',
      answer: 'Answer4',
      datePrevRevise: '2019.94.23',
      dateNextRevise: '2019.40.53',
    },
  ] 
}


const store = createStore(
  combineReducers({ user, decks, deck }),
  initialState
)

store.getState();