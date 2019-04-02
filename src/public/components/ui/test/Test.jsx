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
    const { cards, decks } = this.props
    const { id } = this.props.match.params
    const currentDeck = decks.find(deck => deck.id === id)
    const currentCards = cards.filter(card => card.deckId === id)
    const { checkAllAnswers } = this
    return (
      <div className='container'>
        <Title className={css.title} title={currentDeck.title} />
        <div className={css.items}>
          {currentCards.map((card, i) =>
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

