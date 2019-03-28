import React, { Component } from 'react'

import css from './decks.module.sass'

import Deck from './Deck/Deck'
import Button from '../common/button/Button'
import { removeDeck, addDeck } from '../actions'

class Decks extends Component {
  constructor (props) {
    super (props)
  }

  render () {
    const state = this.props.store.getState()
    const { store } = this.props

    return (
      <div className='container'>
        <h1>Колоды</h1>
        {(state.decks.length > 0)
          ? <div className={css.lists}>
            {state.decks.map((deck, i) => {
              const filteredCards = state.cards.filter(card => card.deckId === deck.id)
              const quantityCards = filteredCards.length
              return (
                <Deck key={deck.id}
                  id={deck.id}
                  title={deck.title}
                  quantity={quantityCards}
                  onDelete={() => {
                    store.dispatch(removeDeck(deck.id))
                  }}
                />
              )
            })}
          </div>
          : null
        }
        <Button className='default-btn'
          onClick={() => {
            store.dispatch(addDeck())
          }}
          content='Добавить колоду'
        />
      </div>
    )
  }
}

export default Decks
