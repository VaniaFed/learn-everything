import C from './constants';
import { v4 } from 'uuid';

export const changeUserName = (userName) => {
  return (
    {
      type: C.CHANGE_USERNAME,
      userName,
    }
  )
}

export const addCard = (card) => {
  return (
    {
      type: C.ADD_CARD,
      id: v4(),
      ...card,
    }
  )
}

export const removeCard = (cardId) => {
  return (
    {
      type: C.REMOVE_CARD,
      id: cardId,
    }
  )
}

export const addDeck = (deck) => {
  return (
    {
      type: C.ADD_DECK,
      id: v4(),
      quantityCards: 0,
      ...deck,
    }
  )
}

export const removeDeck = (deckId) => {
  return (
    {
      type: C.REMOVE_DECK,
      id: deckId,
    }
  )
}