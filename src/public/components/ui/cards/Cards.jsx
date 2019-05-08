import React from 'react'
import PropTypes from 'prop-types'

import CardsNav from './cardsNav/CardsNav'
import CardsContainer from './CardsContainer/CardsContainer'
import Button from '../common/button/Button'

import css from './cards.module.sass'

const combineDeckAndCards = (deck, cards) => {
  const deckAndCards = {
    deck,
    cards
  }
  const deckData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(deckAndCards))
  return deckData
}

const Cards = ({ cards, decks, match, onAdd, onDelete, onRenameDeck, onChangeQuestion, onChangeAnswer }) => {
  const id = match.params.id
  const currentDeck = decks.find(deck => deck.id === id)
  const currentCards = cards.filter(card => card.deckId === id)
  const fileName = `${currentDeck.title}.json`
  const handleChangeDeckTitle = e => {
    onRenameDeck(id, e.target.value)
  }
  const handleChangeAnswer = (id, e) => {
    onChangeAnswer(id, e.target.innerText)
  }
  const handleChangeQuestion = (id, e) => {
    onChangeQuestion(id, e.target.innerText)
  }
  return (
    <div className='container'>
      <input className={css.input_deck_name}
        defaultValue={currentDeck.title}
        type='text'
        onBlur={handleChangeDeckTitle}
      />
      <CardsNav deckId={id} />
      <CardsContainer onDelete={onDelete}
        cards={currentCards}
        onChangeQuestion={handleChangeQuestion}
        onChangeAnswer={handleChangeAnswer}
      />
      <Button className='default-btn default-btn-margin'
        onClick={() => onAdd(id)}>
        Добавить карточку
      </Button>
      <a href={`data:${combineDeckAndCards(currentDeck, currentCards)}`} download={fileName} className={css.link}>Скачать колоду</a>
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

Cards.defaultProps = {
  cards: [],
  decks: [],
  match: {},
  onAdd: f => f,
  onDelete: f => f,
  onRenameDeck: f => f,
  onChangeQuestion: f => f,
  onChangeAnswer: f => f
}

export default Cards
