import React, { Component } from 'react'

import Card from './Card/Card'
import NoOneCards from '../common/noOneCards/NoOneCards'
import Title from '../common/title1/Title'
import TopNearestCardsToRevise from './topNearestCardsToRevise/TopNearestCardsToRevise'

import css from './revise.module.sass'

import { doubleDate,
  isTimeToRevise,
  datesDifference,
  howManyDaysLeftToNextRevise,
  currentDatePlusDifference,
  calcPotentialNextDates,
  calcAndGetNextDates
} from '../../../lib/time'

import { isQuestionOrAnswerEmpty } from '../../../lib/cards'

class Revise extends Component {
  constructor (props) {
    super(props)
    const { id } = props.match.params
    const cardsToRevise = props.cards.filter(card =>
      card.deckId === id &&
      isTimeToRevise(card.dateNextRevise) &&
      !isQuestionOrAnswerEmpty(card.question, card.answer)
    )
    console.log(cardsToRevise)

    this.state = {
      cards: cardsToRevise,
      isPressedCheck: false
    }

    this.checkAnswer = this.checkAnswer.bind(this)
    this.calcAndGetNextDates = calcAndGetNextDates.bind(this)
    this.handleChoiceLevel = this.handleChoiceLevel.bind(this)
    this.handleCheckAnswer = this.handleCheckAnswer.bind(this)
  }

  shouldComponentUpdate (nextState) {
    return this.state.cards !== nextState.cards ||
      this.state.isPressedCheck !== nextState.isPressedCheck
  }

  handleChoiceLevel (level, card) {
    // FIXME:
    // вменсто того, чтобы извлекать по отдельности y, m и d из Date, лучше создать f() возвращающую `${y}.${m}.${d}`
    const { datePrevRevise, dateNextRevise } = card
    const difference = datesDifference(datePrevRevise, dateNextRevise)
    const daysToNextRevise = howManyDaysLeftToNextRevise(level, difference)
    const y = new Date().getFullYear()
    const m = doubleDate(new Date().getMonth() + 1)
    const d = doubleDate(new Date().getDate())
    const currentDate = `${y}.${m}.${d}`
    const newDateNextRevise = currentDatePlusDifference(currentDate, daysToNextRevise)

    const nextState = (level === 'forget')
      ? this.state.cards
      : this.state.cards.filter(stateCard => stateCard.id !== card.id)

    this.props.onChangeDateRevise(card.id, currentDate, newDateNextRevise)
    this.setState({ cards: nextState })
    this.nextCard()
  }

  handleCheckAnswer (prevDate, nextDate) {
    this.checkAnswer()
  }

  checkAnswer () {
    this.setState({
      isPressedCheck: !this.state.isPressedCheck
    })
  }

  nextCard () {
    this.setState({
      isPressedCheck: !this.state.isPressedCheck
    })
  }

  render () {
    const { decks, match, history } = this.props
    const { handleChoiceLevel, handleCheckAnswer, calcAndGetNextDates } = this
    const { cards, isPressedCheck } = this.state
    const deckId = match.params.id
    const currentDeck = decks.find(deck => deck.id === deckId)
    const allCardsOfCurrentDeck = this.props.cards.filter(card => card.deckId === deckId)
    return (
      <div className='container'>
        <main>
          <Title className={css.title} content={currentDeck.title} />
          {(cards.length > 0)
            ? (<Card
              question={cards[0].question}
              answer={cards[0].answer}
              nextDates={calcAndGetNextDates(cards[0].datePrevRevise, cards[0].dateNextRevise)}
              onCheckAnswer={handleCheckAnswer}
              isPressedCheck={isPressedCheck}
              onChoiceLevel={(level) => handleChoiceLevel(level, cards[0])}
            />)
            : <div>
              <NoOneCards textMsg='Нет ни одной карточки для повторения. Пожалуйста, зайдите позже.' comeBack={history.goBack} />
              <TopNearestCardsToRevise cards={allCardsOfCurrentDeck} />
            </div>
          }
        </main>
      </div>
    )
  }
}

export default Revise
