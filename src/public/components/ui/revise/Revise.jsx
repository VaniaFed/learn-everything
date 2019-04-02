import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card/Card'
import Title2 from '../common/title2/Title2'

import css from './revise.module.sass'

const Revise = ({ cards, decks, match }) => {
  const deckId = match.params.id
  const currentDeck = decks.find(deck => deck.id === deckId)
  // FIXME: and also to add the following condition: dateNextRevise < currentDate
  const cardsToRevise = cards.filter(card => card.deckId === deckId) || []
  return (
    <div className='container'>
      <main className={css.rememberContainer}>
        <h2 className={css.remember__title}>{currentDeck.title}</h2>
        {(cardsToRevise.length > 0)
          ? (<Card question={cardsToRevise[0].question} />)
          : <Title2 text='There is no one card to revise' />
        }
      </main>
    </div>
  )
}

export default Revise
