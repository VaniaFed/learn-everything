import { v4 } from 'uuid'
import C from './constants'
import { doubleDate } from './lib/time'

export const changeUserName = (userName) => {
  return (
    {
      type: C.CHANGE_USERNAME,
      userName
    }
  )
}

export const addCard = (deckId) => {
  const getDate = () => new Date()
  const y = doubleDate(getDate().getFullYear())
  const m = doubleDate(getDate().getMonth())
  const d = doubleDate(getDate().getDay())
  const currentDate = `${y}.${m}.${d}`
  return (
    {
      type: C.ADD_CARD,
      id: v4(),
      question: '',
      answer: '',
      datePrevRevise: currentDate,
      dateNextRevise: currentDate,
      deckId
    }
  )
}

export const changeQuestion = (id, question) => {
  return (
    {
      type: C.CHANGE_QUESTION,
      id,
      question
    }
  )
}

export const changeAnswer = (id, answer) => {
  return (
    {
      type: C.CHANGE_ANSWER,
      id,
      answer
    }
  )
}

export const removeCard = (cardId) => {
  return (
    {
      type: C.REMOVE_CARD,
      id: cardId
    }
  )
}

export const addDeck = () => {
  return (
    {
      type: C.ADD_DECK,
      id: v4(),
      title: 'Untitled Deck',
      quantityCards: 0
    }
  )
}

export const renameDeck = (id, newDeckName) => {
  return (
    {
      type: C.RENAME_DECK,
      id,
      newDeckName
    }
  )
}

export const removeDeck = (deckId) => {
  return (
    {
      type: C.REMOVE_DECK,
      id: deckId
    }
  )
}
