import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card/Card'

import css from './revise.module.sass'
import NoOneCards from '../common/NoOneCards'

const Revise = ({ cards, decks, match, history }) => {
  const deckId = match.params.id
  const currentDeck = decks.find(deck => deck.id === deckId)
  // FIXME: and also to add the following condition: dateNextRevise < currentDate
  const cardsToRevise = cards.filter(card => card.deckId === deckId) || []
  console.log(match)
  return (
    <div className='container'>
      <main className={css.rememberContainer}>
        <h2 className={css.remember__title}>{currentDeck.title}</h2>
        {(cardsToRevise.length > 0)
          ? (<Card question={cardsToRevise[0].question} />)
          : <NoOneCards textMsg='Here is no one cards to revise' comeBack={history.goBack} />
        }
      </main>
    </div>
  )
}

export default Revise
