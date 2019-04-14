import React, { Component } from 'react'
import Title2 from '../../common/title2/Title2'
import css from './topNearestCardsToRevise.module.sass'
import CardsContainer from './CardsContainer/CardsContainer'
import { sortByDate } from '../../../../lib/time'

export default class TopNearestCardsToRevise extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quantityCardsToShow: 5,
      filteredCards: props.cards.sort(sortByDate)
    }
    console.log(this.state)
  }

  render () {
    return (
      <div className={css.container}>
        <Title2 content='Ближайшие карточки для повторения' />
        <label className={css.quantity_label} htmlFor='quantity_cards'>Количество карточек</label>
        <input className={css.quantity_input} id='quantity_cards' type='number' min={0} max={500} placeholder='0-500' defaultValue={5} />
        <CardsContainer cards={this.state.filteredCards} />
      </div>
    )
  }
}
