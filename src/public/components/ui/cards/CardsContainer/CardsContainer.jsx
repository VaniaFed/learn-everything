import React from 'react'
import PropTypes from 'prop-types'

import Row from '../row/Row'
import css from './CardsContainer.module.sass'
import Text from '../../common/text/Text'

const CardsContainer = ({ cards, onDelete, onChangeQuestion, onChangeAnswer }) => {
  return (
    <div className={css.container}>
      {cards.length === 0
        ? <Text>Тут пусто. (Создать карточку?)</Text>
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
