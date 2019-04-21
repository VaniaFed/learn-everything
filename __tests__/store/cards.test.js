import storeFactory from '../../src/public/store/store'
import { cards } from '../../src/public/store/reducers'
import { addCard, removeCard } from '../../src/public/actions'
import { createStore } from 'redux'

describe('addCard', () => {
  let store = {}
  const myCards = [
    {
      id: '0',
      question: '121fsdff',
      answer: 'fdss12',
      deckId: '0',
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    },
    {
      id: '1',
      question: '121fsdff',
      answer: 'fdss12',
      deckId: '0',
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    },
    {
      id: '2',
      question: '121fsdff',
      answer: 'fdss12',
      deckId: '1',
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    }
  ] 

  beforeAll(() => {
    store = storeFactory({cards: myCards})
    store.dispatch((addCard(1, 3, 'new question', 'new answer')))
  })

  it('should add a new Card', () => {
    expect(store.getState().cards.length)
      .toBe(4) 
  })

  it('should add an id', () => {
    expect(store.getState().cards[3].id).toBeDefined()
  })

  it('should add a question', () => {
    expect(store.getState().cards[3].question).toBe('new question')
  })

  it('should add an answer', () => {
    expect(store.getState().cards[3].answer).toBe('new answer')
  })

  it('should set a date prev revise', () => {
    expect(store.getState().cards[3].datePrevRevise).toBeDefined()
  })

  it('should set a date next revise', () => {
    expect(store.getState().cards[3].dateNextRevise).toBeDefined()
  })
})

describe('removeCard', () => {
  let store = {}
  const myCards = [
    {
      id: 0,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: '0',
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    },
    {
      id: 1,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: '0',
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    },
    {
      id: 2,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: '1',
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    }
  ]

  beforeAll(() => {
    store = storeFactory({cards: myCards})
    store.dispatch((removeCard(1)))
  })

  it('should remove a card', () => {
    expect(store.getState().cards.length).toBe(3)
  })
})
