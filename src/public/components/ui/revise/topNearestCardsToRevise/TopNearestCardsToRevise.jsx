import React, { Component } from 'react'
import Title2 from '../../common/title2/Title2'
import css from './topNearestCardsToRevise.module.sass'
import CardsContainer from './CardsContainer/CardsContainer'
import { sortByDate } from '../../../../lib/time'
import { isQuestionOrAnswerEmpty } from '../../../../lib/cards'

export default class TopNearestCardsToRevise extends Component {
  constructor (props) {
    super(props)
    const cards = props.cards.filter(card => !isQuestionOrAnswerEmpty(card.question, card.answer))
    this.sortedCards = cards.sort(sortByDate)

    this.state = {
      quantityCardsToShow: 5,
      filteredCards: this.sortedCards.slice(0, 5)
    }
    this.quantityCardsInput = React.createRef()
    this.changeQuantityCardsToShow = this.changeQuantityCardsToShow.bind(this)
  }

  changeQuantityCardsToShow (number) {
    let numberToState = this.isBeyondTheRangeFixIt(number)
    this.setState({
      quantityCardsToShow: numberToState,
      filteredCards: this.sortedCards.slice(0, numberToState)
    })
  }

  isBeyondTheRangeFixIt (inputNumber) {
    let resultNumber = inputNumber

    if (resultNumber < 0) {
      resultNumber = 0
    }
    if (resultNumber > 500) {
      resultNumber = 500
    }

    return resultNumber
  }

  render () {
    const { quantityCardsInput, changeQuantityCardsToShow } = this
    const { quantityCardsToShow, filteredCards } = this.state
    return (
      <div className={css.container}>
        <Title2 content='Ближайшие карточки для повторения' />
        <label className={css.quantity_label} htmlFor='quantity_cards'>Количество карточек:</label>
        <input className={css.quantity_input}
          id='quantity_cards'
          ref={quantityCardsInput}
          type='number'
          onChange={() => changeQuantityCardsToShow(+quantityCardsInput.current.value)}
          min={0}
          max={500}
          placeholder='0-500'
          defaultValue={5} />
        <CardsContainer cards={filteredCards} quantityCardsToShow={quantityCardsToShow} />
      </div>
    )
  }
}
