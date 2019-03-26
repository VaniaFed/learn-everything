import { createStore, combineReducers } from 'redux';
import { user, decks, cards } from './reducers';
import { addDeck, renameDeck, addCard } from './actions';
// import { changeUserName, addCard, removeCard, addDeck, removeDeck } from './actions';
// delete localStorage['redux-learn-everything'];
const store = createStore(
  combineReducers({ user, decks, cards }),
  (localStorage['redux-learn-everything']) ?
    JSON.parse(localStorage['redux-learn-everything']) :
    {}
)

store.subscribe( () => {
  localStorage['redux-learn-everything'] = JSON.stringify( store.getState() );
  console.log( store.getState() );
});


// const myCards =  [
//   {
//     id: 0,
//     deckId: 0,
//     question: 'Question1',
//     answer: 'Answer1',
//     datePrevRevise: '2019.94.23',
//     dateNextRevise: '2019.40.53',
//   },
//   {
//     id: 1,
//     deckId: 2,
//     question: 'Question2',
//     answer: 'Answer2',
//     datePrevRevise: '2019.94.23',
//     dateNextRevise: '2019.40.53',
//   },
//   {
//     id: 2,
//     deckId: 0,
//     question: 'Question3',
//     answer: 'Answer3',
//     datePrevRevise: '2019.94.23',
//     dateNextRevise: '2019.40.53',
//   },
//   {
//     id: 0,
//     deckId: 1,
//     question: 'Question4',
//     answer: 'Answer4',
//     datePrevRevise: '2019.94.23',
//     dateNextRevise: '2019.40.53',
//   },
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
// myCards.map(card => store.dispatch( addCard(card) ));
// myDecks.map(deck => store.dispatch( addDeck(deck) ));

// store.dispatch( renameDeck(1, 'hello') );
// console.log( store.getState() )

export default store;

// const exampleState = {
  // user: {
  //   userName: 'Martin',
  // },
  // array of decks
  // decks: [
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
  // ],
  // array of cards
// }



// const card = {
//   id: 0,
//   deckId: 1,
//   question: 'Question4',
//   answer: 'Answer4',
//   datePrevRevise: '2019.94.23',
//   dateNextRevise: '2019.40.53',
// };



// myDecks.map(deck => store.dispatch( addDeck(deck) ));
// store.dispatch( removeDeck(2) );
// store.dispatch( addDeck() )
// store.dispatch( addCard(card) )