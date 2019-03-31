import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Title from '../common/Title'
import Row from './row/Row'
import Button from '../common/button/Button'

import css from './test.module.sass'

class Test extends Component {
  isAnswerCorrectly (correctAnswer, userAnswer) {
    return correctAnswer.toLowerCase() === userAnswer.toLowerCase()
  }

  checkAllAnswers () {
    this.state.cards.map(card =>
      this.isAnswerCorrectly(card.answer, card.userAnswer)
        ? console.log(true)
        : console.log(false)
    )
  }

  render () {
    const { store } = this.props
    const state = store.getState()
    const { id } = this.props.match.params
    const currentDeck = state.decks.find(deck => deck.id === id)
    const cards = state.cards.filter(card => card.deckId === id)
    const { checkAllAnswers } = this
    console.log('currentDeck: ', cards)
    return (
      <div className='container'>
        <Title className={css.title} title={currentDeck.title} />
        <div className={css.items}>
          {cards.map((card, i) =>
            <Row key={i}
              questionText={card.question}
              // onChange={(userAnswer) => changeCards (card.id, userAnswer)}
            />
          )}
          <Button className='default-btn' content='Check the result' onClick={checkAllAnswers} />
        </div>
      </div>
    )
  }
}

Test.contextTypes = {
  store: PropTypes.object
}

export default Test

