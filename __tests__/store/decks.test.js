import storeFactory from '../../src/public/store/store'
import { addDeck, removeDeck, renameDeck, } from '../../src/public/actions'

describe('addDeck', () => {
  let store = {}
  const initialDecks = [
    {
      id: 0,
      title: 'Title 1'
    },
    {
      id: 1,
      title: 'Title 2'
    }
  ]

  beforeAll(() => {
    store = storeFactory({ decks: initialDecks })
    store.dispatch(addDeck(2, 'New title'))
  })

  it('id should be 2', () => {
    expect(store.getState().decks[2].id).toBe(2)
  })

  it('title should be \'New title\'', () => {
    expect(store.getState().decks[2].title).toBe('New title')
  })

  it('quantity of decks should be 3', () => {
    expect(store.getState().decks.length).toBe(3)
  })
})

describe('RemoveDeck', () => {
  let store = {}

  beforeAll(() => {
    store = storeFactory()
    store.dispatch(removeDeck(0))
  })

  it('quantity of decks should be 2', () => {
    expect(store.getState().decks.length).toBe(2)
  })

  it('decks should be equal this', () => {
    const decks = [
      {
        id: 1,
        title: 'Title 2'
      },
      {
        id: 2,
        title: 'New title'
      }
    ]
    expect(store.getState().decks)
      .toEqual(decks)
  })
})

describe('renameDeck', () => {
  let store = {}

  beforeAll(() => {
    store = storeFactory()
    store.dispatch(renameDeck(1, 'Renamed title'))
  })

  it('renameDeck', () => {
    expect(store.getState().decks[0].title)
      .toBe('Renamed title')
  })
})