import React from 'react'
import PropTypes from 'prop-types'

import css from './cards.module.sass'
import { renameDeck, addCard } from '../../../actions'

import CardsNav from './cardsNav/CardsNav'
import CardsContainer from './CardsContainer/CardsContainer'
import Button from '../common/button/Button'

const Cards = (props = {}, { store }) => {
  console.log('store in Cards: ', store.getState())
  const state = store.getState()
  const { id } = props.match.params
  const currentDeck = state.decks.find(deck => deck.id === id)
  const cards = state.cards.filter(card => card.deckId === id)
  console.log(id)
  // TODO: title нужно будет получать из deck, где id = idDeck
  // TODO: при помощи роута достаем из URL id колоды
  return (
    <div className='container'>
      <input className={css.input_deck_name}
        defaultValue={currentDeck.title}
        type='text'
        onBlur={(e) => {
          const newName = e.target.value
          store.dispatch(renameDeck(id, newName))
        }}
      />
      <CardsNav deckId={id} />
      <CardsContainer cards={cards} deckId={id} />
      <Button className='default-btn'
        content='Добавить карточку'
        onClick={() => store.dispatch(addCard(id))}
      />
      <Button className='default-btn btn-margin'
        content='Сохранить все'
        // onClick={() => store.dispatch(addCard(id))}
      />
    </div>
  )
}

Cards.propTypes = {
  store: PropTypes.object
}

Cards.contextTypes = {
  store: PropTypes.object
}

export default Cards
