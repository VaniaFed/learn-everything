import C from './constants';

export const card = (state={}, action) => {
  const { type, id, question, answer, datePrevRevise, dateNextRevise } = action;
  switch(type) {
    case C.ADD_CARD:
      return {
        id,
        question,
        answer,
        datePrevRevise,
        dateNextRevise
      }
    default:
      return state;
  }
}

export const deck = (state=[], action) => {
  console.log( card({}, action) )
  const { type, id, title, quantityCards } = action;
  switch(type) {
    case C.ADD_CARD:
      return [
        ...state,
        card({}, action)
      ]
    case C.ADD_DECK:
      return {
        id,
        title,
        quantityCards,
      }
  }
}

const state = [
  {
    id: 0,
    question: 'Hello',
    answer: 'Привет',
    datePrevRevise: '2918.o3.95',
    dateNextRevise: '2018.93.05'
  },
  {
    id: 1,
    question: 'Hello',
    answer: 'Привет',
    datePrevRevise: '2918.o3.95',
    dateNextRevise: '2018.93.05'
  },
  {
    id: 2,
    question: 'Hello',
    answer: 'Привет',
    datePrevRevise: '2918.o3.95',
    dateNextRevise: '2018.93.05'
  },
  {
    id: 3,
    question: 'Hello',
    answer: 'Привет',
    datePrevRevise: '2918.o3.95',
    dateNextRevise: '2018.93.05'
  },
]

const cardAddAction = {
  type: C.ADD_CARD,
  id: 4,
  question: 'Hello',
  answer: 'Привет',
  datePrevRevise: '2918.o3.95',
  dateNextRevise: '2018.93.05'
}

const deckAddAction = {
  type: C.ADD_DECK,
  id: 0,
  title: 'Present perfect',
  quantityCards: 5,
}
console.log ( deck(state, deckAddAction) )
console.log ( card({}, cardAddAction) )

export const decks = (state=[], action) => {
  // const { type } = action;
  // switch(type) {
  //   case C.ADD_DECK:
  // }
}
