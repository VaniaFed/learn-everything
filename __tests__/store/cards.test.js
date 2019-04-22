import storeFactory from '../../src/public/store/store'
import { addCard, removeCard, changeQuestion, changeAnswer, changeDateRevise, removeCardsByDeckId } from '../../src/public/actions'

describe('addCard', () => {
  let store = {}
  const myCards = [
    {
      id: 0,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: 0,
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    },
    {
      id: 1,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: 0,
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    },
    {
      id: 2,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: 1,
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    }
  ] 

  beforeAll(() => {
    store = storeFactory({ cards: myCards })
    store.dispatch((addCard(1, 0, 'new question', 'new answer')))
  })

  it('should add a new Card', () => {
    expect(store.getState().cards.length)
      .toBe(4) 
  })

  it('should add an id', () => {
    expect(store.getState().cards[3].id).toBe(0)
  })

  it('should add an deckId', () => {
    expect(store.getState().cards[3].deckId).toBe(1)
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
      deckId: 0,
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    },
    {
      id: 1,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: 0,
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    },
    {
      id: 2,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: 1,
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    }
  ]

  beforeAll(() => {
    store = storeFactory({ cards: myCards })
    store.dispatch((removeCard(2)))
  })

  it('should remove a card', () => {
    expect(store.getState().cards.length).toBe(3)
  })
})

describe('changeQuestion', () => {
  let store = {}
  const myCards = [
    {
      id: 0,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: 0,
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    },
    {
      id: 1,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: 0,
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    },
    {
      id: 2,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: 1,
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    }
  ]

  beforeAll(() => {
    store = storeFactory({ cards: myCards })
    store.dispatch((changeQuestion(0, 'my special question')))
  })

  it('should change question', () => {
    expect(store.getState().cards[0].question).toBe('my special question')
  })
})

describe('changeAnswer', () => {
  let store = {}
  const myCards = [
    {
      id: 0,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: 0,
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    },
    {
      id: 1,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: 0,
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    },
    {
      id: 2,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: 1,
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    }
  ]

  beforeAll(() => {
    store = storeFactory({ cards: myCards })
    store.dispatch((changeAnswer(0, 'my special answer')))
  })

  it('should change answer', () => {
    expect(store.getState().cards[0].answer).toBe('my special answer')
  })
})


describe('changeDateRevise', () => {
  let store = {}
  const myCards = [
    {
      id: 0,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: 0,
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    },
    {
      id: 1,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: 0,
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    },
    {
      id: 2,
      question: '121fsdff',
      answer: 'fdss12',
      deckId: 1,
      dateNextRevise: '2019.04.21',
      datePrevRevise: '2019.04.21'
    }
  ]

  beforeAll(() => {
    store = storeFactory({ cards: myCards })
    store.dispatch((changeDateRevise(0, '2019.04.23', '2019.04.30')))
  })

  it('should change date prev revise', () => {
    expect(store.getState().cards[0].datePrevRevise).toBe('2019.04.23')
  })

  it('should change date next revise', () => {
    expect(store.getState().cards[0].dateNextRevise).toBe('2019.04.30')
  })
})

describe('delete all the cards by deck id', () => {
  let store = {}

  beforeAll(() => {
    store = storeFactory()
    store.dispatch(removeCardsByDeckId(0))
  })

  it('should deleted all the cards with id 0', () => {
    expect(store.getState().cards)
      .toEqual([
        {
          id: 0,
          question: 'my special question',
          answer: 'my special answer',
          deckId: 1,
          dateNextRevise: '2019.04.30',
          datePrevRevise: '2019.04.23'
        }
      ])
  })
})
