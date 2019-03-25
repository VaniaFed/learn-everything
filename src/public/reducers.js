import C from './constants';

export const user = (state={}, action) => {
  const { type, userName } = action;
  switch(type) {
    case C.CHANGE_USERNAME:
      return {
        ...state,
        userName
      }
    default:
      return state;
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

export const cards = (state=[], action) => {
  const { type, id, title, quantityCards } = action;
  switch(type) {
    case C.ADD_CARD:
      return [
        ...state,
        card({}, action)
      ]
    case C.REMOVE_CARD:
      state.map(card => console.log(card.id))
      return state.filter( card => card.id !== id);
    case C.ADD_DECK:
      return {
        id,
        title,
        quantityCards,
      }
    default:
      return state;
  }
}

export const decks = (state=[], action) => {
  const { type, id } = action;
  switch(type) {
    case C.ADD_DECK:
      return [
        ...state,
        cards({}, action)
      ]
    case C.REMOVE_DECK:
      return state.filter( deck => deck.id !== id);
      // TODO: нужно также удалить все карточки, ссылающиеся на deck
    default:
      return state;
  }
}

// examples of state changes
// let state = [
  // {
  //   id: 0,
  //   question: 'Hello',
  //   answer: 'Привет',
  //   datePrevRevise: '2918.o3.95',
  //   dateNextRevise: '2018.93.05'
  // },
  // {
  //   id: 1,
  //   question: 'Hello',
  //   answer: 'Привет',
  //   datePrevRevise: '2918.o3.95',
  //   dateNextRevise: '2018.93.05'
  // },
  // {
  //   id: 2,
  //   question: 'Hello',
  //   answer: 'Привет',
  //   datePrevRevise: '2918.o3.95',
  //   dateNextRevise: '2018.93.05'
  // },
  // {
  //   id: 3,
  //   question: 'Hello',
  //   answer: 'Привет',
  //   datePrevRevise: '2918.o3.95',
  //   dateNextRevise: '2018.93.05'
  // },
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

// const cardRemoveAction = {
//   type: C.REMOVE_CARD,
//   id: 0,
// }

// state = cards(state, cardRemoveAction);
// console.log(state);



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