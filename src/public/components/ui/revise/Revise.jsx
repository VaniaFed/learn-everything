import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Card from './Card/Card'

import css from './revise.module.sass'
import NoOneCards from '../common/NoOneCards'

class Revise extends Component {
  constructor (props) {
    super(props)
    this.checkAnswer = this.checkAnswer.bind(this)
    this.state = {
      isAnswered: false
    }
  }

  checkAnswer () {
    console.log(this.state)
    this.setState({
      isAnswered: !this.state.isAnswered
    })
  }

  render () {
    const { cards, decks, match, history } = this.props
    const { checkAnswer } = this
    const { isAnswered } = this.state
    const deckId = match.params.id
    const currentDeck = decks.find(deck => deck.id === deckId)
    // FIXME: and also to add the following condition: dateNextRevise < currentDate
    const cardsToRevise = cards.filter(card => card.deckId === deckId) || []
    return (
      <div className='container'>
        <main className={css.rememberContainer}>
          <h2 className={css.remember__title}>{currentDeck.title}</h2>
          {(cardsToRevise.length > 0)
            ? (<Card question={cardsToRevise[0].question} answer={cardsToRevise[0].answer} checkAnswer={checkAnswer} isAnswered={isAnswered} />)
            : <NoOneCards textMsg='Here is no one cards to revise' comeBack={history.goBack} />
          }
        </main>
      </div>
    )
  }
}

export default Revise
