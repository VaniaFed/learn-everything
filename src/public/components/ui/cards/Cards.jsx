import React from 'react'
import PropTypes from 'prop-types'

import css from './cards.module.sass'

import CardsNav from './cardsNav/CardsNav'
import CardsContainer from './CardsContainer/CardsContainer'
import Button from '../common/button/Button'

const Cards = ({ cards, decks, id, onDelete, onAdd, onRenameDeck }) => {
  console.log('in new Cards: ', cards)
  console.log('in new Cards: ', decks)
  const currentDeck = decks.find(deck => deck.id === id)
  const currentCards = cards.filter(card => card.deckId === id)
  return (
    <div className='container'>
      <input className={css.input_deck_name}
        defaultValue={currentDeck.title}
        type='text'
        onBlur={(e) => {
          const newName = e.target.value
          onRenameDeck(id, newName)
        }}
      />
      <CardsNav deckId={id} />
      <CardsContainer cards={currentCards} deckId={id} />
      <Button className='default-btn'
        content='Добавить карточку'
        onClick={() => onAdd(id)}
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
