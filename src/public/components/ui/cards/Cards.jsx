import React from 'react'
import PropTypes from 'prop-types'

import css from './cards.module.sass'

import CardsNav from './cardsNav/CardsNav'
import CardsContainer from './CardsContainer/CardsContainer'
import Button from '../common/button/Button'

const Cards = ({ cards = [], decks = [], match = {}, onDelete = f => f, onAdd = f => f,
  onRenameDeck = f => f,
  onChangeQuestion = f => f,
  onChangeAnswer = f => f }) => {
  const id = match.params.id
  const currentDeck = decks.find(deck => deck.id === id)
  const currentCards = cards.filter(card => card.deckId === id)
  const deckAndCards = {
    'deck': currentDeck,
    'cards': currentCards
  }
  const fileName = `${currentDeck.title}.json`
  const deckData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(deckAndCards))
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
      <Button className='default-btn default-btn-margin'
        content='Добавить карточку'
        onClick={() => onAdd(id)}
      />
      <a href={`data:${deckData}`} download={fileName} className={css.link}>Скачать колоду</a>
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
  decks: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
  onAdd: PropTypes.func,
  onRenameDeck: PropTypes.func,
  onChangeQuestion: PropTypes.func,
  onChangeAnswer: PropTypes.func
}

export default Cards
