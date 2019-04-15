import React from 'react'
import PropTypes from 'prop-types'

import Row from '../row/Row'
import CardInfo from '../cardInfo/CardInfo'
import css from './cardsContainer.module.sass'
import Text from '../../../common/text/Text';

const CardsContainer = ({ cards = [] }) => {
  return (
    <div className={css.container}>
      {cards.length === 0
        ? <Text>Тут пусто. (Вы не создали ни одной карточки или не заполнены поля вопрос / ответ)</Text>
        : cards.map((card, i) => {
          return (
            <div className={css.item}>
              <Row key={card.id}
                questionText={card.question}
                answerText={card.answer}
              />
              <CardInfo prevDate={card.datePrevRevise} nextDate={card.dateNextRevise} />
            </div>
          )
        }
        )}
    </div>
  )
}

CardsContainer.propTypes = {
  cards: PropTypes.array
}

export default CardsContainer
