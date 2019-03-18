import React, { Component } from 'react';
import { render } from 'react-dom';
import { v4 } from 'uuid';


import Title from '../common/Title';
import Row from './row/Row';
import Button from '../common/Button.jsx';

import css from './test.module.sass';

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

  componentDidMount() {
    console.log('Test was mount');
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
        <Title className={css.title} title={title} />
        <div className={css.items}>
          {cards.map((card, i) =>
            <Row key={i}
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

render(
  <Test />,
  document.querySelector('#test')
);
