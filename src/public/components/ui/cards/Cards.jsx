import React from 'react'
import PropTypes from 'prop-types'

import css from './cards.module.sass'

import CardsNav from './cardsNav/CardsNav'
import CardsContainer from './CardsContainer/CardsContainer'
import Button from '../common/button/Button'

const Cards = ({ cards, decks, match, onDelete, onAdd,
  onRenameDeck,
  onChangeQuestion,
  onChangeAnswer }) => {
  const id = match.params.id
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
      <CardsContainer onDelete={onDelete}
        cards={currentCards}
        deckId={id}
        onChangeQuestion={onChangeQuestion}
        onChangeAnswer={onChangeAnswer}
      />
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

export default Cards
