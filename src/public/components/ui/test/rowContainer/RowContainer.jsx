import React from 'react'
import PropTypes from 'prop-types'

import Row from '../row/Row'
import Button from '../../common/button/Button'

import css from './rowContainer.module.sass'

const RowContainer = ({ cardsToPassTest, isPressedCheck, onChangeAnswer, handleCheckAnswers, history }) => {
  return (
    <div className={css.container}>
      {cardsToPassTest.map((card, i) =>
        <Row key={i}
          questionText={card.question}
          answerText={card.answer}
          isPressedCheck={isPressedCheck}
          isCorrect={card.isCorrect}
          userAnswer={card.userAnswer}
          onChangeAnswer={userAnswer => onChangeAnswer(card.id, userAnswer)} />)}
      <Button className='default-btn-margin' onClick={handleCheckAnswers}>
        {(!isPressedCheck) ? 'Проверить' : 'Сброс'}
      </Button>
      <Button className='default-btn-margin' onClick={() => history.goBack()}>Вернуться обратно</Button>
    </div>
  )
}

RowContainer.propTypes = {
  cardsToPassTest: PropTypes.array.isRequired,
  isPressedCheck: PropTypes.bool.isRequired,
  onChangeAnswer: PropTypes.func.isRequired,
  handleCheckAnswers: PropTypes.func.isRequired,
  history: PropTypes.object
}

RowContainer.defaultProps = {
  cardsToPassTest: [],
  isPressedCheck: false,
  onChangeAnswer: f => f,
  handleCheckAnswers: f => f,
  history: {}
}

export default RowContainer
