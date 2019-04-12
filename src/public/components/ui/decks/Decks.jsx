import React from 'react'

import Deck from './Deck/Deck'
import Button from '../common/button/Button'
import { PropTypes } from 'prop-types'
import Title2 from '../common/title2/Title2'
import { isTimeToRevise } from '../../../lib/time'
import { v4 } from 'uuid'

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

const Decks = ({ cards = [], decks = [], onDelete = f => f, onAddCard = f => f, onAddDeck }) => {
  return (
    <div className='container'>
      <Title2 content='Колоды' />
      {(decks.length > 0)
        ? <div>
          {decks.map((deck, i) => {
            const currentCards = cards.filter(card => card.deckId === deck.id)
            const quantityCards = currentCards.length
            const quantityCardsToRevise = currentCards.filter(card =>
              isTimeToRevise(card.dateNextRevise)).length
            return (
              <Deck key={deck.id}
                id={deck.id}
                title={deck.title}
                quantity={quantityCards}
                quantityCardsToRevise={quantityCardsToRevise}
                onDelete={() => onDelete(deck.id)}
              />
            )
          })}
        </div>
        : <Title2 content='У вас нет ни одной карточки. Создайте новую.' />
      }
      <Button className='default-btn default-btn-margin'
        onClick={() => onAddDeck()}
        content='Добавить колоду'
      />
      <label className={css.link} htmlFor='loadFile'>Загрузить из файла</label>
      <input id='loadFile' className={css.input_file} type='file' multiple onChange={(e) => addDeckAndCardFromFile(e, onAddDeck, onAddCard)} />
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

export default Decks
