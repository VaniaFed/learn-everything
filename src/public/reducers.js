import C from './constants';
import { renameDeck } from './actions';

export const user = (state={}, action) => {
  switch(action.type) {
    case C.CHANGE_USERNAME: {
      const { userName } = action;
      return {
        ...state,
        userName
      }

    }
    default:
      return state;
  }
}

const card = (state={}, action) => {
  switch(action.type) {
    case C.ADD_CARD: {
      const { id, question, answer, datePrevRevise, dateNextRevise } = action;
      return {
        id,
        question,
        answer,
        datePrevRevise,
        dateNextRevise
      }
    }
    case C.CHANGE_QUESTION: {
      return {
        ...state,
        question
      }
    }
    case C.CHANGE_ANSWER: {
      const { answer } = action;
      return {
        ...state,
        answer
      }
    }
    default:
      return state;
  }
}

export const cards = (state=[], action) => {
  switch(action.type) {
    case C.ADD_CARD:
      return [
        ...state,
        card({}, action)
      ]
    case C.REMOVE_CARD: {
      const { id } = action;
      return state.filter( card => card.id !== id);
    }
    case C.CHANGE_QUESTION: 
      return card(state, action);
    case C.CHANGE_ANSWER: {
      const { id } = action;
      return state.map(oneCard => {
        return (oneCard.id === id) ?
          card(oneCard, action) :
          oneCard

      })
      return card(state, action);
    } 
    default:
      return state;
  }
}

const deck = (state={}, action) => {
  switch(action.type) {
    case C.ADD_DECK: {
      const { id, title, quantityCards } = action;
      return {
        id,
        title: title || 'untitled',
        quantityCards,
      }
    }
    case C.RENAME_DECK: {
      const { newDeckName } = action;
      return {
        ...state,
        title: newDeckName,
      }
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
        deck({}, action)
      ]
    case C.RENAME_DECK: {
       return state.map(oneDeck => {
        return (oneDeck.id === id) ?
          deck(oneDeck, action) :
          oneDeck
      });
    }
    case C.REMOVE_DECK:
      return state.filter( oneDeck => oneDeck.id !== id);
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

// const myDecks = [
//   {
//     id: 0,
//     title: 'Deck1',
//     quantityCards: 26,
//   },
//   {
//     id: 1,
//     title: 'Deck1',
//     quantityCards: 12,
//   },
//   {
//     id: 2,
//     title: 'Deck2',
//     quantityCards: 3,
//   },
// ]
// const actionRenameDeck = {
//   type: C.RENAME_DECK,
//   newDeckName: 'New deck name!!!',
//   id: 1,
// }
// console.log( decks(myDecks, actionRenameDeck) );
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