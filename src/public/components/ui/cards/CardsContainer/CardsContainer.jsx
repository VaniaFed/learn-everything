import React from 'react'
import PropTypes from 'prop-types'

import Row from '../row/Row'
import css from './CardsContainer.module.sass'
import { removeCard, changeQuestion, changeAnswer } from '../../../../actions'

const CardsContainer = ({ cards = [], deckId = -1 }, { store }) => {
  return (
    <div className={css.container}>
      {cards.length === 0
        ? <h3>Тут пусто. (Создать карточку?)</h3>
        : cards.map((card, i) =>
          <Row key={card.id}
            questionText={card.question}
            answerText={card.answer}
            onDelete={() => store.dispatch(removeCard(card.id))}
            onChangeQuestion={(newQuestion) => store.dispatch(changeQuestion(card.id, newQuestion))}
            onChangeAnswer={(newAnswer) => store.dispatch(changeAnswer(card.id, newAnswer))}
          />
        )}
    </div>
  )
}

CardsContainer.contextTypes = {
  store: PropTypes.object
}

CardsContainer.propTypes = {
  store: PropTypes.object
}

export default CardsContainer
