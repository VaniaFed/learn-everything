import React from 'react'
import { PropTypes } from 'prop-types'
import { v4 } from 'uuid'

import Deck from './Deck/Deck'
import DeckContainer from './DeckContainer'
import Button from '../common/button/Button'
import Title2 from '../common/title2/Title2'

import css from './decks.module.sass'

const addDeckAndCardFromFile = (e, onAddDeck, onAddCard) => {
  const files = e.target.files
  const arrayFiles = Array.from(files)
  arrayFiles.map(file => readFiles(file, onAddDeck, onAddCard))
}

const readFiles = (file, onAddDeck, onAddCard) => {
  const reader = new FileReader()
  reader.readAsText(file)
  reader.onload = (e) => {
    const resultJson = JSON.parse(e.target.result)
    const deck = resultJson.deck
    const cards = resultJson.cards
    const newDeckId = v4()
    deck.id = newDeckId
    onAddDeck(deck)
    cards.map(card => onAddCard(deck.id, card))
  }
}

const Decks = ({ cards, decks, onDelete, onAddCard, onAddDeck }) => {
  return (
    <div className='container'>
      <Title2>Колоды</Title2>
      <DeckContainer cards={cards} decks={decks} onDelete={onDelete} />
      <Button className='default-btn default-btn-margin' onClick={onAddDeck}>
        Добавить колоду
      </Button>
      <label className={css.link} htmlFor='loadFile'>Загрузить из файла</label>
      <input id='loadFile' className={css.input_file} type='file' multiple
        onChange={(e) => addDeckAndCardFromFile(e, onAddDeck, onAddCard)} />
    </div>
  )
}

Decks.propTypes = {
  cards: PropTypes.array,
  decks: PropTypes.array,
  onDelete: PropTypes.func,
  onAddCard: PropTypes.func,
  onAddDeck: PropTypes.func
}

Deck.defaultTypes = {
  cards: [],
  decks: [],
  onDelete: f => f,
  onAddCard: f => f,
  onAddDeck: f => f

}

export default Decks
