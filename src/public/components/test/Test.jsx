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

    this.checkAnswer = this.checkAnswer.bind(this);

    this.state = {
      title: 'Present Continuous',
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

  checkAnswer(correctAnswer, userAnswer) {
    console.log('checked');
    return correctAnswer.toLowerCase() === userAnswer.toLowerCase();
  }

  render() {
    const { cards, title } = this.state;
    const { checkAnswer } = this;
    return (
      <div>
        <Title title={title} />
        <div className="test-items">
          {cards.map((card, i) =>
            <TestItem key={i} questionText={card.question} enabled={true} />
          )}
          <Button className="default-btn" content="Check the result" onClick={checkAnswer} />
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
