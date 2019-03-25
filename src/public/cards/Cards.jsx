import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import css from './cards.module.sass';
import { renameDeck } from '../actions';

import Row from './row/Row';
import Button from '../common/Button';
import CardsNav from './cardsNav/CardsNav';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.changeQuestion = this.changeQuestion.bind(this);
    this.changeAnswer = this.changeAnswer.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);

    this.state = {
      cards: [
        {
          id: v4(),
          question: 'Кто ты?',
          answer: 'Who are you?',
        },
        {
          id: v4(),
          question: 'Кто ты?',
          answer: 'Who are you?',
        },
      ],
    }
  }

  changeQuestion(cardId, question) {
    const cards = this.state.cards.map(card => 
      card.id !== cardId ?
      card :
      {
        ...card,
        question,
      }
    )

    this.setState({ cards });
  }

  changeAnswer(cardId, answer) {
    const cards = this.state.cards.map(card => 
      card.id !== cardId ?
      card :
      {
        ...card,
        answer: answer,
      }
    )

    this.setState({ cards });
  }

  addCard() {
    const cards = [
      ...this.state.cards,
      {
        id: v4(),
        question: '',
        answer: '',
      }
    ]

    this.setState({ cards });
  }

  deleteCard (id) {
    const cards = this.state.cards.filter(card =>
      card.id !== id
    );

    this.setState({cards});
  }

  render() {
    const { cards } = this.state;
    const { title } = this.props;
    const { changeQuestion, changeAnswer, addCard, deleteCard } = this;
    const { store } = this.props;
    console.log(store.getState()); 
    return (
      // TODO: превратить h1 в input при вводе текста изменять название deck
      // при помощи роута достаем из URL id колоды
      <div className="container">
        <input className={css.input_deck_name}
               defaultValue={store.getState().decks[0].title}
               type="text"
               onBlur={() => {
                 console.log('hello')
                 store.dispatch( renameDeck(store.getState().decks[0].id, 'hello') )
               }}
        />
        <CardsNav />        
        <div className={css.testItems}>
          {cards.length === 0 ?
          <h3>Тут пусто. (Создать карточку?)</h3> :
          cards.map((card, i) =>
            <Row key={card.id}
                      questionText={card.question}
                      answerText={card.answer}
                      onDelete={() => deleteCard(card.id)}
                      // TODO: сделать изменение вопроса / ответа карточки при вводе в инпут
                      onChangeQuestion={(newQuestion) => changeQuestion(card.id, newQuestion)}          
                      onChangeAnswer={(newAnswer) => changeAnswer(card.id, newAnswer)}          
            />
          )}
          <Button className="default-btn"
                  content="Add new Card"
                  onClick={addCard}
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