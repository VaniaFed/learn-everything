import C from '../constants'

export const user = (state = {}, action) => {
  switch (action.type) {
    case C.CHANGE_USERNAME: {
      const { userName } = action
      return {
        ...state,
        userName
      }
    }
    default:
      return state
  }
}

const card = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_CARD: {
      const { id, question, answer, datePrevRevise, dateNextRevise, deckId } = action
      return {
        id,
        question,
        answer,
        datePrevRevise,
        dateNextRevise,
        deckId: deckId
      }
    }
    case C.CHANGE_QUESTION: {
      const { question } = action
      return {
        ...state,
        question
      }
    }
    case C.CHANGE_ANSWER: {
      const { answer } = action
      return {
        ...state,
        answer
      }
    }
    case C.CHANGE_DATE_REVISE: {
      const { datePrevRevise, dateNextRevise } = action
      return {
        ...state,
        datePrevRevise,
        dateNextRevise
      }
    }
    default:
      return state
  }
}

export const cards = (state = [], action) => {
  switch (action.type) {
    case C.ADD_CARD:
      return [
        ...state,
        card({}, action)
      ]
    case C.REMOVE_CARD: {
      const { id } = action
      return state.filter(card => card.id !== id)
    }
    case C.CHANGE_QUESTION: {
      const { id } = action
      return state.map(oneCard => {
        return (oneCard.id === id)
          ? card(oneCard, action)
          : oneCard
      })
    }
    case C.CHANGE_ANSWER: {
      const { id } = action
      return state.map(oneCard => {
        return (oneCard.id === id)
          ? card(oneCard, action)
          : oneCard
      })
    }
    case C.CHANGE_DATE_REVISE: {
      const { id } = action
      return state.map(oneCard => {
        return (oneCard.id === id)
          ? card(oneCard, action)
          : oneCard
      })
    }
    default:
      return state
  }
}

const deck = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_DECK: {
      const { id, title, quantityCards } = action
      return {
        id,
        title: title || 'untitled',
        quantityCards
      }
    }
    case C.RENAME_DECK: {
      const { newDeckName } = action
      return {
        ...state,
        title: newDeckName
      }
    }
    default:
      return state
  }
}

export const decks = (state = [], action) => {
  const { type, id } = action
  switch (type) {
    case C.ADD_DECK:
      return [
        ...state,
        deck({}, action)
      ]
    case C.RENAME_DECK: {
      return state.map(oneDeck => {
        return (oneDeck.id === id)
          ? deck(oneDeck, action)
          : oneDeck
      })
    }
    case C.REMOVE_DECK:
      return state.filter(oneDeck => oneDeck.id !== id)
      // TODO: нужно также удалить все карточки, ссылающиеся на deck
    default:
      return state
  }
}
