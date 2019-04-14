import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Title from '../common/title1/Title'
import Row from './row/Row'
import NoOneCards from '../common/noOneCards/NoOneCards'
import Button from '../common/button/Button'

import css from './test.module.sass'
import { isQuestionOrAnswerEmpty } from '../../../lib/cards'

const Rows = ({ cardsToPassTest, isPressedCheck, onChangeAnswer }) => {
  return (
    cardsToPassTest.map((card, i) =>
      <Row key={i}
        questionText={card.question}
        answerText={card.answer}
        isPressedCheck={isPressedCheck}
        isCorrect={card.isCorrect}
        userAnswer={card.userAnswer}
        onChangeAnswer={(userAnswer) => onChangeAnswer(card.id, userAnswer)}
      />
    )
  )
}

class Test extends Component {
  constructor (props) {
    super(props)
    const { id } = props.match.params
    const cardsToPassTest = props.cards.filter(
      card => card.deckId === id &&
      !isQuestionOrAnswerEmpty(card.question, card.answer)
    )
    this.state = {
      cards: cardsToPassTest.map(card =>
        ({
          ...card,
          isCorrect: false,
          userAnswer: ''
        })
      ),
      isPressedCheck: false
    }
    console.log(this.state)
    this.checkAnswer = this.checkAnswer.bind(this)
    this.handleCheckAnswers = this.handleCheckAnswers.bind(this)
    this.changeAnswer = this.changeAnswer.bind(this)
  }

  checkAnswer () {
    this.setState({
      isPressedCheck: !this.state.isPressedCheck
    })
  }

  handleCheckAnswers () {
    this.checkAnswer()
    this.checkAllAnswers()
  }

  isAnswerCorrect (correctAnswer, userAnswer) {
    return correctAnswer.toLowerCase() === userAnswer.toLowerCase()
  }

  checkAllAnswers () {
    console.log(this.state.cards)
    const cards = this.state.cards.map(card =>
      (this.isAnswerCorrect(card.answer, card.userAnswer))
        ? {
          ...card,
          isCorrect: true
        }
        : {
          ...card,
          isCorrect: false
        }
    )

    this.setState({ cards })
  }

  changeAnswer (cardId, userAnswer) {
    this.setState(prevState => ({
      cards: prevState.cards.map(card =>
        (card.id === cardId)
          ? {
            ...card,
            userAnswer
          }
          : card
      )
    }))
  }

  render () {
    const { decks, history } = this.props
    const { id } = this.props.match.params
    const currentDeck = decks.find(deck => deck.id === id)
    const cardsToPassTest = this.state.cards
    const { handleCheckAnswers, changeAnswer } = this
    const { isPressedCheck } = this.state
    return (
      <div className='container'>
        <Title className={css.title} content={currentDeck.title} />
        <div className={css.items}>
          {(cardsToPassTest.length > 0)
            ? (
              <div>
                <Rows cardsToPassTest={cardsToPassTest} isPressedCheck={isPressedCheck} onChangeAnswer={changeAnswer} />
                <Button className='default-btn-margin'
                  content={(!isPressedCheck) ? 'Проверить' : 'Сброс'}
                  onClick={handleCheckAnswers} />
              </div>
            )
            : <NoOneCards textMsg='Ни одной карточки для прохождения теста. Убедитесь, что у карточек заданы вопрос и ответ, и что они вообще существуют.' comeBack={history.goBack} />
          }
        </div>
      </div>
    )
  }
}

Test.PropTypes = {
  cards: PropTypes.array.isRequired,
  decks: PropTypes.array.isRequired
}

export default Test
