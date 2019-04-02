import React from 'react'
import PropTypes from 'prop-types'

import Row from '../row/Row'
import css from './CardsContainer.module.sass'

const CardsContainer = ({ cards = [], deckId = -1, onDelete = f => f,
  onChangeQuestion,
  onChangeAnswer }) => {
  return (
    <div className={css.container}>
      {cards.length === 0
        ? <h3>Тут пусто. (Создать карточку?)</h3>
        : cards.map((card, i) => {
          return (
            <Row key={card.id}
              questionText={card.question}
              answerText={card.answer}
              onDelete={() => onDelete(card.id)}
              onChangeQuestion={(newQuestion) => onChangeQuestion(card.id, newQuestion)}
              onChangeAnswer={(newAnswer) => onChangeAnswer(card.id, newAnswer)}
            />
          )
        }
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
