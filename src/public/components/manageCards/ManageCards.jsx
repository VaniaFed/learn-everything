import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { v4 } from 'uuid';

import Title from '../common/Title';
import TestItem from './TestItem';
import Button from '../common/Button';

class ManageCards extends Component {
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
    console.log(this.state.cards)
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
    console.log(this.state.cards)
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
    console.log('presser', id)
    const cards = this.state.cards.filter(card =>
      card.id !== id
    );

    this.setState({cards});
  }

  render() {
    const { cards } = this.state;
    const { title } = this.props;
    const { changeQuestion, changeAnswer, addCard, deleteCard } = this;
    return (
      <div>
        <Title title={title} />
        <div className="test-items">
          {cards.length === 0 ?
          <h3>Тут пусто. (Создать карточку?)</h3> :
          cards.map((card, i) =>
            <TestItem key={i}
                      questionText={card.question}
                      answerText={card.answer}
                      onDelete={() => deleteCard(card.id)}
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

ManageCards.propTypes = {
  title: PropTypes.string,
  questionsList: PropTypes.array,
  answersList: PropTypes.array,
}

ManageCards.defaultProps = {
  title: 'untitled list',
  questionsList: [],
  answersList: [],
}

render(
  <ManageCards title="Present simple" />,
  document.querySelector('#manage-cards')
);