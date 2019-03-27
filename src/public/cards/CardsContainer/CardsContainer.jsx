import React from 'react';
import PropTypes from 'prop-types';

import Row from '../row/Row';
import Button from '../../common/Button';
import css from './CardsContainer.module.sass';
import { removeCard, addCard, changeQuestion, changeAnswer } from '../../actions';

const CardsContainer = ({ store={}, cards=[], deckId=-1 }) => {
  return (
    <div className={css.container}>
      {cards.length === 0 ?
        <h3>Тут пусто. (Создать карточку?)</h3> :
        cards.map((card, i) =>
          <Row key={card.id}
                    questionText={card.question}
                    answerText={card.answer}
                    onDelete={() => store.dispatch( removeCard(card.id) )}
                    onChangeQuestion={(newQuestion) => store.dispatch( changeQuestion(card.id, newQuestion) )}
                    onChangeAnswer={(newAnswer) => store.dispatch( changeAnswer(card.id, newAnswer) )}
          />
        )}
      <Button className="default-btn"
              content="Добавить карточку"
              onClick={ () => store.dispatch( addCard(deckId) ) }
      />
    </div>
  )
}

CardsContainer.propTypes = {
  store: PropTypes.object,
}

export default CardsContainer;
