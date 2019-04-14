import React from 'react'
import PropTypes from 'prop-types'

import Row from '../row/Row'
import css from './CardsContainer.module.sass'

const CardsContainer = ({ cards = [], onDelete = f => f,
  onChangeQuestion = f => f,
  onChangeAnswer = f => f }) => {
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

CardsContainer.propTypes = {
  cards: PropTypes.array,
  onDelete: PropTypes.func,
  onChangeQuestion: PropTypes.func,
  onChangeAnswer: PropTypes.func
}

export default CardsContainer
