import C from './constants';

export const user = (state={}, action) => {
  const { type, userName } = action;
  switch(type) {
    case C.CHANGE_USERNAME:
      return {
        ...state,
        userName
      }
  }
}

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

export const decks = (state=[], action) => {
  const { type, id } = action;
  switch(type) {
    case C.ADD_DECK:
      return [
        ...state,
        deck({}, action)
      ]
    case C.REMOVE_DECK:
      return state.filter( deck =>  deck.id !== id);
      // TODO: нужно также удалить все карточки, ссылающиеся на deck

  }
}

// let state = [
//   {
//     id: 0,
//     question: 'Hello',
//     answer: 'Привет',
//     datePrevRevise: '2918.o3.95',
//     dateNextRevise: '2018.93.05'
//   },
//   {
//     id: 1,
//     question: 'Hello',
//     answer: 'Привет',
//     datePrevRevise: '2918.o3.95',
//     dateNextRevise: '2018.93.05'
//   },
//   {
//     id: 2,
//     question: 'Hello',
//     answer: 'Привет',
//     datePrevRevise: '2918.o3.95',
//     dateNextRevise: '2018.93.05'
//   },
//   {
//     id: 3,
//     question: 'Hello',
//     answer: 'Привет',
//     datePrevRevise: '2918.o3.95',
//     dateNextRevise: '2018.93.05'
//   },
// ]

// const cardAddAction = {
//   type: C.ADD_CARD,
//   id: 4,
//   question: 'Hello',
//   answer: 'Привет',
//   datePrevRevise: '2918.o3.95',
//   dateNextRevise: '2018.93.05'
// }

// const deckAddAction = {
//   type: C.ADD_DECK,
//   id: 0,
//   title: 'Present perfect',
//   quantityCards: 5,
// }
// state = decks(state, deckAddAction);

// const deckRemoveAction = {
//   type: C.REMOVE_DECK,
//   id: 1,
// }

// state = decks(state, deckRemoveAction);
// console.log (state)



// const Ivan = {
//   userName: 'Ivan',
//   age: 19,
//   lang: 'ru',
// }

// const userChangeUserNameAction = {
//   type: C.CHANGE_USERNAME,
//   userName: 'John',
// }

// console.log( user(Ivan, userChangeUserNameAction) );