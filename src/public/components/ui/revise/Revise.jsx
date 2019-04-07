import React, { Component } from 'react'

import Card from './Card/Card'

import css from './revise.module.sass'
import NoOneCards from '../common/NoOneCards'

import { doubleDate } from '../../../lib/time'

class Revise extends Component {
  constructor (props) {
    super(props)
    const { id } = props.match.params
    const cardsToRevise = props.cards.filter(card =>
      card.deckId === id &&
      new Date().getTime() >= new Date(card.dateNextRevise).getTime()
    )

    this.state = {
      cards: cardsToRevise,
      isPressedCheck: false
    }

    this.checkAnswer = this.checkAnswer.bind(this)
    this.calcAndGetNextDates = this.calcAndGetNextDates.bind(this)
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
    const difference = this.datesDifference(datePrevRevise, dateNextRevise)
    const daysToNextRevise = this.howManyDaysLeftToNextRevise(level, difference)
    const y = new Date().getFullYear()
    const m = doubleDate(new Date().getMonth() + 1)
    const d = doubleDate(new Date().getDate())
    const currentDate = `${y}.${m}.${d}`
    const newDateNextRevise = this.currentDatePlusDifference(currentDate, daysToNextRevise)

    if (level !== 'forget') {
      this.props.onChangeDateRevise(card.id, currentDate, newDateNextRevise)
      const nextState = this.state.cards.filter(stateCard =>
        stateCard.id !== card.id
      )

      this.setState({ cards: nextState })
    }
    this.nextCard()
    // TODO:
    // осталось сделать проверку при выводе карточки и выводить дате следующего повторения =))))
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

  datesDifference (prevDate, nextDate) {
    const date1 = new Date(prevDate)
    const date2 = new Date(nextDate)
    const secondsInDay = 1000 * 3600 * 24

    return Math.abs(Math.ceil((date2.getTime() - date1.getTime()) / secondsInDay))
  }

  howManyDaysLeftToNextRevise (level, difference) {
    let dayNextRevise = 0
    switch (level) {
      case 'forget':
        dayNextRevise = 0
        console.log('forget')
        break
      case 'difficult':
        console.log('difficult')
        dayNextRevise = difference + 1
        break
      case 'normal':
        dayNextRevise = difference * 2 + 1
        console.log('normal')
        break
      case 'easy':
        dayNextRevise = difference * 3 + 1
        console.log('easy')
        break
      default:
        break
    }
    return dayNextRevise
  }

  currentDatePlusDifference (currentDate, dayNextRevise) {
    const secondsInDay = 1000 * 3600 * 24
    const currentDateInSeconds = new Date(currentDate).getTime()
    const sumDates = currentDateInSeconds + (dayNextRevise * secondsInDay)
    const newDate = new Date(sumDates)
    const y = newDate.getFullYear()
    const m = doubleDate(newDate.getMonth() + 1)
    const d = doubleDate(newDate.getDate())
    const calculatedDate = `${y}.${m}.${d}`
    return calculatedDate
  }

  calcPotentialNextDates (difference) {
    return {
      forget: 0,
      difficult: difference + 1,
      normal: difference * 2 + 1,
      easy: difference * 3 + 1
    }
  }

  calcAndGetNextDates (prevDate, nextDate) {
    const difference = this.datesDifference(prevDate, nextDate)
    const nextDates = this.calcPotentialNextDates(difference)
    return nextDates
  }

  render () {
    const { decks, match, history } = this.props
    const { handleChoiceLevel, handleCheckAnswer, calcAndGetNextDates } = this
    const { cards, isPressedCheck } = this.state
    const deckId = match.params.id
    const currentDeck = decks.find(deck => deck.id === deckId)
    return (
      <div className='container'>
        <main className={css.rememberContainer}>
          <h2 className={css.remember__title}>{currentDeck.title}</h2>
          {(cards.length > 0)
            ? (<Card
              question={cards[0].question}
              answer={cards[0].answer}
              nextDates={calcAndGetNextDates(cards[0].datePrevRevise, cards[0].dateNextRevise)}
              onCheckAnswer={handleCheckAnswer}
              isPressedCheck={isPressedCheck}
              onChoiceLevel={(level) => handleChoiceLevel(level, cards[0])}
            />)
            : <NoOneCards textMsg='Here is no one cards to revise' comeBack={history.goBack} />
          }
        </main>
      </div>
    )
  }
}

export default Revise
