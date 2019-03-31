import React from 'react'
import PropTypes from 'prop-types'

import css from './revise.module.sass'

const Revise = (props, { store }) => {
  // const cardId = props.match.params.id
  // const decks = store.getState().decks
  // const deckId = decks.find(deck => deck.id === )
  // console.log(cardId)
  const questionText = 'How are you?'
  const title = 'Present simple'
  return (
    <div className='container'>
      <main className={css.rememberContainer}>
        <h2 className={css.remember__title}>{title}</h2>
        <div className={css.remember__question}>{questionText}</div>
        <button className={`${css.remember__check} button-hover`}>Проверить</button>
        <div className={`${css.rememberContainer__complexity} hidden`}>
          <button className={`${css.complexity__item} button-hover`}>Забыл</button>
          <button className={`${css.complexity__item} button-hover`}>Сложно</button>
          <button className={`${css.complexity__item} button-hover`}>Нормально</button>
          <button className={`${css.complexity__item} button-hover`}>Легко</button>
        </div>
      </main>
    </div>
  )
}

Revise.propTypes = {
}

Revise.contextTypes = {
  store: PropTypes.object
}

export default Revise
