import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import css from './cards.module.sass';
import { renameDeck, removeCard, addCard } from '../actions';

import Row from './row/Row';
import Button from '../common/Button';
import CardsNav from './cardsNav/CardsNav';

class Cards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    // TODO: title нужно будет получать из deck, где id = idDeck
    const state = this.props.store.getState();
    const { store } = this.props;
    console.log(state); 
    return (
      // TODO: превратить h1 в input при вводе текста изменять название deck
      // при помощи роута достаем из URL id колоды
      <div className="container">
        <input className={css.input_deck_name}
               defaultValue={title}
               type="text"
               onBlur={() => {
                 console.log('hello')
                //  store.dispatch( renameDeck(state.decks[0].id, 'hello') )
               }}
        />
        <CardsNav />
        <div className={css.testItems}>
          {state.cards.length === 0 ?
          <h3>Тут пусто. (Создать карточку?)</h3> :
          state.cards.map((card, i) =>
            <Row key={card.id}
                      questionText={card.question}
                      answerText={card.answer}
                      onDelete={() => store.dispatch( removeCard(card.id) )}
                      // TODO: сделать изменение вопроса / ответа карточки при вводе в инпут
                      // onChangeQuestion={(newQuestion) => changeQuestion(card.id, newQuestion)}          
                      // onChangeAnswer={(newAnswer) => changeAnswer(card.id, newAnswer)}          
            />
          )}
          <Button className="default-btn"
                  content="Add new Card"
                  onClick={ () => store.dispatch( addCard({}) ) }
          />
        </div>
      </div>
    )
  }
}

Cards.propTypes = {
  title: PropTypes.string,
  questionsList: PropTypes.array,
  answersList: PropTypes.array,
}

Cards.defaultProps = {
  title: 'untitled list',
  questionsList: [],
  answersList: [],
}

export default Cards;