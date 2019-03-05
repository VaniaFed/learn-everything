import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { v4 } from 'uuid';

import Title from '../common/Title';
import TestItem from './TestItem';
import Button from '../common/Button';

class Test extends Component {
  constructor(props) {
    super(props);

    this.checkAllAnswers = this.checkAllAnswers.bind(this);
    this.changeCards = this.changeCards.bind(this);

    this.state = {
      title: 'Present Continuous',
      cards: [
        {
          id: v4(),
          question: 'Кто ты?',
          answer: 'Who are you?',
          userAnswer: '',
        },
        {
          id: v4(),
          question: 'Кто ты?',
          answer: 'Who are you?',
          userAnswer: '',
        },
      ],
    }
  }

  changeCards(id, userAnswer) {
    const cards = this.state.cards.map(card =>
      card.id !== id ?
        card :
        {
          ...card,
          userAnswer
        }
    )

    this.setState({cards});
  }

  isAnswerCorrectly(correctAnswer, userAnswer) {
    return correctAnswer.toLowerCase() === userAnswer.toLowerCase();
  }

  checkAllAnswers() {
    this.state.cards.map(card =>
      this.isAnswerCorrectly(card.answer, card.userAnswer) ?
        console.log(true) :
        console.log(false)
    )
  }

  render() {
    const { cards, title } = this.state;
    const { checkAllAnswers, changeCards } = this;
    return (
      <div>
        <Title title={title} />
        <div className="test-items">
          {cards.map((card, i) =>
            <TestItem key={i}
                      questionText={card.question}
                      onChange={(userAnswer) => changeCards(card.id, userAnswer)}
            />
          )}
          <Button className="default-btn" content="Check the result" onClick={checkAllAnswers} />
        </div>
      </div>
    )
  }
}

Test.propTypes = {
  title: PropTypes.string,
  questionsLIst: PropTypes.array,
}

render(
  <Test />,
  document.querySelector('#test')
);
