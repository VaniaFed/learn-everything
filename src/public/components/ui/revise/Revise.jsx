import React, { Component } from 'react'

import Card from './Card/Card'

import css from './revise.module.sass'
import NoOneCards from '../common/NoOneCards'
import { tmpdir } from 'os';

class Revise extends Component {
  constructor (props) {
    super(props)
    const { id } = props.match.params
    const cardsToRevise = props.cards.filter(card => card.deckId === id)
    this.state = {
      cards: cardsToRevise,
      isPressedCheck: false
    }
    this.checkAnswer = this.checkAnswer.bind(this)
    this.choiceLevel = this.choiceLevel.bind(this)
    this.calcNextDateRevise = this.calcNextDateRevise.bind(this)
  }

  checkAnswer () {
    console.log(this.state)
    this.setState({
      isPressedCheck: !this.state.isPressedCheck
    })
  }

  choiceLevel (level, card) {
    // TODO:
    // 1. YES найти разницу дат
    // 2. YES определить уровень
    // 3. Записать nextRevise и prevRevise в state (глобальный - в redux)
    //      datePrevRevise = currentDate
    //      dateNextRevise = currentDate + daysToRevise
    // 4. next card
    
    const { datePrevRevise, dateNextRevise } = card
    const difference = this.datesDifference(datePrevRevise, '2019.04.04')
    console.log(datePrevRevise)
    console.log('difference: ', difference)
    const newDateNextRevise = this.calcNextDateRevise(level, difference)
    console.log(newDateNextRevise)

    // const newDateNextRevice = 0
    // const newDatePrevRevice = 0
    // switch(level) {
    //   case 'forget':
    //     newDatePrevRevice = dateNextRevise
    //     newDateNextRevice = datePrevRevice

    // }
    /*
      if == forget то
        dateNextRevice = datePrevRevice
      if == difficult то
        dateNextRevice = difference
      if == normal то
        dateNextRevice = difference * 2 - 1
      if == normal то
        dateNextRevice = difference * 3 - 1
    */
    // this.setState()
  }

  datesDifference (prevDate, nextDate) {
    const date1 = new Date(prevDate)
    const date2 = new Date(nextDate)
    const secondsInDay = 1000 * 3600 * 24

    console.log('date1: ', date1)
    console.log('date2: ', date2)

    return Math.abs(Math.ceil((date2.getTime() - date1.getTime()) / secondsInDay))
  }

  calcNextDateRevise (level, difference) {
    let dateNextRevise = 0
    switch (level) {
      case 'forget':
        dateNextRevise = 0
        console.log('forget')
        break
      case 'difficult':
        console.log('difficult')
        dateNextRevise = difference + 1
        break
      case 'normal':
        dateNextRevise = difference * 2 + 1
        console.log('noramal')
        break
      case 'easy':
        dateNextRevise = difference * 3 + 1
        console.log('easy')
        break
      default:
        break
    }
    return dateNextRevise
  }

  render () {
    const { decks, match, history } = this.props
    const { checkAnswer, choiceLevel } = this
    const { cards, isPressedCheck } = this.state
    const deckId = match.params.id
    const currentDeck = decks.find(deck => deck.id === deckId)
    console.log(cards)
    // FIXME: and also to add the following condition: dateNextRevise < currentDate
    return (
      <div className='container'>
        <main className={css.rememberContainer}>
          <h2 className={css.remember__title}>{currentDeck.title}</h2>
          {(cards.length > 0)
            ? (<Card question={cards[0].question}
              answer={cards[0].answer}
              onCheckAnswer={checkAnswer}
              isPressedCheck={isPressedCheck}
              onChoiceLevel={(level) => choiceLevel(level, cards[0])} />)
            : <NoOneCards textMsg='Here is no one cards to revise' comeBack={history.goBack} />
          }
        </main>
      </div>
    )
  }
}

export default Revise
