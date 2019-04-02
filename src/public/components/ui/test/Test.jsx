import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Title from '../common/Title'
import Row from './row/Row'
import Button from '../common/button/Button'

import css from './test.module.sass'
import NoOneCards from '../common/NoOneCards';

const Rows = ({ cardsToPassTest }) => {
  return (
    cardsToPassTest.map((card, i) =>
      <Row key={i}
        questionText={card.question}
        // onChange={(userAnswer) => changeCards (card.id, userAnswer)}
      />
    )
  )
}

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
    const { cards, decks, history } = this.props
    const { id } = this.props.match.params
    const currentDeck = decks.find(deck => deck.id === id)
    const cardsToPassTest = cards.filter(card => card.deckId === id)
    const { checkAllAnswers } = this
    return (
      <div className='container'>
        <Title className={css.title} title={currentDeck.title} />
        <div className={css.items}>
          {(cardsToPassTest.length > 0)
            ? (
              <div className="">
                <Rows cardsToPassTest={cardsToPassTest} />
                <Button className='default-btn' content='Check the result' onClick={checkAllAnswers} />
              </div>
            )
            : <NoOneCards textMsg='Here is no one cards to pass the test' comeBack={history.goBack} />
          }
        </div>
      </div>
    )
  }
}

Test.contextTypes = {
  store: PropTypes.object
}

export default Test

